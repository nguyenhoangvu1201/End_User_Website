import { useState, useCallback } from "react";

export type Message = {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
  hasAttachment?: boolean;
};

export function useChatMessages(initialMessages: Message[] = []) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [isTyping, setIsTyping] = useState(false);

  // Sound effects
  const playSound = useCallback((type: 'send' | 'receive' | 'notification') => {
    const audio = new Audio();
    switch(type) {
      case 'send':
        audio.src = 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbp2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmrcBjuJ1/LCciUFLYHO8tiJNwgZaLvt559NEAxQqOPwtmMcBjiS2O';
        break;
      case 'receive':
        audio.src = 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbp2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmrcBjuJ1/LCciUFLYHO8tiJNwgZaLvt559NEAxQqOPwtmMcBjiS2O';
        break;
      case 'notification':  
        audio.src = 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbp2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmrcBjuJ1/LCciUFLYHO8tiJNwgZaLvt559NEAxQqOPwtmMcBjiS2O';
        break;
    }
    audio.volume = 0.3;
    audio.play().catch(() => {});
  }, []);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    playSound('send');
    const newMessage: Message = {
      id: messages.length + 1,
      text,
      isUser: true,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, newMessage]);
    setIsTyping(true);
    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        text: "Cảm ơn bạn đã hỏi! Tôi sẽ tư vấn cho bạn về các chương trình học tại Trường Đại học FPT. Bạn có thể hỏi về ngành học, tuyển sinh, học bổng hoặc bất kỳ thông tin nào khác.",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
      playSound('receive');
    }, 1500);
  };

  return {
    messages,
    isTyping,
    sendMessage,
    playSound,
    setMessages,
    setIsTyping,
  };
} 