export interface Message {
  id?: string;
  text: string;
  author: string;
  timestamp?: firebase.firestore.Timestamp;
}

export interface ChatMessageProps {
  isOwner: boolean;
  message: Message;
}
