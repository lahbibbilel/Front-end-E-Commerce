import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Message} from "../interfaces/Message";
import {Users} from "../admin/chat/Users";

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private baseUrl = 'http://localhost:8181/api/messages';

  constructor(private http: HttpClient) { }

  createMessage(sender: Users, receiver: Users, message: string): Observable<Message> {
    const body = { sender, receiver, message };
    return this.http.post<Message>(this.baseUrl, body);
  }


  getConversation(senderId: number, receiverId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/conversation?sender=${senderId}&receiver=${receiverId}`);
  }


}
