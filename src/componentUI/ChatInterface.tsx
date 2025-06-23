"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
  hasAttachment?: boolean;
  attachmentType?: 'document' | 'audio' | 'image';
}

interface ChatHistory {
  id: string;
  title: string;
  lastMessage: string;
  timestamp: Date;
  category: 'today' | 'yesterday' | 'older';
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Xin chào! Trường FPT đang có những ngành học nào?",
      isUser: true,
      timestamp: new Date(),
    },
    {
      id: 2,
      text: "🎓 Hiện tại, Trường Đại học FPT đang giảng dạy 7 chuyên ngành trong khối ngành Công nghệ thông tin và 9 chuyên ngành trong khối ngành Quản trị kinh doanh. Dưới đây là thông tin cụ thể:\n\n1. Công nghệ thông tin - 7 chuyên ngành\n• Kỹ thuật phần mềm\n• Hệ thống thông tin\n• An toàn thông tin\n• Trí tuệ nhân tạo (AI)\n• Công nghệ ô tô số\n• Thiết kế mỹ thuật số\n• Thiết kế vi mạch bán dẫn\n\n2. Quản trị kinh doanh - 9 chuyên ngành\n• Digital Marketing\n• Kinh doanh quốc tế\n• Quản trị khách sạn\n• Quản trị dịch vụ du lịch & lữ hành\n• Quản hệ cộng chúng (cũng thuộc truyền thông)\n• Logistics & quản lý chuỗi cung ứng toàn cầu\n• Tài chính doanh nghiệp\n• Ngân hàng số - Tài chính\n• Tài chính đầu tư\n\nNếu bạn cần mình cung cấp thêm các chuyên ngành thuộc các khối ngành khác tại trường Đại học FPT - ví dụ như Công nghệ truyền thông, Ngôn ngữ, Luật - cứ nói mình nhé, mình sẽ cung cấp toàn bộ!",
      isUser: false,
      timestamp: new Date(),
    }
  ]);
  
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [showAttachMenu, setShowAttachMenu] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
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
    {
      id: '3',
      title: 'Học phí và học bổng',
      lastMessage: 'Học phí của trường FPT là bao nhiêu?',
      timestamp: new Date(Date.now() - 86400000), 
      category: 'yesterday'
    }
  ]);

  const predefinedQuestions = [
    "Trường FPT đang có những ngành học nào?",
    "Hôm nay bạn thế nào?", 
    "Tôi đã được 18đ thì có đỗ được không?",
    "Học phí của trường FPT là bao nhiêu?",
    "Điều kiện xét tuyển như thế nào?",
    "Có học bổng nào không?"
  ];

  // Sound effects
  const playSound = (type: 'send' | 'receive' | 'notification') => {
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
    audio.play().catch(() => {}); // Ignore errors if audio can't play
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    playSound('send');
    const newMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, newMessage]);
    setInputText("");
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
    
    // Simulate recording
    if (!isRecording) {
      setTimeout(() => {
        setIsRecording(false);
        playSound('notification');
      }, 3000);
    }
  };

  const deleteChatHistory = (chatId: string) => {
    setShowDeleteConfirm(null);
    playSound('notification');
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
  };

  const themeClasses = isDarkMode 
    ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white'
    : 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100';

  const messageTheme = isDarkMode
    ? 'bg-gray-800/80 text-white border-gray-600'
    : 'bg-white/80 text-gray-800 border-gray-200';

  return (
    <div className={`flex h-screen transition-all duration-500 ${themeClasses}`}>
      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col relative backdrop-blur-sm">
        {/* Header with gradient - sticky */}
        <div className={`sticky top-0 z-20 ${isDarkMode ? 'bg-gradient-to-r from-gray-800 via-blue-800 to-purple-800' : 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600'} text-white px-8 py-6 shadow-2xl transition-all duration-500`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-pulse">
                <span className="text-2xl">🤖</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold mb-1 animate-fadeIn">AI Assistant FPT</h1>
                <p className="text-blue-100 text-sm animate-slideIn">Trợ lý thông minh cho sinh viên • Luôn sẵn sàng hỗ trợ</p>
              </div>
            </div>
            
            {/* Theme toggle and minimize buttons */}
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-3 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-300 hover:scale-110"
                title={isDarkMode ? 'Chế độ sáng' : 'Chế độ tối'}
              >
                {isDarkMode ? '☀️' : '🌙'}
              </button>
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-3 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-300 hover:scale-110"
                title={isMinimized ? 'Mở rộng' : 'Thu gọn'}
              >
                {isMinimized ? '⬆️' : '⬇️'}
              </button>
            </div>
          </div>
          
          {!isMinimized && (
            <div className="mt-4 flex space-x-2 animate-slideIn">
              {predefinedQuestions.slice(0, 3).map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleQuestionClick(question)}
                  className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full text-xs transition-all duration-300 backdrop-blur-sm border border-white/30 hover:scale-105 animate-bounce"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {question}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Messages Area */}
        <ScrollArea className={`flex-1 px-6 py-6 transition-all duration-500 ${isMinimized ? 'h-20' : ''}`}>
          <div className="max-w-5xl mx-auto space-y-6">
            {messages.map((message, index) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-4 duration-500 hover:scale-[1.02] transition-transform`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`flex items-start space-x-3 max-w-[80%] ${message.isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  {/* Avatar */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg animate-pulse ${
                    message.isUser 
                      ? 'bg-gradient-to-r from-orange-400 to-pink-500' 
                      : 'bg-gradient-to-r from-blue-500 to-purple-600'
                  }`}>
                    <span className="text-white text-sm font-semibold">
                      {message.isUser ? '👤' : '🤖'}
                    </span>
                  </div>

                  {/* Message Bubble */}
                  <div className={`relative group ${message.isUser ? 'ml-4' : 'mr-4'}`}>
                    <div
                      className={`p-4 rounded-3xl shadow-lg backdrop-blur-sm border transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                        message.isUser
                          ? 'bg-gradient-to-r from-orange-400 to-pink-500 text-white border-orange-200'
                          : messageTheme + ' hover:bg-white/90'
                      }`}
                    >
                      <p className="whitespace-pre-wrap leading-relaxed">{message.text}</p>
                      {message.hasAttachment && (
                        <div className="mt-2 flex items-center space-x-2">
                          <span className="text-xs opacity-70">📎 Đính kèm</span>
                        </div>
                      )}
                      <div className={`text-xs mt-2 opacity-70 ${message.isUser ? 'text-orange-100' : isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {formatTime(message.timestamp)}
                      </div>
                    </div>

                    {/* Action buttons for AI messages */}
                    {!message.isUser && (
                      <div className="flex items-center space-x-2 mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <button
                          className="p-2 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-full transition-all duration-200 hover:scale-110"
                          title="Copy"
                          onClick={() => {
                            navigator.clipboard.writeText(message.text);
                            playSound('notification');
                          }}
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        </button>
                        <button
                          className="p-2 text-gray-400 hover:text-green-500 hover:bg-green-50 rounded-full transition-all duration-200 hover:scale-110"
                          title="Like"
                          onClick={() => playSound('notification')}
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                          </svg>
                        </button>
                        <button
                          className="p-2 text-gray-400 hover:text-purple-500 hover:bg-purple-50 rounded-full transition-all duration-200 hover:scale-110"
                          title="Reply"
                          onClick={() => setInputText(`Về câu trả lời trước: `)}
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start animate-in slide-in-from-bottom-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-lg animate-pulse">
                    <span className="text-white text-sm">🤖</span>
                  </div>
                  <div className={`${messageTheme} backdrop-blur-sm p-4 rounded-3xl shadow-lg border`}>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-bounce"></div>
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Enhanced Input Area - sticky bottom */}
        <div className={`sticky bottom-0 z-20 p-6 ${isDarkMode ? 'bg-gray-800/80' : 'bg-white/80'} backdrop-blur-sm border-t ${isDarkMode ? 'border-gray-600' : 'border-gray-200'} transition-all duration-500`}>
          <div className="max-w-5xl mx-auto">
            <div className="flex space-x-4 items-end">
              {/* Plus button for attachments */}
              <button
                onClick={() => setShowAttachMenu(!showAttachMenu)}
                className={`h-14 w-14 rounded-2xl transition-all duration-300 hover:scale-110 ${
                  showAttachMenu 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
                    : isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                } shadow-lg flex items-center justify-center`}
                title="Đính kèm"
              >
                <span className="text-xl">+</span>
              </button>
              {/* Attach and record icons to the right of "+" button */}
              <button
                onClick={() => setShowAttachMenu(!showAttachMenu)}
                className={`h-14 w-14 rounded-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center ${
                  showAttachMenu 
                    ? 'bg-blue-500 text-white' 
                    : isDarkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                }`}
                title="Đính kèm tài liệu"
              >
                📎
              </button>
              <button
                onClick={handleVoiceRecord}
                className={`h-14 w-14 rounded-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center ${
                  isRecording 
                    ? 'bg-red-500 text-white animate-pulse' 
                    : isDarkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                }`}
                title={isRecording ? 'Đang ghi âm...' : 'Ghi âm'}
              >
                {isRecording ? '🔴' : '🎤'}
              </button>
              <div className="flex-1 relative">
                <Input
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Nhập câu hỏi của bạn..."
                  className={`h-14 pl-6 pr-16 text-lg border-2 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 rounded-2xl backdrop-blur-sm shadow-lg transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-gray-700/80 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white/80 border-gray-200 text-gray-800'
                  }`}
                />
                <div className={`absolute right-4 top-1/2 transform -translate-y-1/2 ${isDarkMode ? 'text-gray-400' : 'text-gray-400'}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
              </div>
              <Button
                onClick={handleSendMessage}
                disabled={!inputText.trim() || isTyping}
                className="h-14 w-14 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center hover:scale-110"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </Button>
            </div>
            {/* Attachment menu */}
            {showAttachMenu && (
              <div className="mb-4 p-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 animate-in slide-in-from-bottom-2">
                <div className="flex space-x-4 justify-center">
                  <button
                    onClick={() => handleFileUpload('document')}
                    className="flex flex-col items-center p-3 hover:bg-blue-50 rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                      📄
                    </div>
                    <span className="text-sm text-gray-600">Tài liệu</span>
                  </button>
                  <button
                    onClick={() => handleFileUpload('audio')}
                    className="flex flex-col items-center p-3 hover:bg-green-50 rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                      🎵
                    </div>
                    <span className="text-sm text-gray-600">Âm thanh</span>
                  </button>
                  <button
                    onClick={() => handleFileUpload('image')}
                    className="flex flex-col items-center p-3 hover:bg-purple-50 rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                      🖼️
                    </div>
                    <span className="text-sm text-gray-600">Hình ảnh</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Enhanced Sidebar */}
      <div className={`w-80 ${isDarkMode ? 'bg-gray-800/90' : 'bg-white/90'} backdrop-blur-sm border-l ${isDarkMode ? 'border-gray-600' : 'border-gray-200'} flex flex-col shadow-2xl h-full transition-all duration-500 relative`}>
        {/* Sidebar Header - sticky */}
        <div className={`sticky top-0 z-10 p-6 ${isDarkMode ? 'bg-gradient-to-r from-gray-700 to-gray-800' : 'bg-gradient-to-r from-gray-50 to-blue-50'} border-b ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
          <h3 className={`font-bold text-lg mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>💬 Lịch sử trò chuyện</h3>
          <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Các cuộc hội thoại gần đây</p>
        </div>
        
        {/* Chat History */}
        <div className="flex-1 p-4 overflow-y-auto pb-20 flex flex-col justify-between">
          {/* Bọc phần Today & Yesterday vào một div riêng */}
          <div className="flex-1 overflow-auto space-y-4">
            {/* Today */}
            <div>
              <div className={`text-sm font-semibold mb-3 flex items-center ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-ping"></span>
                Hôm nay
              </div>
              <div className="space-y-2">
                {chatHistories.filter(chat => chat.category === 'today').map((chat) => (
                  <div
                    key={chat.id}
                    className={`group p-3 text-sm rounded-xl cursor-pointer transition-all duration-300 border border-transparent hover:shadow-md hover:scale-105 ${
                      isDarkMode 
                        ? 'text-gray-300 hover:bg-gray-700/50 hover:border-gray-600' 
                        : 'text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:border-blue-200'
                    }`}
                    onClick={() => handleQuestionClick(chat.lastMessage)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        <div className={`font-medium mb-1 truncate ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                          {chat.title}
                        </div>
                        <div className={`text-xs truncate ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          {chat.lastMessage}
                        </div>
                        <div className={`text-xs mt-1 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                          {formatTime(chat.timestamp)}
                        </div>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowDeleteConfirm(chat.id);
                        }}
                        className={`opacity-0 group-hover:opacity-100 p-1 rounded-full transition-all duration-300 hover:scale-110 ${
                          isDarkMode ? 'text-gray-400 hover:text-red-400 hover:bg-red-900/20' : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
                        }`}
                        title="Xóa cuộc trò chuyện"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Yesterday */}
            <div>
              <div className={`text-sm font-semibold mb-3 flex items-center ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                Hôm qua
              </div>
              <div className="space-y-2">
                {chatHistories.filter(chat => chat.category === 'yesterday').map((chat) => (
                  <div
                    key={chat.id}
                    className={`group p-3 text-sm rounded-xl cursor-pointer transition-all duration-300 border border-transparent hover:shadow-md hover:scale-105 ${
                      isDarkMode 
                        ? 'text-gray-300 hover:bg-gray-700/50 hover:border-gray-600' 
                        : 'text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:border-blue-200'
                    }`}
                    onClick={() => handleQuestionClick(chat.lastMessage)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        <div className={`font-medium mb-1 truncate ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                          {chat.title}
                        </div>
                        <div className={`text-xs truncate ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          {chat.lastMessage}
                        </div>
                        <div className={`text-xs mt-1 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                          {formatTime(chat.timestamp)}
                        </div>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowDeleteConfirm(chat.id);
                        }}
                        className={`opacity-0 group-hover:opacity-100 p-1 rounded-full transition-all duration-300 hover:scale-110 ${
                          isDarkMode ? 'text-gray-400 hover:text-red-400 hover:bg-red-900/20' : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
                        }`}
                        title="Xóa cuộc trò chuyện"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Sidebar Footer - full width, flush with sidebar edges */}
        <div className={`sticky bottom-0 left-0 right-0 z-10 p-0 border-t ${isDarkMode ? 'border-gray-600 bg-gradient-to-r from-gray-700 to-gray-800' : 'border-gray-200 bg-gradient-to-r from-gray-50 to-blue-50'}`}>
          <button 
            onClick={() => setShowDeleteConfirm('all')}
            className={`w-full text-sm p-4 rounded-none transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 ${
              isDarkMode ? 'text-red-400 hover:text-red-300 hover:bg-red-900/20' : 'text-red-500 hover:text-red-600 hover:bg-red-50'
            }`}
            style={{ borderRadius: 0 }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            <span>Xóa toàn bộ lịch sử</span>
          </button>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm animate-in fade-in duration-300">
          <div className={`${isDarkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-200'} p-6 rounded-2xl shadow-xl border max-w-md mx-4 animate-in zoom-in-95 duration-300`}>
            <div className="text-center">
              <div className="text-4xl mb-4">🗑️</div>
              <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                Xác nhận xóa
              </h3>
              <p className={`text-sm mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {showDeleteConfirm === 'all' 
                  ? 'Bạn có chắc chắn muốn xóa toàn bộ lịch sử trò chuyện không?' 
                  : 'Bạn có chắc chắn muốn xóa cuộc trò chuyện này không?'
                }
              </p>
              <div className="flex space-x-3">
                <button
                  onClick={() => setShowDeleteConfirm(null)}
                  className={`flex-1 px-4 py-2 rounded-xl transition-all duration-300 ${
                    isDarkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Hủy
                </button>
                <button
                  onClick={() => deleteChatHistory(showDeleteConfirm)}
                  className="flex-1 px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-all duration-300 hover:scale-105"
                >
                  Xóa
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hidden file inputs */}
      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf,.doc,.docx,.txt"
        style={{ display: 'none' }}
        onChange={(e) => {
          if (e.target.files?.[0]) {
            playSound('notification');
            // Handle file upload
          }
        }}
      />
      <input
        ref={audioInputRef}
        type="file"
        accept="audio/*"
        style={{ display: 'none' }}
        onChange={(e) => {
          if (e.target.files?.[0]) {
            playSound('notification');
            // Handle audio upload
          }
        }}
      />
    </div>
  );
};

export default ChatInterface;