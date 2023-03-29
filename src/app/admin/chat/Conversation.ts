import {Users} from "./Users";

interface Conversation {
  _id: string;
  sender: Users;
  receiver: Users;
  message: string;
  createdAt: string;
  updatedAt: string;
}
