'use client'
import { useState } from "react";
import { ArrowRight, ArrowLeft, Calendar, Video, User, Check, X, Clock, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";
import BookingModal from '@/components/ui/BookingModal';

const GameTest = () => {
const [currentQuestion, setCurrentQuestion] = useState(1);
const totalQuestions = 10;
const progress = (currentQuestion / totalQuestions) * 100;

// Booking modal state
const [showBookingModal, setShowBookingModal] = useState(false);
const [showSuccessModal, setShowSuccessModal] = useState(false);
const defaultBookingData = {
  fullName: '',
  email: '',
  phone: '',
  type: 'online',
  date: '',
  time: ''
};
const [bookingData, setBookingData] = useState(defaultBookingData);

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
const [answers, setAnswers] = useState(Array(totalQuestions).fill(null));
const [showFinishModal, setShowFinishModal] = useState(false);

const router = useRouter();

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
    // Lưu đáp án vào localStorage khi hoàn thành quiz
    if (typeof window !== 'undefined') {
      localStorage.setItem('gameTestAnswers', JSON.stringify(updatedAnswers));
    }
    setShowFinishModal(true);
  }
};

const handlePrevious = () => {
  if (currentQuestion > 1) {
    setCurrentQuestion(currentQuestion - 1);
    setSelectedAnswer(answers[currentQuestion - 2] || null);
    setError(null);
  }
};

const handleBookingSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setShowBookingModal(false);
  setShowSuccessModal(true);
  // Here you would add API call to submit bookingData
  console.log('Booking submitted:', bookingData);
  setBookingData(defaultBookingData);
};

const jumpToQuestion = (questionNumber: number) => {
  setCurrentQuestion(questionNumber);
  setSelectedAnswer(answers[questionNumber - 1] || null);
  setError(null);
};

return (
  <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-purple-50">
    {/* Header */}
    <header className="bg-white shadow-sm border-b border-orange-200">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center gap-4">
          <div className="bg-orange-500 rounded-xl p-3">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-orange-500 font-bold text-lg">F</span>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-orange-600">FPT University Career Assessment</h1>
            <p className="text-gray-700 text-sm">Khám phá con đường sự nghiệp phù hợp với bạn</p>
          </div>
        </div>
      </div>
    </header>

    <div className="max-w-6xl mx-auto px-6 py-8">
      <div className="flex gap-8">
        {/* Main Content */}
        <div className="flex-1">
          {/* Progress Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-orange-400">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-lg font-semibold text-orange-600">Tiến độ bài kiểm tra</h2>
                <p className="text-gray-700 text-sm">Câu hỏi {currentQuestion} / {totalQuestions}</p>
              </div>
              <div className="bg-orange-100 px-4 py-2 rounded-full">
                <span className="text-orange-600 font-semibold">{Math.round(progress)}%</span>
              </div>
            </div>
            <div className="w-full bg-orange-100 rounded-full h-3">
              <div 
                className="bg-orange-500 h-3 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 border border-orange-400">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-orange-500 text-white rounded-lg px-3 py-1 text-sm font-semibold">
                  Câu {currentQuestion}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-black leading-relaxed">
                {questions[currentQuestion-1].question}
              </h3>
            </div>

            <div className="space-y-3">
              {questions[currentQuestion-1].options.map((option, idx) => {
                const isSelected = selectedAnswer === option;
                const letter = String.fromCharCode(65 + idx);
                
                return (
                  <button
                    key={option}
                    onClick={() => setSelectedAnswer(option)}
                    className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-200 hover:shadow-md ${
                      isSelected
                        ? 'border-orange-500 bg-orange-50 shadow-md'
                        : 'border-gray-200 bg-white hover:border-orange-300'
                    }`}
                  >
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold text-lg ${
                      isSelected 
                        ? 'bg-orange-500 text-white' 
                        : 'bg-gray-200 text-black'
                    }`}>
                      {letter}
                    </div>
                    <span className="text-left text-black font-medium flex-1">
                      {option}
                    </span>
                  </button>
                );
              })}
            </div>

            {error && (
              <div className="mt-4 p-3 bg-orange-50 border border-orange-200 rounded-lg">
                <p className="text-orange-600 text-sm">{error}</p>
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 1}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                currentQuestion === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-black border-2 border-orange-400 hover:border-orange-500 hover:shadow-md'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              Quay lại
            </button>

            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-8 py-3 bg-orange-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all transform hover:scale-105"
            >
              {currentQuestion === totalQuestions ? 'Hoàn thành' : 'Câu tiếp theo'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Consultation Booking Button */}
          <div className="bg-orange-500 rounded-2xl p-1">
            <div className="bg-white rounded-xl p-6 text-center">
              <h3 className="text-lg font-semibold text-black mb-2">Cần hỗ trợ tư vấn?</h3>
              <p className="text-gray-700 mb-4">Đặt lịch tư vấn miễn phí với chuyên gia của chúng tôi</p>
              <button
                onClick={() => setShowBookingModal(true)}
                className="bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all transform hover:scale-105"
              >
                <Calendar className="w-4 h-4 inline mr-2" />
                Đặt lịch tư vấn
              </button>
            </div>
          </div>
        </div>

        {/* Question Navigation Sidebar */}
        <div className="w-64">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-orange-200 sticky top-8">
            <h3 className="font-semibold text-black mb-4 text-center">Danh sách câu hỏi</h3>
            <div className="grid grid-cols-5 gap-2">
              {questions.map((q, idx) => {
                const questionNumber = idx + 1;
                const isAnswered = answers[idx] !== null;
                const isCurrent = currentQuestion === questionNumber;
                
                return (
                  <button
                    key={q.id}
                    onClick={() => jumpToQuestion(questionNumber)}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold transition-all ${
                      isCurrent
                        ? 'bg-orange-500 text-white shadow-lg'
                        : isAnswered
                        ? 'bg-black text-white border border-black'
                        : 'bg-gray-100 text-gray-600 hover:bg-orange-100 border border-gray-300'
                    }`}
                  >
                    {questionNumber}
                  </button>
                );
              })}
            </div>
            <div className="mt-6 space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-orange-500 rounded"></div>
                <span className="text-black">Câu hiện tại</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-black border border-black rounded"></div>
                <span className="text-black">Đã trả lời</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-100 border border-gray-300 rounded"></div>
                <span className="text-black">Chưa trả lời</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Completion Modal */}
    {showFinishModal && (
      <div className="fixed inset-0 bg-black/10 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-8 w-full max-w-md text-center animate-pulse border-2 border-orange-400">
          <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-orange-600 mb-4">Chúc mừng!</h3>
          <p className="text-gray-700 mb-6">
            Bạn đã hoàn thành bài kiểm tra định hướng nghề nghiệp. 
            Kết quả của bạn đã được lưu lại.
          </p>
          <button
            onClick={() => {
              setShowFinishModal(false);
              router.push('/game-test/history');
            }}
            className="bg-orange-500 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
          >
            Xem kết quả
          </button>
        </div>
      </div>
    )}

    {/* Booking Modal */}
    {showBookingModal && (
      <BookingModal
        bookingData={bookingData}
        setBookingData={setBookingData}
        setShowBookingModal={(show: boolean) => {
          setShowBookingModal(show);
          if (!show) setBookingData(defaultBookingData);
        }}
        setShowSuccessModal={setShowSuccessModal}
        timeSlots={timeSlots}
        onSubmit={handleBookingSubmit}
      />
    )}

    {/* Success Modal */}
    {showSuccessModal && (
      <div className="fixed inset-0 bg-black/10 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-8 w-full max-w-md text-center border-2 border-orange-400">
          <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-orange-600 mb-4">Đặt lịch thành công!</h3>
          <p className="text-gray-700 mb-6">
            Chúng tôi sẽ liên hệ với bạn qua email và điện thoại để xác nhận lịch tư vấn trong thời gian sớm nhất.
          </p>
          <button
            onClick={() => setShowSuccessModal(false)}
            className="bg-orange-500 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
          >
            Đóng
          </button>
        </div>
      </div>
    )}

    {/* Footer */}
    <footer className="bg-white border-t border-orange-200 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-8 text-center">
        <p className="text-black">
          © 2025 FPT University - Hệ thống tư vấn tuyển sinh và định hướng ngành học
        </p>
      </div>
    </footer>
  </div>
);
};

export default GameTest;