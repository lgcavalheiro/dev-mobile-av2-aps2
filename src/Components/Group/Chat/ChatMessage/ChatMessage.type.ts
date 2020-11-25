export interface Message {
  id?: string;
  text: string;
  author: string;
  email: string;
  timestamp?: firebase.firestore.Timestamp;
}

export interface ChatMessageProps {
  isOwner: boolean;
  message: Message;
}
