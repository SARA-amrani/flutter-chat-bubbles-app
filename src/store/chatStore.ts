
import { create } from 'zustand';
import { ChatState, ChatAction, Conversation, Message } from '@/types/chat';
import { mockConversations, mockMessages } from '@/data/mockData';

interface ChatStore extends ChatState {
  loadConversations: () => void;
  loadMessages: (conversationId: string) => void;
  selectConversation: (conversationId: string) => void;
  sendMessage: (content: string) => void;
  receiveMessage: (message: Message) => void;
  createConversation: (contactName: string) => void;
  markAsRead: (conversationId: string) => void;
}

export const useChatStore = create<ChatStore>((set, get) => ({
  conversations: [],
  messages: {},
  selectedConversationId: null,
  loading: false,

  loadConversations: () => {
    set({ conversations: mockConversations, loading: false });
  },

  loadMessages: (conversationId: string) => {
    const messages = mockMessages[conversationId] || [];
    set(state => ({
      messages: {
        ...state.messages,
        [conversationId]: messages
      }
    }));
  },

  selectConversation: (conversationId: string) => {
    const state = get();
    set({ selectedConversationId: conversationId });
    
    // Charger les messages si pas déjà chargés
    if (!state.messages[conversationId]) {
      state.loadMessages(conversationId);
    }
    
    // Marquer comme lu
    state.markAsRead(conversationId);
  },

  sendMessage: (content: string) => {
    const state = get();
    if (!state.selectedConversationId) return;

    const newMessage: Message = {
      id: `m${Date.now()}`,
      conversationId: state.selectedConversationId,
      content,
      isMe: true,
      timestamp: new Date()
    };

    set(state => ({
      messages: {
        ...state.messages,
        [state.selectedConversationId!]: [
          ...(state.messages[state.selectedConversationId!] || []),
          newMessage
        ]
      },
      conversations: state.conversations.map(conv => 
        conv.id === state.selectedConversationId
          ? { ...conv, lastMessage: content, timestamp: new Date() }
          : conv
      )
    }));

    // Simuler une réponse automatique après 2 secondes
    setTimeout(() => {
      const responses = [
        "C'est intéressant !",
        "Je vois ce que tu veux dire.",
        "Absolument d'accord !",
        "Hmm, laisse-moi réfléchir...",
        "Excellente idée !",
        "Je ne suis pas sûr(e).",
        "Merci pour l'info !",
        "Tu as raison !"
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      const responseMessage: Message = {
        id: `m${Date.now()}_response`,
        conversationId: state.selectedConversationId!,
        content: randomResponse,
        isMe: false,
        timestamp: new Date()
      };

      get().receiveMessage(responseMessage);
    }, 2000);
  },

  receiveMessage: (message: Message) => {
    set(state => ({
      messages: {
        ...state.messages,
        [message.conversationId]: [
          ...(state.messages[message.conversationId] || []),
          message
        ]
      },
      conversations: state.conversations.map(conv => 
        conv.id === message.conversationId
          ? { 
              ...conv, 
              lastMessage: message.content, 
              timestamp: message.timestamp,
              unreadCount: state.selectedConversationId === message.conversationId ? 0 : conv.unreadCount + 1
            }
          : conv
      )
    }));
  },

  createConversation: (contactName: string) => {
    const newConversation: Conversation = {
      id: `conv${Date.now()}`,
      contactName,
      avatar: '👤',
      lastMessage: 'Nouvelle conversation',
      timestamp: new Date(),
      unreadCount: 0
    };

    set(state => ({
      conversations: [newConversation, ...state.conversations]
    }));
  },

  markAsRead: (conversationId: string) => {
    set(state => ({
      conversations: state.conversations.map(conv => 
        conv.id === conversationId
          ? { ...conv, unreadCount: 0 }
          : conv
      )
    }));
  }
}));
