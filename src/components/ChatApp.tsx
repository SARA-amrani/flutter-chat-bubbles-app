
import React, { useState } from 'react';
import { ConversationList } from './ConversationList';
import { ConversationDetail } from './ConversationDetail';
import { useChatStore } from '@/store/chatStore';

export const ChatApp: React.FC = () => {
  const [showDetail, setShowDetail] = useState(false);
  const { selectConversation } = useChatStore();

  const handleSelectConversation = (conversationId: string) => {
    selectConversation(conversationId);
    setShowDetail(true);
  };

  const handleBack = () => {
    setShowDetail(false);
  };

  return (
    <div className="h-screen flex bg-gray-100">
      {/* Mobile: Show either list or detail */}
      <div className="md:hidden w-full">
        {showDetail ? (
          <ConversationDetail onBack={handleBack} />
        ) : (
          <ConversationList onSelectConversation={handleSelectConversation} />
        )}
      </div>

      {/* Desktop: Show both side by side */}
      <div className="hidden md:flex w-full">
        <div className="w-1/3 min-w-80">
          <ConversationList onSelectConversation={handleSelectConversation} />
        </div>
        <div className="flex-1">
          <ConversationDetail onBack={handleBack} />
        </div>
      </div>
    </div>
  );
};
