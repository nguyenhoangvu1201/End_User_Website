"use client";

import { ArrowLeft, Shield, Users, TrendingUp, BookOpen, Award, Clock, Star, Target, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import BookingModal from '@/components/ui/BookingModal';

const ProgramDetail = () => {
  const param = useParams();
  const id = param.id;
  const navigate = useRouter();
  const [activeTab, setActiveTab] = useState("overview");
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

  const programData = {
    "an-toan-thong-tin": {
      title: "An toàn thông tin",
      subtitle: "Bảo vệ tương lai số của thế giới",
      icon: "🛡️",
      gradient: "from-blue-600 via-purple-600 to-indigo-700",
      description: "Việt Nam được xếp hạng thứ 7/78 quốc gia về Chỉ số Dịch vụ Toàn cầu (GSLI 2023), khẳng định vị thế trong lĩnh vực công nghệ thông tin, bao gồm An toàn thông tin. Dự kiến có hơn 50.000 người đang làm việc trong lĩnh vực này, con số này vẫn chưa đáp ứng đủ nhu cầu.",
      
      stats: [
        { icon: TrendingUp, label: "Tăng trưởng việc làm", value: "35%/năm", color: "text-green-600" },
        { icon: Users, label: "Nhu cầu nhân lực", value: "50,000+", color: "text-blue-600" },
        { icon: Award, label: "Mức lương trung bình", value: "25-50 triệu", color: "text-orange-600" },
        { icon: Target, label: "Tỷ lệ có việc làm", value: "98%", color: "text-purple-600" }
      ],

      whyFpt: {
        title: "Vì sao chọn FPT University?",
        description: "Chương trình đào tạo chuyên ngành An toàn thông tin tại Trường Đại học FPT được thiết kế để đáp ứng nhu cầu cao của thị trường, khẳng định vị thế dẫn đầu trong lĩnh vực Cyber Security. Chương trình liên tục cập nhật xu hướng mới và kết nối chặt chẽ với Tập đoàn FPT.",
        advantages: [
          { icon: Shield, title: "Lab bảo mật hiện đại", desc: "Trang bị đầy đủ công cụ và môi trường thực hành chuyên nghiệp" },
          { icon: BookOpen, title: "Chương trình cập nhật", desc: "Luôn theo kịp xu hướng công nghệ và threat landscape mới nhất" },
          { icon: Users, title: "Giảng viên chuyên gia", desc: "Đội ngũ giảng viên có kinh nghiệm thực tế từ FPT và các tập đoàn lớn" },
          { icon: Award, title: "Chứng chỉ quốc tế", desc: "Hỗ trợ lấy các chứng chỉ như CISSP, CEH, CISA" }
        ]
      },

      curriculum: {
        title: "Chương trình đào tạo",
        semesters: [
          {
            name: "Năm 1-2: Nền tảng",
            subjects: ["Lập trình C/C++", "Mạng máy tính", "Hệ điều hành", "Cơ sở dữ liệu", "Toán rời rạc"]
          },
          {
            name: "Năm 3: Chuyên sâu",
            subjects: ["Ethical Hacking", "Forensics", "Malware Analysis", "Cryptography", "Network Security"]
          },
          {
            name: "Năm 4: Thực hành",
            subjects: ["Capstone Project", "Thực tập doanh nghiệp", "Security Audit", "Incident Response"]
          }
        ]
      },

      careerOpportunities: [
        {
          title: "Cơ hội nghề nghiệp",
          jobs: [
            { name: "Security Analyst", salary: "15-25 triệu", demand: "Cao" },
            { name: "Penetration Tester", salary: "20-35 triệu", demand: "Rất cao" },
            { name: "Security Consultant", salary: "25-45 triệu", demand: "Cao" },
            { name: "CISO/Security Manager", salary: "40-80 triệu", demand: "Trung bình" },
            { name: "Malware Analyst", salary: "20-30 triệu", demand: "Cao" },
            { name: "Cloud Security Specialist", salary: "25-40 triệu", demand: "Rất cao" }
          ]
        },
        {
          title: "Tố chất cần thiết",
          qualities: [
            { name: "Tư duy logic", desc: "Khả năng phân tích và giải quyết vấn đề phức tạp" },
            { name: "Đam mê công nghệ", desc: "Luôn tìm hiểu và cập nhật kiến thức mới" },
            { name: "Tính tỷ mỷ", desc: "Chú ý đến từng chi tiết nhỏ trong hệ thống" },
            { name: "Khả năng học hỏi", desc: "Thích nghi với công nghệ và threat mới" }
          ]
        }
      ],

      companies: [
        { name: "FPT Software", logo: "🏢", positions: "50+ vị trí" },
        { name: "Viettel Cyber Security", logo: "🛡️", positions: "30+ vị trí" },
        { name: "BKAV", logo: "🔒", positions: "20+ vị trí" },
        { name: "CyberCore", logo: "⚡", positions: "15+ vị trí" }
      ]
    }
  };

  const currentProgram = programData[id as keyof typeof programData];

  if (!currentProgram) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center">
        <Card className="p-8 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Không tìm thấy thông tin ngành học</h1>
          <Button onClick={() => navigate.back()} className="bg-orange-600 hover:bg-orange-700">
            Quay lại
          </Button>
        </Card>
      </div>
    );
  }

  const tabs = [
    { id: "overview", label: "Tổng quan", icon: BookOpen },
    { id: "curriculum", label: "Chương trình", icon: Award },
    { id: "career", label: "Nghề nghiệp", icon: TrendingUp },
    { id: "companies", label: "Đối tác", icon: Users }
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowBookingModal(false);
    setShowSuccessModal(true);
    setBookingData(defaultBookingData);
    // API call có thể thêm ở đây
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className={`relative bg-gradient-to-r ${currentProgram.gradient} text-white overflow-hidden`}>
        <div className="absolute inset-0 bg-black opacity-20"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white opacity-10 rounded-full animate-pulse"></div>
          <div className="absolute top-20 right-20 w-60 h-60 bg-white opacity-5 rounded-full animate-bounce"></div>
          <div className="absolute bottom-10 left-1/3 w-32 h-32 bg-white opacity-10 rounded-full animate-pulse"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-16">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => navigate.back()}
            className="mb-8 text-white hover:text-gray-200 hover:bg-white/10 transition-all"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Quay về trang chủ
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <div className="flex items-center mb-4">
                <span className="text-6xl mr-4">{currentProgram.icon}</span>
                <div>
                  <h1 className="text-4xl font-bold mb-2">{currentProgram.title}</h1>
                  <p className="text-xl opacity-90">{currentProgram.subtitle}</p>
                </div>
              </div>
              
              <p className="text-lg opacity-90 mb-8 leading-relaxed">
                {currentProgram.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3" onClick={() => setShowBookingModal(true)}>
                  Đăng ký tư vấn
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3">
                  Tải brochure
                </Button>
              </div>
            </div>

            {/* Right Column - Stats */}
            <div className="grid grid-cols-2 gap-4">
              {currentProgram.stats.map((stat, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
                  <CardContent className="p-6 text-center">
                    <stat.icon className="w-8 h-8 mx-auto mb-3 text-yellow-300" />
                    <div className="text-2xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm opacity-90">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-2 border-b-2 transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-orange-500 text-orange-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-16">
            {/* Why Choose FPT Section */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                {currentProgram.whyFpt.title}
              </h2>
              <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-12">
                {currentProgram.whyFpt.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {currentProgram.whyFpt.advantages.map((advantage, index) => (
                  <Card key={index} className="group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-4">
                        <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-4 rounded-xl group-hover:from-orange-200 group-hover:to-orange-300 transition-all duration-300 group-hover:scale-110">
                          <advantage.icon className="w-6 h-6 text-orange-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors">
                            {advantage.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">{advantage.desc}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Industry Insights */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Thông tin ngành</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">
                    🌍
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Vị thế toàn cầu</h4>
                  <p className="text-sm text-gray-600">Việt Nam đứng thứ 7/78 quốc gia về chỉ số dịch vụ toàn cầu</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">
                    📈
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Tăng trưởng mạnh</h4>
                  <p className="text-sm text-gray-600">Thị trường An toàn thông tin tăng trưởng 35% mỗi năm</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">
                    💼
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Cơ hội việc làm</h4>
                  <p className="text-sm text-gray-600">Hàng nghìn vị trí việc làm mới được tạo ra hằng năm</p>
                </div>
              </div>
            </div>

            {/* Learning Environment */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Môi trường học tập</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Labs hiện đại</h4>
                      <p className="text-gray-600 text-sm">Trang bị đầy đủ công cụ pentesting và forensics chuyên nghiệp</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Thực tập thực tế</h4>
                      <p className="text-gray-600 text-sm">100% sinh viên được thực tập tại các công ty công nghệ hàng đầu</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Mentor 1-1</h4>
                      <p className="text-gray-600 text-sm">Được hỗ trợ bởi các chuyên gia có kinh nghiệm từ industry</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-orange-100 to-blue-100 rounded-2xl p-8 text-center">
                  <div className="text-6xl mb-4">🎓</div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Học tập thực tế</h4>
                  <p className="text-gray-600">70% thời gian thực hành trên các case study và project thực tế từ doanh nghiệp</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Curriculum Tab */}
        {activeTab === "curriculum" && (
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {currentProgram.curriculum.title}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                Chương trình được thiết kế theo chuẩn quốc tế, kết hợp lý thuyết và thực hành
              </p>
              
              {/* Curriculum Overview Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">4</div>
                  <div className="text-sm text-gray-600">Năm học</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-600">144</div>
                  <div className="text-sm text-gray-600">Tín chỉ</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-purple-600">70%</div>
                  <div className="text-sm text-gray-600">Thực hành</div>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-orange-600">6</div>
                  <div className="text-sm text-gray-600">Tháng thực tập</div>
                </div>
              </div>
            </div>

            {/* Curriculum Timeline */}
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-orange-400"></div>
              
              <div className="space-y-8">
                {currentProgram.curriculum.semesters.map((semester, index) => (
                  <div key={index} className="relative">
                    <div className="absolute left-6 w-4 h-4 bg-white border-4 border-blue-400 rounded-full shadow-lg"></div>
                    
                    <Card className="ml-16 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                      <div className={`h-2 bg-gradient-to-r ${
                        index === 0 ? 'from-blue-400 to-blue-500' :
                        index === 1 ? 'from-purple-400 to-purple-500' :
                        'from-orange-400 to-orange-500'
                      }`}></div>
                      
                      <CardContent className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                            {semester.name}
                          </h3>
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <Clock className="w-4 h-4" />
                            <span>{index < 2 ? '2 năm' : index === 2 ? '1 năm' : '1 năm'}</span>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {semester.subjects.map((subject, subIndex) => (
                            <div key={subIndex} className="group/subject">
                              <div className="flex items-center space-x-3 bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg hover:from-blue-50 hover:to-blue-100 transition-all duration-200 group-hover/subject:shadow-md">
                                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                                  <BookOpen className="w-4 h-4 text-white" />
                                </div>
                                <span className="text-sm font-medium text-gray-700 group-hover/subject:text-blue-700 transition-colors">
                                  {subject}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Development */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Kỹ năng phát triển qua từng năm</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-3xl">
                    💻
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Năm 1-2: Nền tảng</h4>
                  <p className="text-sm text-gray-600">Lập trình, mạng, hệ thống cơ bản</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-3xl">
                    🛡️
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Năm 3: Chuyên sâu</h4>
                  <p className="text-sm text-gray-600">Ethical hacking, forensics, cryptography</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-3xl">
                    🚀
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Năm 4: Thực chiến</h4>
                  <p className="text-sm text-gray-600">Capstone project, thực tập doanh nghiệp</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Career Tab */}
        {activeTab === "career" && (
          <div className="space-y-12">
            {/* Career Path Overview */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Con đường sự nghiệp</h2>
              <p className="text-gray-600 max-w-3xl mx-auto mb-8">
                An toàn thông tin là một trong những ngành có triển vọng cao nhất, với nhiều cơ hội phát triển và mức lương hấp dẫn
              </p>
              
              {/* Salary Progression */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Lộ trình lương theo kinh nghiệm</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">
                      0-1
                    </div>
                    <div className="text-sm text-gray-600 mb-1">Fresher</div>
                    <div className="font-bold text-gray-800">8-15 triệu</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">
                      1-3
                    </div>
                    <div className="text-sm text-gray-600 mb-1">Junior</div>
                    <div className="font-bold text-gray-800">15-25 triệu</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">
                      3-5
                    </div>
                    <div className="text-sm text-gray-600 mb-1">Senior</div>
                    <div className="font-bold text-gray-800">25-45 triệu</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-600 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">
                      5+
                    </div>
                    <div className="text-sm text-gray-600 mb-1">Expert/Lead</div>
                    <div className="font-bold text-gray-800">45-100 triệu</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {currentProgram.careerOpportunities.map((section, index) => (
                <Card key={index} className="h-full hover:shadow-xl transition-all duration-300 group">
                  <div className={`h-2 bg-gradient-to-r ${
                    index === 0 ? 'from-orange-400 to-red-500' : 'from-blue-400 to-purple-500'
                  }`}></div>
                  
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                        index === 0 ? 'bg-orange-100 text-orange-600' : 'bg-blue-100 text-blue-600'
                      }`}>
                        {index === 0 ? <TrendingUp className="w-6 h-6" /> : <Target className="w-6 h-6" />}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors">
                        {section.title}
                      </h3>
                    </div>
                    
                    {section.jobs ? (
                      <div className="space-y-4">
                        {section.jobs.map((job, jobIndex) => (
                          <div key={jobIndex} className="group/job border border-gray-100 rounded-lg p-4 hover:border-orange-200 hover:bg-orange-50 transition-all duration-200">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-semibold text-gray-800 group-hover/job:text-orange-700 transition-colors">
                                {job.name}
                              </h4>
                              <div className={`text-xs px-3 py-1 rounded-full font-medium ${
                                job.demand === 'Rất cao' ? 'bg-red-100 text-red-700 border border-red-200' :
                                job.demand === 'Cao' ? 'bg-orange-100 text-orange-700 border border-orange-200' :
                                'bg-gray-100 text-gray-700 border border-gray-200'
                              }`}>
                                {job.demand}
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <p className="text-sm text-gray-600">💰 {job.salary}</p>
                              <div className="flex items-center text-xs text-gray-500">
                                <Star className="w-3 h-3 mr-1" />
                                Hot job
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {section.qualities?.map((quality, qualityIndex) => (
                          <div key={qualityIndex} className="group/quality border-l-4 border-blue-400 pl-6 py-3 hover:bg-blue-50 transition-colors rounded-r-lg">
                            <h4 className="font-semibold text-gray-800 mb-2 group-hover/quality:text-blue-700 transition-colors">
                              {quality.name}
                            </h4>
                            <p className="text-sm text-gray-600 leading-relaxed">{quality.desc}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Career Development Path */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Lộ trình phát triển nghề nghiệp</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl group-hover:scale-110 transition-transform">
                    🎯
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Specialist Track</h4>
                  <p className="text-sm text-gray-600">Chuyên sâu vào một lĩnh vực cụ thể như Penetration Testing, Forensics</p>
                </div>
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl group-hover:scale-110 transition-transform">
                    👑
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Management Track</h4>
                  <p className="text-sm text-gray-600">Phát triển thành Security Manager, CISO, quản lý team bảo mật</p>
                </div>
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl group-hover:scale-110 transition-transform">
                    🚀
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Entrepreneur Track</h4>
                  <p className="text-sm text-gray-600">Khởi nghiệp với công ty bảo mật riêng hoặc consultant độc lập</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Companies Tab */}
        {activeTab === "companies" && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Đối tác tuyển dụng</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Các doanh nghiệp hàng đầu đang tìm kiếm nhân tài An toàn thông tin
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentProgram.companies.map((company, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all group">
                  <CardContent className="p-8">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                      {company.logo}
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">{company.name}</h3>
                    <p className="text-sm text-gray-600">{company.positions}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-orange-600 to-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4">Sẵn sàng bắt đầu hành trình?</h2>
          <p className="text-xl mb-8 opacity-90">
            Tham gia cùng chúng tôi để trở thành chuyên gia An toàn thông tin của tương lai
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 text-lg">
              Đăng ký ngay
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 text-lg" onClick={() => setShowBookingModal(true)}>
              Tư vấn 1-1
            </Button>
          </div>
        </div>
      </div>

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

export default ProgramDetail;