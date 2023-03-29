import {Users} from "./Users";

export interface Message {
  id?: number;
  sender: Users;
  receiver: Users;
  message: string;
  createdAt?: string;
}
