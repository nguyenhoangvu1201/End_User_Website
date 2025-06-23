import ChatInterface from "@/componentUI/ChatInterface";

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 overflow-x-hidden">
      <header className="w-full bg-gradient-to-r from-orange-200 via-white to-blue-100 backdrop-blur-lg shadow-[0_10px_20px_rgba(255,140,0,0.25)] rounded-b-3xl transition-transform duration-300 hover:scale-[1.02]">
        <div className="mx-auto max-w-3xl px-6 py-8 flex flex-col items-center text-center">
          <h1
            className="text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-yellow-500 mb-3 font-mono"
            style={{ fontFamily: "'Consolas', 'Fira Mono', 'Menlo', 'monospace'" }}
          >
            AI Chatbot FPT
          </h1>
          <p className="text-xl text-gray-900 font-semibold mb-2 animate-fadeIn">
            Tư vấn học tập & Định hướng nghề nghiệp THPT
          </p>
          <span className="text-base text-blue-700 font-medium animate-fadeIn delay-200">
            Trợ lý AI hỗ trợ tư vấn về các ngành học tại Trường Đại học FPT
          </span>
        </div>
      </header>
      <main className="flex-1 flex flex-col">
        <ChatInterface />
      </main>
    </div>
  );
};

export default Dashboard;
