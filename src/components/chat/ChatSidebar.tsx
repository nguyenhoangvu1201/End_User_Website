import React from "react";

export interface ChatHistory {
  id: string;
  title: string;
  lastMessage: string;
  timestamp: Date;
  category: string;
}

interface ChatSidebarProps {
  chatHistories: ChatHistory[];
  onDelete: (id: string) => void;
  showDeleteConfirm: string | null;
  setShowDeleteConfirm: (id: string | null) => void;
  onSelectHistory?: (id: string) => void;
}

const ChatSidebar: React.FC<ChatSidebarProps> = React.memo(({
  chatHistories,
  onDelete,
  showDeleteConfirm,
  setShowDeleteConfirm,
  onSelectHistory,
}) => {
  return (
    <aside className="w-72 bg-white/90 border-r h-full flex flex-col" aria-label="Lịch sử chat" role="complementary">
      <div className="p-4 font-bold text-lg border-b">Lịch sử chat</div>
      <ul className="flex-1 overflow-y-auto" role="list">
        {chatHistories.map((history) => (
          <li key={history.id} className="px-4 py-2 border-b hover:bg-gray-100 flex items-center justify-between group" role="listitem">
            <button
              className="flex-1 text-left truncate"
              onClick={() => onSelectHistory && onSelectHistory(history.id)}
              aria-label={`Chọn lịch sử chat: ${history.title}`}
            >
              <div className="font-medium truncate">{history.title}</div>
              <div className="text-xs text-gray-500 truncate">{history.lastMessage}</div>
            </button>
            <button
              className="ml-2 text-red-500 opacity-0 group-hover:opacity-100 transition"
              onClick={() => setShowDeleteConfirm(history.id)}
              aria-label="Xóa lịch sử chat"
            >🗑️</button>
            {showDeleteConfirm === history.id && (
              <div className="absolute bg-white border rounded shadow p-2 z-20 right-10">
                <div>Bạn chắc chắn muốn xóa?</div>
                <button className="text-xs text-red-600 mr-2" onClick={() => onDelete(history.id)}>Xóa</button>
                <button className="text-xs" onClick={() => setShowDeleteConfirm(null)}>Hủy</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
});
ChatSidebar.displayName = "ChatSidebar";

export default ChatSidebar; 