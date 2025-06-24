"use client";

import React, { useState, useRef, useCallback } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useTheme } from "@/context/ThemeContext";
import { useChatMessages } from "@/hooks/useChatMessages";
import MessageBubble from "@/components/chat/MessageBubble";
import TypingIndicator from "@/components/chat/TypingIndicator";
import ChatHeader from "@/components/chat/ChatHeader";
import ChatInputArea from "@/components/chat/ChatInputArea";
import ChatSidebar, { ChatHistory } from "@/components/chat/ChatSidebar";

const ChatInterface = () => {
  // Chat logic
  const {
    messages,
    isTyping,
    sendMessage,
    playSound,
  } = useChatMessages([
    {
      id: 1,
      text: "Xin chào! Trường FPT đang có những ngành học nào?",
      isUser: true,
      timestamp: new Date(),
    },
    {
      id: 2,
      text: "🎓 Hiện tại, Trường Đại học FPT đang giảng dạy 7 chuyên ngành...",
      isUser: false,
      timestamp: new Date(),
    }
  ]);

  // UI state
  const [inputText, setInputText] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [showAttachMenu, setShowAttachMenu] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const audioInputRef = useRef<HTMLInputElement>(null);
  const [isMinimized, setIsMinimized] = useState(false);

  const [chatHistories] = useState<ChatHistory[]>([
    {
      id: '1',
      title: 'Ngành học tại FPT',
      lastMessage: 'Trường FPT đang có những ngành học nào?',
      timestamp: new Date(),
      category: 'today'
    },
    {
      id: '2', 
      title: 'Điểm số xét tuyển',
      lastMessage: 'Tôi đã được 18đ thì có đỗ được không?',  
      timestamp: new Date(Date.now() - 86400000),
      category: 'yesterday'
    },
  ]);

  const { theme, toggleTheme } = useTheme();

  const handleQuestionClick = (question: string) => {
    setInputText(question);
  };

  const handleFileUpload = (type: 'document' | 'audio' | 'image') => {
    if (type === 'document' && fileInputRef.current) {
      fileInputRef.current.click();
    } else if (type === 'audio' && audioInputRef.current) {
      audioInputRef.current.click();
    }
    setShowAttachMenu(false);
  };

  const handleVoiceRecord = () => {
    setIsRecording(!isRecording);
    playSound('notification');
    
    if (!isRecording) {
      setTimeout(() => setIsRecording(false), 3000);
    }
  };

  const deleteChatHistory = (chatId: string) => {
    setShowDeleteConfirm(null);
    playSound('notification');
  };

  const formatTime = useCallback((date: Date) => {
    return date.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
  }, []);

  const isDarkMode = theme === "dark";
  const themeClasses = isDarkMode 
    ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white'
    : 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100';

  const messageTheme = isDarkMode
    ? 'bg-gray-800/80 text-white border-gray-600'
    : 'bg-white/80 text-gray-800 border-gray-200';

  return (
    <div className={`flex h-screen transition-all duration-500 ${themeClasses}`}>
      <ChatSidebar
        chatHistories={chatHistories}
        onDelete={deleteChatHistory}
        showDeleteConfirm={showDeleteConfirm}
        setShowDeleteConfirm={setShowDeleteConfirm}
        onSelectHistory={(historyId) => {
          const history = chatHistories.find(h => h.id === historyId);
          if (history) handleQuestionClick(history.lastMessage);
        }}
      />
      <div className="flex-1 flex flex-col relative backdrop-blur-sm">
        <ChatHeader
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
          onMinimize={() => setIsMinimized(!isMinimized)}
        />
        <ScrollArea className="flex-1 px-8 py-4 overflow-y-auto" aria-label="Danh sách tin nhắn" role="list">
          {messages.map((msg) => (
            <MessageBubble
              key={msg.id}
              message={msg}
              isDarkMode={isDarkMode}
              messageTheme={messageTheme}
              formatTime={formatTime}
            />
          ))}
          <TypingIndicator isVisible={isTyping} />
        </ScrollArea>
        <ChatInputArea
          inputText={inputText}
          setInputText={setInputText}
          onSend={() => {
            sendMessage(inputText);
            setInputText("");
          }}
          onAttach={handleFileUpload}
          onVoiceRecord={handleVoiceRecord}
          isRecording={isRecording}
          showAttachMenu={showAttachMenu}
          setShowAttachMenu={setShowAttachMenu}
          fileInputRef={fileInputRef}
          audioInputRef={audioInputRef}
        />
      </div>
    </div>
  );
};

export default ChatInterface;