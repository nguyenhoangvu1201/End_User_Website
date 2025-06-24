import React from "react";

interface TypingIndicatorProps {
  isVisible: boolean;
}

const TypingIndicator: React.FC<TypingIndicatorProps> = React.memo(({ isVisible }) => {
  if (!isVisible) return null;
  return (
    <div
      className="flex items-center space-x-2 my-2 animate-pulse text-blue-500"
      aria-live="polite"
      role="status"
    >
      <span>🤖</span>
      <span>Trợ lý đang trả lời...</span>
    </div>
  );
});
TypingIndicator.displayName = "TypingIndicator";

export default TypingIndicator; 