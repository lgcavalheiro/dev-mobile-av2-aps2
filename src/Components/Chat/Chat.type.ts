import { Message } from "./ChatMessage/ChatMessage.type";

export interface ChatState {
  text?: string;
  author: string;
  timestamp: Date | undefined;
  messageLog: Message[] | undefined;
}

