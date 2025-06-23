"use client";


import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const GameTest = () => {
  const navigate = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const totalQuestions = 10;
  const progress = (currentQuestion / totalQuestions) * 100;

  // Booking modal state
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [bookingData, setBookingData] = useState({
    fullName: '',
    email: '',
    phone: '',
    type: 'online',
    date: '',
    time: ''
  });
  const timeSlots = [
    '09:00 - 10:00',
    '10:00 - 11:00',
    '11:00 - 12:00',
    '14:00 - 15:00',
    '15:00 - 16:00',
    '16:00 - 17:00',
  ];

  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [answers, setAnswers] = useState<(string | null)[]>(Array(totalQuestions).fill(null));
  const [showFinishModal, setShowFinishModal] = useState(false);

  const questions = [
    {
      id: 1,
      type: 'multiple-choice',
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
      type: 'multiple-choice',
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
      type: 'multiple-choice',
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
      type: 'multiple-choice',
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
      type: 'multiple-choice',
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
      type: 'multiple-choice',
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
      type: 'multiple-choice',
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
      type: 'multiple-choice',
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
      type: 'multiple-choice',
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
      type: 'multiple-choice',
      question: 'Bạn muốn học tập và làm việc ở môi trường như thế nào?',
      options: [
        'Chuyên nghiệp, hiện đại',
        'Thân thiện, hòa đồng',
        'Tự do, sáng tạo',
        'Năng động, đổi mới'
      ]
    }
  ];

  const handleNext = () => {
    if (!selectedAnswer) {
      setError('Vui lòng chọn một đáp án trước khi tiếp tục.');
      return;
    }
    setError(null);
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion - 1] = selectedAnswer;
    setAnswers(updatedAnswers);
    if (currentQuestion < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(answers[currentQuestion] || null);
    } else {
      // Lưu kết quả vào localStorage
      localStorage.setItem('gameTestAnswers', JSON.stringify(updatedAnswers));
      setShowFinishModal(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(1);
    setSelectedAnswer(null);
    // Reset other quiz state if needed
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowBookingModal(false);
    setShowSuccessModal(true);
    // Here you can add API call to submit bookingData
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF7F0]">
      <div className="p-6 max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="mb-8 flex items-center gap-3">
          <div className="bg-orange-500 rounded-xl p-2 flex items-center justify-center">
            <i className="fas fa-university text-white text-2xl"></i>
          </div>
          <h1 className="text-3xl font-bold text-orange-600">FPT University Career Assessment</h1>
        </div>

        <div className="flex gap-6">
          {/* Main Content Area */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl p-8 shadow-md">
              {/* Progress Section */}
              <div className="mb-8 flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-bold text-gray-800 mb-1">{questions[currentQuestion-1].question}</h2>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fas fa-question-circle text-blue-500"></i>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm font-semibold">Câu hỏi: {currentQuestion}/{totalQuestions}</span>
                </div>
              </div>
              <Progress value={(currentQuestion / totalQuestions) * 100} className="h-2 mb-6" />

              {/* Question Section */}
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <div className="mb-6">
                  <span className="text-lg font-semibold text-gray-800">{questions[currentQuestion-1].question}</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {questions[currentQuestion-1].options.map((option, idx) => {
                    const isSelected = selectedAnswer === option;
                    return (
                      <label
                        key={option}
                        className={`flex items-center gap-3 border rounded-lg px-4 py-3 cursor-pointer transition-all ${
                          isSelected
                            ? 'border-purple-500 bg-purple-50'
                            : 'border-gray-200 bg-white hover:border-blue-300'
                        }`}
                        onClick={() => setSelectedAnswer(option)}
                      >
                        <span className={`flex items-center justify-center w-8 h-8 rounded-full font-bold text-lg ${
                          isSelected ? 'bg-purple-600 text-white' : 'bg-purple-100 text-purple-600'
                        }`}>
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="text-gray-800 font-medium">{option}</span>
                        <input
                          type="radio"
                          name="answer"
                          value={option}
                          checked={isSelected}
                          onChange={() => setSelectedAnswer(option)}
                          className="hidden"
                        />
                      </label>
                    );
                  })}
                </div>
                {error && <div className="mt-4 text-sm text-red-500">{error}</div>}
              </div>

              {/* Next & Back Buttons */}
              <div className="flex justify-between items-center">
                <Button
                  onClick={() => {
                    if (currentQuestion > 1) {
                      setCurrentQuestion(currentQuestion - 1);
                      setSelectedAnswer(answers[currentQuestion - 2] || null);
                      setError(null);
                    }
                  }}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-lg"
                  disabled={currentQuestion === 1}
                >
                  <ArrowRight className="mr-2 h-4 w-4 rotate-180" /> Quay lại
                </Button>
                <Button 
                  onClick={handleNext}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg"
                >
                  {currentQuestion === totalQuestions ? 'Hoàn thành' : 'Câu tiếp theo'} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              {/* Nút đặt lịch tư vấn */}
              <div className="flex justify-center mt-8">
                <Button
                  id="bookConsultationBtn"
                  onClick={() => setShowBookingModal(true)}
                  className="px-6 py-3 rounded-lg bg-purple-600 text-white font-bold shadow-lg hover:bg-purple-700 transition-all !rounded-button whitespace-nowrap cursor-pointer"
                >
                  <i className="fas fa-calendar-alt mr-2"></i>
                  Đặt lịch tư vấn
                </Button>
              </div>
            </div>

            {/* Modal hoàn thành khảo sát */}
            {showFinishModal && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate__animated animate__fadeIn">
                <div className="bg-white rounded-2xl p-8 w-full max-w-md text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-check text-3xl text-green-500"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Chúc mừng bạn đã hoàn thành phần khảo sát!</h3>
                    <p className="text-gray-600">
                      Kết quả của bạn đã được lưu lại. Nhấn xác nhận để xem kết quả.
                    </p>
                  </div>
                  <button
                    onClick={() => navigate.push('/game-test/history')}
                    className="px-6 py-3 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition-all !rounded-button whitespace-nowrap"
                  >
                    Xác nhận
                  </button>
                </div>
              </div>
            )}

            {/* Booking Modal */}
            {showBookingModal && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate__animated animate__fadeIn">
                <div className="bg-white rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-800">Đặt lịch tư vấn</h3>
                    <button 
                      onClick={() => setShowBookingModal(false)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <i className="fas fa-times text-xl"></i>
                    </button>
                  </div>
                  <form onSubmit={handleBookingSubmit} className="space-y-6">
                    {/* Contact Information */}
                    <div className="space-y-4">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Họ và tên</label>
                        <input
                          type="text"
                          id="fullName"
                          value={bookingData.fullName}
                          onChange={(e) => setBookingData({...bookingData, fullName: e.target.value})}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Email</label>
                        <input
                          type="email"
                          id="email"
                          value={bookingData.email}
                          onChange={(e) => setBookingData({...bookingData, email: e.target.value})}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Số điện thoại</label>
                        <input
                          type="tel"
                          id="phone"
                          value={bookingData.phone}
                          onChange={(e) => setBookingData({...bookingData, phone: e.target.value})}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                    {/* Consultation Type */}
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Hình thức tư vấn</label>
                      <div className="flex gap-4">
                        <button
                          type="button"
                          onClick={() => setBookingData({...bookingData, type: 'online'})}
                          className={`flex-1 py-3 px-4 rounded-lg border-2 transition-all !rounded-button whitespace-nowrap ${
                            bookingData.type === 'online'
                              ? 'border-purple-500 bg-purple-50 text-purple-700'
                              : 'border-gray-300 text-gray-600 hover:border-purple-300'
                          }`}
                        >
                          <i className="fas fa-video mr-2"></i>
                          Trực tuyến
                        </button>
                        <button
                          type="button"
                          onClick={() => setBookingData({...bookingData, type: 'offline'})}
                          className={`flex-1 py-3 px-4 rounded-lg border-2 transition-all !rounded-button whitespace-nowrap ${
                            bookingData.type === 'offline'
                              ? 'border-purple-500 bg-purple-50 text-purple-700'
                              : 'border-gray-300 text-gray-600 hover:border-purple-300'
                          }`}
                        >
                          <i className="fas fa-user mr-2"></i>
                          Trực tiếp
                        </button>
                      </div>
                    </div>
                    {/* Date Selection */}
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Chọn ngày</label>
                      <div className="relative">
                        <input
                          type="date"
                          id="consultationDate"
                          value={bookingData.date}
                          onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                    {/* Time Slot Selection */}
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Chọn giờ</label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {timeSlots.map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setBookingData({...bookingData, time: slot})}
                            className={`py-2 px-4 rounded-lg border-2 transition-all text-sm !rounded-button whitespace-nowrap ${
                              bookingData.time === slot
                                ? 'border-purple-500 bg-purple-50 text-purple-700'
                                : 'border-gray-300 text-gray-600 hover:border-purple-300'
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                    {/* Submit Button */}
                    <div className="flex justify-end gap-4">
                      <button
                        type="button"
                        onClick={() => setShowBookingModal(false)}
                        className="px-6 py-3 border-2 border-gray-300 rounded-lg text-gray-600 font-bold hover:bg-gray-50 transition-all !rounded-button whitespace-nowrap"
                      >
                        Hủy
                      </button>
                      <button
                        type="submit"
                        className="px-6 py-3 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700 transition-all !rounded-button whitespace-nowrap"
                      >
                        Xác nhận đặt lịch
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* Success Modal */}
            {showSuccessModal && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate__animated animate__fadeIn">
                <div className="bg-white rounded-2xl p-8 w-full max-w-md text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-check text-3xl text-green-500"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Đặt lịch thành công!</h3>
                    <p className="text-gray-600">
                      Chúng tôi sẽ liên hệ với bạn qua email để xác nhận lịch tư vấn.
                    </p>
                  </div>
                  <button
                    onClick={() => setShowSuccessModal(false)}
                    className="px-6 py-3 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition-all !rounded-button whitespace-nowrap"
                  >
                    Đóng
                  </button>
                </div>
              </div>
            )}
          </div>
          {/* Right Sidebar: Danh sách số thứ tự câu hỏi */}
          <div className="w-32 flex flex-col items-center">
            <div className="bg-white rounded-lg p-4 shadow-sm border w-full">
              <h3 className="font-semibold mb-4 text-center">Câu hỏi</h3>
              <div className="grid grid-cols-2 gap-2">
                {questions.map((q, idx) => (
                  <button
                    key={q.id}
                    onClick={() => {
                      setCurrentQuestion(idx + 1);
                      setSelectedAnswer(answers[idx] || null);
                      setError(null);
                    }}
                    className={`w-12 h-12 rounded flex items-center justify-center text-base font-bold border transition-all
                      ${currentQuestion === idx + 1 ? 'bg-purple-600 text-white border-purple-600' : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-purple-100'}
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
      {/* Footer */}
      <footer className="w-full text-center p-4 text-gray-600 mt-auto">
        <p>© 2025 FPT University - Hệ thống tư vấn tuyển sinh và định hướng ngành học</p>
      </footer>
    </div>
  );
};

export default GameTest;
