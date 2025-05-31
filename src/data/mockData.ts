
import { Conversation, Message } from '@/types/chat';

export const mockConversations: Conversation[] = [
  {
    id: '1',
    contactName: 'Alice Martin',
    avatar: '👩‍💼',
    lastMessage: 'Salut ! Comment ça va ?',
    timestamp: new Date(2024, 4, 31, 14, 30),
    unreadCount: 2
  },
  {
    id: '2',
    contactName: 'Bob Dupont',
    avatar: '👨‍💻',
    lastMessage: 'On se voit demain ?',
    timestamp: new Date(2024, 4, 31, 12, 15),
    unreadCount: 0
  },
  {
    id: '3',
    contactName: 'Claire Leroy',
    avatar: '👩‍🎨',
    lastMessage: 'J\'ai terminé le projet !',
    timestamp: new Date(2024, 4, 31, 10, 45),
    unreadCount: 1
  },
  {
    id: '4',
    contactName: 'David Chen',
    avatar: '👨‍🔬',
    lastMessage: 'Merci pour ton aide',
    timestamp: new Date(2024, 4, 30, 16, 20),
    unreadCount: 0
  },
  {
    id: '5',
    contactName: 'Emma Wilson',
    avatar: '👩‍🏫',
    lastMessage: 'À bientôt !',
    timestamp: new Date(2024, 4, 30, 14, 10),
    unreadCount: 3
  }
];

export const mockMessages: { [conversationId: string]: Message[] } = {
  '1': [
    {
      id: 'm1',
      conversationId: '1',
      content: 'Salut Alice ! Ça va très bien, merci.',
      isMe: true,
      timestamp: new Date(2024, 4, 31, 14, 25)
    },
    {
      id: 'm2',
      conversationId: '1',
      content: 'Salut ! Comment ça va ?',
      isMe: false,
      timestamp: new Date(2024, 4, 31, 14, 30)
    },
    {
      id: 'm3',
      conversationId: '1',
      content: 'Tu es libre ce weekend ?',
      isMe: false,
      timestamp: new Date(2024, 4, 31, 14, 31)
    }
  ],
  '2': [
    {
      id: 'm4',
      conversationId: '2',
      content: 'Salut Bob !',
      isMe: true,
      timestamp: new Date(2024, 4, 31, 12, 10)
    },
    {
      id: 'm5',
      conversationId: '2',
      content: 'On se voit demain ?',
      isMe: false,
      timestamp: new Date(2024, 4, 31, 12, 15)
    }
  ],
  '3': [
    {
      id: 'm6',
      conversationId: '3',
      content: 'Félicitations Claire !',
      isMe: true,
      timestamp: new Date(2024, 4, 31, 10, 40)
    },
    {
      id: 'm7',
      conversationId: '3',
      content: 'J\'ai terminé le projet !',
      isMe: false,
      timestamp: new Date(2024, 4, 31, 10, 45)
    }
  ],
  '4': [
    {
      id: 'm8',
      conversationId: '4',
      content: 'De rien, toujours là pour aider !',
      isMe: true,
      timestamp: new Date(2024, 4, 30, 16, 15)
    },
    {
      id: 'm9',
      conversationId: '4',
      content: 'Merci pour ton aide',
      isMe: false,
      timestamp: new Date(2024, 4, 30, 16, 20)
    }
  ],
  '5': [
    {
      id: 'm10',
      conversationId: '5',
      content: 'Salut Emma !',
      isMe: true,
      timestamp: new Date(2024, 4, 30, 14, 5)
    },
    {
      id: 'm11',
      conversationId: '5',
      content: 'À bientôt !',
      isMe: false,
      timestamp: new Date(2024, 4, 30, 14, 10)
    },
    {
      id: 'm12',
      conversationId: '5',
      content: 'On se rappelle la semaine prochaine ?',
      isMe: false,
      timestamp: new Date(2024, 4, 30, 14, 11)
    },
    {
      id: 'm13',
      conversationId: '5',
      content: 'J\'ai hâte de voir le résultat !',
      isMe: false,
      timestamp: new Date(2024, 4, 30, 14, 12)
    }
  ]
};
