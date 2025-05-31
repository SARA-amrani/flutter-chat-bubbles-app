
export interface Conversation {
  id: string;
  contactName: string;
  avatar: string;
  lastMessage: string;
  timestamp: Date;
  unreadCount: number;
}

export interface Message {
  id: string;
  conversationId: string;
  content: string;
  isMe: boolean;
  timestamp: Date;
}

export interface ChatState {
  conversations: Conversation[];
  messages: { [conversationId: string]: Message[] };
  selectedConversationId: string | null;
  loading: boolean;
}

export type ChatAction =
  | { type: 'LOAD_CONVERSATIONS'; payload: Conversation[] }
  | { type: 'LOAD_MESSAGES'; payload: { conversationId: string; messages: Message[] } }
  | { type: 'SELECT_CONVERSATION'; payload: string }
  | { type: 'SEND_MESSAGE'; payload: Message }
  | { type: 'RECEIVE_MESSAGE'; payload: Message }
  | { type: 'CREATE_CONVERSATION'; payload: Conversation }
  | { type: 'MARK_AS_READ'; payload: string };
