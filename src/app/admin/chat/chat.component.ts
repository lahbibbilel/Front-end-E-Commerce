import { Component, OnInit } from '@angular/core';
import { MessagesService } from "../../services/messages.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProdService } from "../../public/prod.service";
import { HttpClient } from "@angular/common/http";
import { Message } from "../../interfaces/Message";
import { Users } from "./Users";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messageForm!: FormGroup;
  messages: Message[] = [];
  conversation: Message[] = [];
  public showInput = false;

  constructor(private http: HttpClient, private formBuilder: FormBuilder, private messagesService:MessagesService) {
  }

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      senderId: ['', Validators.required],
      role_send: ['USER', Validators.required],
      receiverId: ['', Validators.required],
      role_rec: ['USER', Validators.required],
      message: ['', Validators.required]
    });
    // Sort conversation by createdAt in descending order
    this.conversation.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

  }

  onSubmit() {
    const messageData = {
      sender: {
        id: this.messageForm.value.senderId,
        role: this.messageForm.value.role_send
      },
      receiver: {
        id: this.messageForm.value.receiverId,
        role: this.messageForm.value.role_rec
      },
      message: this.messageForm.value.message
    };
    this.http.post('http://localhost:8181/api/messages', messageData).subscribe(
      res => {
        console.log('Message created successfully');
        this.messageForm.reset();
      },
      err => {
        console.error('Error creating message: ' + err.message);
      }
    );

    // Get conversation between the two users
    const senderId = this.messageForm.value.senderId;
    const receiverId = this.messageForm.value.receiverId;
    this.messagesService.getConversation(senderId, receiverId).subscribe(
      res => {
        console.log('Conversation between sender ' + senderId + ' and receiver ' + receiverId + ':');
        console.log(res);
        this.conversation = res; // Store the conversation in the conversation property
      },
      err => {
        console.error('Error getting conversation: ' + err.message);
      }
    );
  }
}


