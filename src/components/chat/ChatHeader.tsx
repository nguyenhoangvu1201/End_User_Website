import React from "react";

interface ChatHeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  onMinimize?: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = React.memo(({ isDarkMode, toggleTheme, onMinimize }) => {
  return (
    <div
      className={`sticky top-0 z-20 ${isDarkMode ? 'bg-gradient-to-r from-gray-800 via-blue-800 to-purple-800' : 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600'} text-white px-8 py-6 shadow-2xl transition-all duration-500`}
      aria-label="Tiêu đề khung chat"
      role="banner"
    >
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
        <div className="flex items-center space-x-3">
          <button
            onClick={toggleTheme}
            className="p-3 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-300 hover:scale-110"
            title={isDarkMode ? 'Chế độ sáng' : 'Chế độ tối'}
            aria-label="Chuyển đổi giao diện sáng/tối"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
          {onMinimize && (
            <button
              onClick={onMinimize}
              className="p-3 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-300 hover:scale-110"
              title="Thu nhỏ khung chat"
              aria-label="Thu nhỏ khung chat"
            >
              —
            </button>
          )}
        </div>
      </div>
    </div>
  );
});
ChatHeader.displayName = "ChatHeader";

export default ChatHeader; 