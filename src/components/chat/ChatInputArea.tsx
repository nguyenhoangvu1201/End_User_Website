import React, { ChangeEvent, KeyboardEvent, RefObject } from "react";

interface ChatInputAreaProps {
  inputText: string;
  setInputText: (text: string) => void;
  onSend: () => void;
  onAttach: (type: 'document' | 'audio' | 'image') => void;
  onVoiceRecord: () => void;
  isRecording: boolean;
  showAttachMenu: boolean;
  setShowAttachMenu: (show: boolean) => void;
  fileInputRef: RefObject<HTMLInputElement | null>;
  audioInputRef: RefObject<HTMLInputElement | null>;
}

const ChatInputArea: React.FC<ChatInputAreaProps> = React.memo(({
  inputText,
  setInputText,
  onSend,
  onAttach,
  onVoiceRecord,
  isRecording,
  showAttachMenu,
  setShowAttachMenu,
  fileInputRef,
  audioInputRef,
}) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };
  return (
    <div className="flex items-center gap-2 p-4 border-t bg-white/80" aria-label="Vùng nhập tin nhắn" role="region">
      <button
        onClick={() => setShowAttachMenu(!showAttachMenu)}
        className="p-2 rounded hover:bg-gray-200"
        aria-label="Đính kèm"
      >📎</button>
      {showAttachMenu && (
        <div className="absolute bottom-16 left-4 bg-white border rounded shadow p-2 z-10" role="menu">
          <button onClick={() => onAttach('document')} className="block w-full text-left px-2 py-1 hover:bg-gray-100" role="menuitem">Tài liệu</button>
          <button onClick={() => onAttach('image')} className="block w-full text-left px-2 py-1 hover:bg-gray-100" role="menuitem">Ảnh</button>
          <button onClick={() => onAttach('audio')} className="block w-full text-left px-2 py-1 hover:bg-gray-100" role="menuitem">Âm thanh</button>
        </div>
      )}
      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        aria-label="Tải lên tài liệu"
        tabIndex={-1}
      />
      <input
        ref={audioInputRef}
        type="file"
        accept="audio/*"
        className="hidden"
        aria-label="Tải lên âm thanh"
        tabIndex={-1}
      />
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className="flex-1 px-4 py-2 rounded border focus:outline-none focus:ring"
        placeholder="Nhập tin nhắn..."
        aria-label="Nhập tin nhắn"
      />
      <button
        onClick={onVoiceRecord}
        className={`p-2 rounded ${isRecording ? 'bg-red-200' : 'hover:bg-gray-200'}`}
        aria-label={isRecording ? "Đang ghi âm" : "Ghi âm"}
      >🎤</button>
      <button
        onClick={onSend}
        className="p-2 rounded bg-blue-500 text-white hover:bg-blue-600"
        aria-label="Gửi tin nhắn"
      >➤</button>
    </div>
  );
});
ChatInputArea.displayName = "ChatInputArea";

export default ChatInputArea; 