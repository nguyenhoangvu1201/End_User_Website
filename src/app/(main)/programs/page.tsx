"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { useState } from "react";
import BookingModal from '@/components/ui/BookingModal';

const Programs = () => {
  const navigate = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
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

  const programCategories = [
    {
      title: "Công nghệ thông tin",
      subtitle: "Khám phá tương lai số",
      description: "Trang bị kiến thức và kỹ năng công nghệ tiên tiến cho thế hệ 4.0",
      gradient: "from-blue-500 to-purple-600",
      programs: [
        { name: "An toàn thông tin", icon: "🛡️", id: "an-toan-thong-tin", trend: "🔥 Hot" },
        { name: "Công nghệ ô tô số", icon: "🚗", id: "cong-nghe-oto-so", trend: "🚀 Mới" },
        { name: "Kỹ thuật phần mềm", icon: "💻", id: "ky-thuat-phan-mem", trend: "⭐ Phổ biến" },
        { name: "Chuyển đổi số", icon: "🔄", id: "chuyen-doi-so", trend: "📈 Tăng trưởng" },
        { name: "Thiết kế mỹ thuật số", icon: "🎨", id: "thiet-ke-my-thuat-so", trend: "🎯 Sáng tạo" },
        { name: "Thiết kế vi mạch bán dẫn", icon: "🔧", id: "thiet-ke-vi-mach-ban-dan", trend: "🌟 Tiềm năng" },
        { name: "Trí tuệ nhân tạo", icon: "🤖", id: "tri-tue-nhan-tao", trend: "🔥 Xu hướng" },
      ]
    },
    {
      title: "Quản trị kinh doanh",
      subtitle: "Dẫn dắt thương mại toàn cầu",
      description: "Phát triển tư duy quản trị và kỹ năng kinh doanh hiện đại",
      gradient: "from-green-500 to-teal-600",
      programs: [
        { name: "Công nghệ tài chính (Fintech)", icon: "💳", id: "cong-nghe-tai-chinh-fintech", trend: "🚀 Bùng nổ" },
        { name: "Digital Marketing", icon: "📈", id: "digital-marketing", trend: "🔥 Hot" },
        { name: "Kinh doanh quốc tế", icon: "🌍", id: "kinh-doanh-quoc-te", trend: "🌐 Toàn cầu" },
        { name: "Logistics & quản lý chuỗi cung ứng toàn cầu", icon: "📦", id: "logistics-quan-ly-chuoi-cung-ung-toan-cau", trend: "📊 Cần thiết" },
        { name: "Quản trị khách sạn", icon: "🏨", id: "quan-ly-khach-san", trend: "🏖️ Du lịch" },
        { name: "Quản trị dịch vụ du lịch & lữ hành", icon: "✈️", id: "quan-ly-dich-vu-du-lich-lu-hanh", trend: "🌏 Phát triển" },
        { name: "Tài chính doanh nghiệp", icon: "💰", id: "tai-chinh-doanh-nghiep", trend: "📈 Ổn định" },
        { name: "Ngân hàng số - Tài chính", icon: "🏦", id: "ngan-hang-so-tai-chinh-digital-banking-and-finance", trend: "💎 Tiềm năng" },
        { name: "Tài chính đầu tư", icon: "📊", id: "tai-chinh-dau-tu", trend: "💹 Sinh lời" },
      ]
    },
    {
      title: "Công nghệ truyền thông",
      subtitle: "Kết nối và truyền cảm hứng",
      description: "Xây dựng kỹ năng truyền thông đa nền tảng trong kỷ nguyên số",
      gradient: "from-pink-500 to-rose-600",
      programs: [
        { name: "Quan hệ công chúng", icon: "📢", id: "quan-he-cong-chung", trend: "🎯 Cần thiết" },
        { name: "Truyền thông đa phương tiện", icon: "📺", id: "truyen-thong-da-phuong-tien", trend: "🎬 Sáng tạo" },
      ]
    },
    {
      title: "Luật",
      subtitle: "Bảo vệ công lý tương lai",
      description: "Đào tạo chuyên gia pháp lý cho nền kinh tế số",
      gradient: "from-indigo-500 to-blue-600",
      programs: [
        { name: "Luật kinh tế", icon: "⚖️", id: "luat-kinh-te", trend: "🏛️ Uy tín" },
        { name: "Luật thương mại quốc tế", icon: "🌐", id: "luat-thuong-mai-quoc-te", trend: "🌍 Quốc tế" },
      ]
    },
    {
      title: "Ngôn ngữ Anh",
      subtitle: "Cầu nối toàn cầu",
      description: "Thành thạo ngôn ngữ quốc tế cho cơ hội nghề nghiệp rộng mở",
      gradient: "from-red-500 to-orange-600",
      programs: [
        { name: "Ngôn ngữ Anh", icon: "🇺🇸", id: "ngon-ngu-anh", trend: "🌟 Căn bản" },
      ]
    },
    {
      title: "Ngôn ngữ Nhật",
      subtitle: "Khám phá xứ sở hoa anh đào",
      description: "Nắm bắt cơ hội việc làm tại thị trường Nhật Bản",
      gradient: "from-purple-500 to-pink-600",
      programs: [
        { name: "Song ngữ Nhật - Anh", icon: "🇯🇵", id: "song-ngu-nhat-anh", trend: "🌸 Cơ hội" },
      ]
    },
    {
      title: "Ngôn ngữ Trung Quốc",
      subtitle: "Kết nối thị trường tỷ dân",
      description: "Tận dụng tiềm năng thương mại với Trung Quốc",
      gradient: "from-yellow-500 to-red-600",
      programs: [
        { name: "Song ngữ Trung - Anh", icon: "🇨🇳", id: "song-ngu-trung-anh", trend: "🐉 Tiềm năng" },
      ]
    },
    {
      title: "Ngôn ngữ Hàn Quốc",
      subtitle: "Làn sóng Hallyu",
      description: "Tham gia xu hướng văn hóa và kinh tế Hàn Quốc",
      gradient: "from-blue-500 to-purple-600",
      programs: [
        { name: "Song ngữ Hàn - Anh", icon: "🇰🇷", id: "song-ngu-han-anh", trend: "🎵 Phong cách" },
      ]
    }
  ];

  const handleProgramClick: (programId: string) => void = (programId) => {
    navigate.push(`/programs/${programId}`);
  };

  const handleCategoryClick: (categoryIndex: number) => void = (categoryIndex) => {
    setSelectedCategory(selectedCategory === categoryIndex ? null : categoryIndex);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowBookingModal(false);
    setShowSuccessModal(true);
    // Here you would add API call to submit bookingData
    console.log('Booking submitted:', bookingData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-orange-500 to-blue-600 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-orange-100 bg-clip-text text-transparent">
              Định hướng tương lai cùng FPT
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Khám phá hành trình học tập và nghề nghiệp của bạn với các chương trình đào tạo tiên tiến, 
              được thiết kế để thành công trong kỷ nguyên số
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm">
              <div className="flex items-center">
                <span className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></span>
                <span>30+ Chương trình đào tạo</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-green-400 rounded-full mr-2"></span>
                <span>98% Sinh viên có việc làm</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-blue-400 rounded-full mr-2"></span>
                <span>Hợp tác 500+ Doanh nghiệp</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="max-w-7xl mx-auto p-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Chọn lĩnh vực phù hợp với đam mê
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mỗi lĩnh vực đều mở ra những cơ hội nghề nghiệp tuyệt vời. 
            Hãy khám phá và tìm ra con đường phù hợp nhất với bạn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {programCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex} 
              className={`group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105 border-0 overflow-hidden ${
                selectedCategory === categoryIndex ? 'ring-4 ring-orange-300' : ''
              }`}
              onClick={() => handleCategoryClick(categoryIndex)}
            >
              <div className={`h-2 bg-gradient-to-r ${category.gradient}`}></div>
              
              <CardHeader className="pb-4 bg-gradient-to-br from-white to-gray-50">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors">
                      {category.title}
                    </CardTitle>
                    <p className="text-sm text-orange-600 font-medium mt-1">
                      {category.subtitle}
                    </p>
                  </div>
                  <div className="text-2xl group-hover:scale-110 transition-transform">
                    {selectedCategory === categoryIndex ? '📖' : '🎯'}
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  {category.description}
                </p>
              </CardHeader>

              <CardContent className="pt-0">
                <div className={`space-y-2 transition-all duration-300 ${
                  selectedCategory === categoryIndex ? 'max-h-96 opacity-100' : 'max-h-32 opacity-70'
                } overflow-hidden`}>
                  {category.programs.map((program, programIndex) => (
                    <div
                      key={programIndex}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleProgramClick(program.id);
                      }}
                      className={`group/program flex items-center justify-between p-3 rounded-lg transition-all duration-200 bg-gradient-to-r from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200 cursor-pointer border border-orange-200`}
                    >
                      <div className="flex items-center flex-1">
                        <span className="text-lg mr-3 group-hover/program:scale-110 transition-transform">
                          {program.icon}
                        </span>
                        <span className="text-sm font-medium text-gray-800 group-hover/program:text-orange-700 transition-colors">
                          {program.name}
                        </span>
                      </div>
                      <span className="text-xs bg-white px-2 py-1 rounded-full text-gray-600 font-medium shadow-sm">
                        {program.trend}
                      </span>
                    </div>
                  ))}
                </div>
                
                {selectedCategory !== categoryIndex && category.programs.length > 3 && (
                  <div className="mt-3 text-center">
                    <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      Xem thêm {category.programs.length - 3} chương trình
                    </span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-orange-600 to-blue-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">
            Bắt đầu hành trình tương lai của bạn ngay hôm nay!
          </h3>
          <p className="mb-6 opacity-90">
            Tham gia cùng hàng ngàn sinh viên FPT đang xây dựng sự nghiệp thành công
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
            onClick={() => setShowBookingModal(true)}
            className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Tư vấn miễn phí
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
              Đăng ký tham quan
            </button>
          </div>
        </div>
      </div>

      {showBookingModal && (
        <BookingModal
          bookingData={bookingData}
          setBookingData={setBookingData}
          setShowBookingModal={setShowBookingModal}
          setShowSuccessModal={setShowSuccessModal}
          timeSlots={timeSlots}
          onSubmit={handleBookingSubmit}
        />
      )}

      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/10 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 w-full max-w-md text-center border-2 border-orange-400">
            <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
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
    </div>
  );
};

export default Programs;