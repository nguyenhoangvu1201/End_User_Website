import React from "react";
import type { Message } from "@/hooks/useChatMessages";

interface MessageBubbleProps {
  message: Message;
  isDarkMode: boolean;
  messageTheme: string;
  formatTime: (date: Date) => string;
}

const MessageBubble: React.FC<MessageBubbleProps> = React.memo(
  ({ message, isDarkMode, messageTheme, formatTime }) => {
    return (
      <div
        className={`flex ${message.isUser ? "justify-end" : "justify-start"} mb-2`}
        aria-label={message.isUser ? "Tin nhắn của bạn" : "Tin nhắn từ trợ lý"}
        role="listitem"
      >
        <div
          className={`max-w-[70%] px-4 py-2 rounded-2xl border shadow-sm ${messageTheme} ${message.isUser ? "rounded-br-none" : "rounded-bl-none"}`}
        >
          <span className="whitespace-pre-line text-base">{message.text}</span>
          <div className="text-xs text-right mt-1 opacity-60">
            {formatTime(message.timestamp)}
          </div>
        </div>
      </div>
    );
  }
);
MessageBubble.displayName = "MessageBubble";

export default MessageBubble; 