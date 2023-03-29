import { Injectable } from '@angular/core';
import { ChatMessage } from "../interfaces/ChatMessage";
import * as Stomp from '@stomp/stompjs';
import { StompConfig as StompJsConfig } from '@stomp/stompjs';

import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {


  private stompClient!: Stomp.Client;
  private messages$: Subject<ChatMessage> = new Subject<ChatMessage>();

  public connect(): void {
    const webSocket = new WebSocket('ws://localhost:8080/chat');

    const stompConfig: StompJsConfig = {
      webSocketFactory: () => webSocket,
      debug: (msg: string | any): void => {
        console.log(new Date(), msg);
      }
    };

    this.stompClient = new Stomp.Client(stompConfig);
    this.stompClient.activate();

    this.stompClient.onConnect = (frame: Stomp.Frame) => {
      this.stompClient.subscribe("/topic/messages", (message: Stomp.Message) => {
        this.messages$.next(JSON.parse(message.body) as ChatMessage);
      });
    };
  }

  public sendMessage(username: string, content: string): void {
    const message: ChatMessage = { username, content, timestamp: new Date() };
    this.stompClient.publish({ destination: '/app/chat', body: JSON.stringify(message) });
  }

  public getMessages(): Observable<ChatMessage> {
    return this.messages$.asObservable();
  }
}
