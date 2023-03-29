import {User} from "./User";

export interface Message {
  id: number;
  sender: User;
  receiver: User;
  message: string;
  createdAt: Date;
  senderId: number;
  receiverId: number;
}
