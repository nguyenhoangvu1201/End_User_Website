"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useParams, useRouter } from 'next/navigation';

const GameTestDetail = () => {
    const params = useParams();
    const productId = params?.id;
    const navigate = useRouter();

  const testQuestions = [
    {
      id: 1,
      question: "Bạn thích làm việc trong môi trường nào nhất?",
      userAnswer: "Làm việc nhóm, hợp tác với nhiều người",
      correctAnswer: "Làm việc nhóm, hợp tác với nhiều người",
      isCorrect: true,
      explanation: "Đây là lựa chọn phù hợp với tính cách hướng ngoại và khả năng làm việc nhóm tốt."
    },
    {
      id: 2,
      question: "Khi gặp vấn đề khó khăn, bạn thường làm gì?",
      userAnswer: "Tìm hiểu và giải quyết từng bước một cách có hệ thống",
      correctAnswer: "Tìm hiểu và giải quyết từng bước một cách có hệ thống",
      isCorrect: true,
      explanation: "Cách tiếp cận có hệ thống giúp giải quyết vấn đề hiệu quả và tránh sai sót."
    }
  ];

  return (

      <div className="p-6 max-w-4xl mx-auto">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate.push('/game-test/history')}
          className="mb-6 text-gray-600 hover:text-gray-800"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Quay lại lịch sử test
        </Button>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-orange-600 mb-2">Chi tiết bài test</h1>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-600">Test ID: #{productId}</p>
              <p className="text-gray-600">Ngày thực hiện: 17/6/2025</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Kết quả</p>
              <p className="text-2xl font-bold text-green-600">7/10</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {testQuestions.map((item, index) => (
            <div key={item.id} className="bg-white rounded-lg border p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium mr-3">
                      Câu hỏi {item.id}
                    </span>
                    <span className="text-sm text-gray-600">Giải thích</span>
                  </div>
                  <h3 className="text-lg font-medium text-gray-800 mb-4">{item.question}</h3>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">Kết quả</p>
                  <p className="text-sm font-medium">ABC</p>
                </div>
              </div>

              {/* Answer Section */}
              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div className="flex-1">
                    <p className="text-gray-700">{item.userAnswer}</p>
                  </div>
                </div>
              </div>

              {/* Explanation */}
              <div className="text-sm text-gray-600">
                <p className="mb-2"><strong>Giải thích:</strong></p>
                <p>{item.explanation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default GameTestDetail;
