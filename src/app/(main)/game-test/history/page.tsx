"use client";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";

const questions = [
  {
    id: 1,
    question: 'Bạn thích làm việc trong môi trường nào nhất?',
    options: [
      'Làm việc độc lập, tự do sáng tạo',
      'Làm việc nhóm, hợp tác với nhiều người',
      'Làm việc có cấu trúc rõ ràng, quy trình chặt chẽ',
      'Làm việc linh hoạt, thay đổi thường xuyên'
    ]
  },
  {
    id: 2,
    question: 'Bạn thích hoạt động nào nhất trong thời gian rảnh?',
    options: [
      'Đọc sách, nghiên cứu',
      'Tham gia các hoạt động xã hội',
      'Chơi game, giải trí',
      'Vẽ, thiết kế, sáng tạo nghệ thuật'
    ]
  },
  {
    id: 3,
    question: 'Bạn tự đánh giá khả năng giao tiếp của mình như thế nào?',
    options: [
      'Tốt, tự tin giao tiếp',
      'Bình thường',
      'Chỉ giao tiếp khi cần thiết',
      'Thích làm việc một mình hơn'
    ]
  },
  {
    id: 4,
    question: 'Bạn thích môn học nào nhất ở trường?',
    options: [
      'Toán, Tin học',
      'Văn, Ngoại ngữ',
      'Khoa học xã hội',
      'Mỹ thuật, Âm nhạc'
    ]
  },
  {
    id: 5,
    question: 'Bạn mong muốn công việc tương lai như thế nào?',
    options: [
      'Ổn định, lâu dài',
      'Năng động, nhiều thử thách',
      'Có cơ hội sáng tạo',
      'Được làm việc với nhiều người'
    ]
  },
  {
    id: 6,
    question: 'Bạn thích sử dụng công nghệ vào việc gì nhất?',
    options: [
      'Lập trình, phát triển phần mềm',
      'Kinh doanh online',
      'Học tập, nghiên cứu',
      'Thiết kế, chỉnh sửa hình ảnh/video'
    ]
  },
  {
    id: 7,
    question: 'Bạn thường giải quyết vấn đề như thế nào?',
    options: [
      'Phân tích kỹ lưỡng trước khi quyết định',
      'Tham khảo ý kiến người khác',
      'Làm theo cảm tính',
      'Tìm kiếm giải pháp sáng tạo'
    ]
  },
  {
    id: 8,
    question: 'Bạn thích tham gia hoạt động nào nhất?',
    options: [
      'Câu lạc bộ học thuật',
      'Tình nguyện, hoạt động xã hội',
      'Thể thao',
      'Nghệ thuật, sáng tạo'
    ]
  },
  {
    id: 9,
    question: 'Bạn đánh giá cao điều gì ở một người lãnh đạo?',
    options: [
      'Khả năng ra quyết định',
      'Khả năng truyền cảm hứng',
      'Khả năng tổ chức',
      'Khả năng sáng tạo'
    ]
  },
  {
    id: 10,
    question: 'Bạn muốn học tập và làm việc ở môi trường như thế nào?',
    options: [
      'Chuyên nghiệp, hiện đại',
      'Thân thiện, hòa đồng',
      'Tự do, sáng tạo',
      'Năng động, đổi mới'
    ]
  }
];

const GameTestHistory = () => {
  const navigate = useRouter();
  const [answers, setAnswers] = useState<string[]>([]);
  const [activeQuestion, setActiveQuestion] = useState(1);
  const questionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const data = localStorage.getItem('gameTestAnswers');
    if (data) {
      setAnswers(JSON.parse(data));
    }
  }, []);

  const handleRestart = () => {
    localStorage.removeItem('gameTestAnswers');
    navigate.push('/game-test');
  };

  const handleScrollTo = (idx: number) => {
    setActiveQuestion(idx + 1);
    questionRefs.current[idx]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF7F0]">
      <div className="p-6 max-w-7xl mx-auto w-full">
        <div className="mb-8 flex items-center gap-3">
          <div className="bg-orange-500 rounded-xl p-2 flex items-center justify-center">
            <i className="fas fa-university text-white text-2xl"></i>
          </div>
          <h1 className="text-3xl font-bold text-orange-600">Kết quả khảo sát</h1>
        </div>
        <div className="flex gap-6">
          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="mb-8 flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-800 mb-1">Tổng quan kết quả khảo sát</h2>
                <Button onClick={handleRestart} className="bg-purple-600 text-white font-bold hover:bg-purple-700 transition-all !rounded-button whitespace-nowrap cursor-pointer">
                  <i className="fas fa-redo mr-2"></i>
                  Làm lại khảo sát
                </Button>
              </div>
              <Progress value={100} className="h-2 mb-6" />
              <div className="space-y-6">
                {questions.map((q, idx) => (
                  <div
                    key={q.id}
                    ref={el => { questionRefs.current[idx] = el; }}
                    className="bg-blue-50 rounded-lg p-6"
                  >
                    <div className="mb-2 flex items-center gap-2">
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">Câu {q.id}</span>
                      <span className="text-gray-700 font-semibold">{q.question}</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                      {q.options.map((option, oidx) => {
                        const isSelected = answers[idx] === option;
                        return (
                          <div
                            key={option}
                            className={`flex items-center gap-3 border rounded-lg px-4 py-3 ${
                              isSelected
                                ? 'border-purple-500 bg-purple-50'
                                : 'border-gray-200 bg-white'
                            }`}
                          >
                            <span className={`flex items-center justify-center w-8 h-8 rounded-full font-bold text-lg ${
                              isSelected ? 'bg-purple-600 text-white' : 'bg-purple-100 text-purple-600'
                            }`}>
                              {String.fromCharCode(65 + oidx)}
                            </span>
                            <span className="text-gray-800 font-medium">{option}</span>
                            {isSelected && <span className="ml-2 text-green-600 font-semibold">(Đáp án đã chọn)</span>}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Sidebar: Danh sách số thứ tự câu hỏi */}
          <div className="w-32 flex flex-col items-center">
            <div className="bg-white rounded-lg p-4 shadow-sm border w-full">
              <h3 className="font-semibold mb-4 text-center">Câu hỏi</h3>
              <div className="grid grid-cols-2 gap-2">
                {questions.map((q, idx) => (
                  <button
                    key={q.id}
                    onClick={() => handleScrollTo(idx)}
                    className={`w-12 h-12 rounded flex items-center justify-center text-base font-bold border transition-all
                      ${activeQuestion === idx + 1 ? 'bg-purple-600 text-white border-purple-600' : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-purple-100'}
                    `}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="w-full text-center p-4 text-gray-600 mt-auto">
        <p>© 2025 FPT University - Hệ thống tư vấn tuyển sinh và định hướng ngành học</p>
      </footer>
    </div>
  );
};

export default GameTestHistory;
