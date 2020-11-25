import { Message } from "./ChatMessage/ChatMessage.type";

export interface ChatState {
  text?: string;
  author: string;
  email: string;
  room: string;
  timestamp?: Date;
  messageLog: Message[] | undefined;
  isLoading: boolean;
}
