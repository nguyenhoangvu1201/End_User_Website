'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, FileText, Award, Users, CheckCircle, Calendar, MapPin, Phone, Mail, Star } from "lucide-react";

const AdmissionMethods = () => {
  const admissionMethods = [
    {
      id: "hocba",
      title: "Xét kết quả học tập cấp THPT (Học ba)",
      subtitle: "Phương thức 1",
      description: "Xét tuyển dựa trên kết quả học tập 3 năm cấp THPT với điều kiện Top 50 SchoolRank và điểm trung bình các môn.",
      icon: <FileText className="w-8 h-8" />,
      color: "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200",
      iconColor: "text-blue-600",
      bgColor: "bg-blue-600",
      requirements: [
        "Đạt Top 50 SchoolRank học ba THPT năm 2025",
        "Thực hiện trên trang schoolrank.fpt.edu.vn",
        "Sử dụng điểm lớp 11 và học kỳ 1 lớp 12",
        "Điểm kỳ 2 lớp 12 của 6 học phần [Toán + 2 môn bất kỳ] ≥ 21 điểm (*)"
      ],
      advantages: ["Không cần thi thêm", "Xét sớm", "Ưu tiên cao"],
      timeline: "Tháng 2 - Tháng 5, 2025"
    },
    {
      id: "dangnluc",
      title: "Sử dụng kết quả thi đánh giá năng lực",
      subtitle: "Phương thức 2",
      description: "Xét tuyển bằng điểm thi đánh giá năng lực của ĐHQG Hà Nội và ĐHQG TP.HCM năm 2025.",
      icon: <Award className="w-8 h-8" />,
      color: "bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200",
      iconColor: "text-emerald-600",
      bgColor: "bg-emerald-600",
      requirements: [
        "ĐHQG Hà Nội: ≥ 78 điểm",
        "ĐHQG TP.HCM: ≥ 653 điểm (từ 13/6/2025)",
        "Đạt Top 50 trong kỳ thi đánh giá năng lực",
        "Ngưỡng đầu vào các đợt tiếp theo sẽ được thông báo"
      ],
      advantages: ["Điểm chuẩn rõ ràng", "Công nhận rộng rãi", "Cơ hội cao"],
      timeline: "Tháng 6 - Tháng 8, 2025"
    },
    {
      id: "totnghiep",
      title: "Xét kết quả thi tốt nghiệp THPT",
      subtitle: "Phương thức 3", 
      description: "Xét tuyển dựa trên kết quả kỳ thi tốt nghiệp THPT quốc gia với tổ hợp môn thi phù hợp.",
      icon: <GraduationCap className="w-8 h-8" />,
      color: "bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200",
      iconColor: "text-purple-600",
      bgColor: "bg-purple-600",
      requirements: [
        "Sử dụng tổ hợp [Toán + 2 môn bất kỳ]",
        "Cộng điểm ưu tiên theo quy định Bộ GD&ĐT (*)",
        "Đạt điểm chuẩn do nhà trường công bố",
        "Hoàn thành đầy đủ chương trình THPT"
      ],
      advantages: ["Phổ biến nhất", "Nhiều tổ hợp môn", "Cơ hội rộng"],
      timeline: "Tháng 7 - Tháng 9, 2025"
    },
    {
      id: "khac",
      title: "Phương thức tuyển sinh khác",
      subtitle: "Phương thức 4",
      description: "Xét tuyển theo các tiêu chí riêng của Trường Đại học FPT dành cho các trường hợp đặc biệt.",
      icon: <Star className="w-8 h-8" />,
      color: "bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200", 
      iconColor: "text-orange-600",
      bgColor: "bg-orange-600",
      requirements: [
        "Học sinh có thành tích đặc biệt",
        "Chứng chỉ quốc tế (IELTS, TOEFL, SAT...)",
        "Giải thưởng học sinh giỏi cấp tỉnh/quốc gia",
        "Xét duyệt hồ sơ theo từng trường hợp cụ thể"
      ],
      advantages: ["Linh hoạt", "Ưu tiên tài năng", "Xét cá nhân"],
      timeline: "Quanh năm"
    }
  ];

  const importantDates = [
    { date: "Tháng 2 - 5", event: "Xét học bạ THPT", status: "active" },
    { date: "Tháng 6 - 8", event: "Xét đánh giá năng lực", status: "upcoming" },
    { date: "Tháng 7 - 9", event: "Xét tốt nghiệp THPT", status: "upcoming" },
    { date: "Quanh năm", event: "Phương thức khác", status: "ongoing" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-lg">
              <GraduationCap className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Phương thức tuyển sinh 2025
          </h1>
          <p className="text-xl text-gray-600 mb-4 font-semibold">
            Trường Đại học FPT
          </p>
          <p className="text-lg text-gray-500 max-w-4xl mx-auto leading-relaxed">
            Năm 2025, ngành xét tuyển thẳng theo quy định của Bộ Giáo dục và Đào tạo, 
            Trường Đại học FPT áp dụng 4 phương thức tuyển sinh sau để tạo cơ hội cho mọi thí sinh
          </p>
        </div>

        {/* Timeline Section */}
        <Card className="mb-12 bg-gradient-to-r from-indigo-50 to-blue-50 border-2 border-indigo-200">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center flex items-center justify-center gap-3">
              <Calendar className="w-8 h-8 text-indigo-600" />
              Lịch trình tuyển sinh 2025
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {importantDates.map((item, index) => (
                <div key={index} className={`p-4 rounded-lg border-2 ${
                  item.status === 'active' ? 'bg-green-100 border-green-300' :
                  item.status === 'upcoming' ? 'bg-blue-100 border-blue-300' :
                  'bg-orange-100 border-orange-300'
                }`}>
                  <div className="text-center">
                    <div className={`font-bold text-lg ${
                      item.status === 'active' ? 'text-green-700' :
                      item.status === 'upcoming' ? 'text-blue-700' :
                      'text-orange-700'
                    }`}>
                      {item.date}
                    </div>
                    <div className="text-gray-700 text-sm mt-1">{item.event}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Admission Methods Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {admissionMethods.map((method, index) => (
            <Card key={method.id} className={`${method.color} border-2 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group`}>
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 ${method.bgColor} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {method.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-gray-600 mb-1">
                      {method.subtitle}
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800 leading-tight">
                      {method.title}
                    </CardTitle>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {method.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Requirements */}
                <div className="bg-white/70 rounded-lg p-4 border">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Điều kiện xét tuyển:
                  </h4>
                  <div className="space-y-2">
                    {method.requirements.map((req, reqIndex) => (
                      <div key={reqIndex} className="flex items-start gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Advantages & Timeline */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/70 rounded-lg p-4 border">
                    <h4 className="font-semibold text-gray-800 mb-2 text-sm">Ưu điểm:</h4>
                    <div className="flex flex-wrap gap-1">
                      {method.advantages.map((advantage, advIndex) => (
                        <span key={advIndex} className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                          {advantage}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-white/70 rounded-lg p-4 border">
                    <h4 className="font-semibold text-gray-800 mb-2 text-sm flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Thời gian:
                    </h4>
                    <span className="text-sm font-medium text-blue-700">{method.timeline}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Important Notes */}
        <Card className="mb-8 bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-200">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <FileText className="w-6 h-6 text-yellow-600" />
              Ghi chú quan trọng
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-start gap-2">
                <span className="font-bold text-yellow-600">(*)</span>
                <span>Điểm ưu tiên được cộng theo quy định của Bộ Giáo dục và Đào tạo hiện hành.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-yellow-600">•</span>
                <span>Thí sinh có thể đăng ký nhiều phương thức tuyển sinh để tăng cơ hội trúng tuyển.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-yellow-600">•</span>
                <span>Kết quả xét tuyển sẽ được thông báo qua website chính thức và tin nhắn SMS.</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact & Registration */}
        <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0">
          <CardContent className="text-center py-12">
            <Users className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h3 className="text-3xl font-bold mb-4">Đăng ký xét tuyển ngay hôm nay!</h3>
            <p className="text-blue-100 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
              Liên hệ với chúng tôi để được tư vấn chi tiết về phương thức tuyển sinh phù hợp 
              và hỗ trợ hoàn thành hồ sơ đăng ký
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/20 backdrop-blur rounded-xl p-6">
                <Phone className="w-8 h-8 mx-auto mb-3" />
                <div className="font-semibold mb-2">Hotline tuyển sinh</div>
                <div className="text-2xl font-bold">1900 1234</div>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-xl p-6">
                <Mail className="w-8 h-8 mx-auto mb-3" />
                <div className="font-semibold mb-2">Email tuyển sinh</div>
                <div className="text-xl font-bold">tuyensinh@fpt.edu.vn</div>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-xl p-6">
                <MapPin className="w-8 h-8 mx-auto mb-3" />
                <div className="font-semibold mb-2">Website đăng ký</div>
                <div className="text-xl font-bold">fpt.edu.vn</div>
              </div>
            </div>
            
            <div className="text-blue-200 text-sm">
              <p className="mb-1">🕐 Thời gian tư vấn: 8:00 - 17:00 (Thứ 2 - Chủ nhật)</p>
              <p>📋 Hỗ trợ hoàn thành hồ sơ trực tiếp tại các cơ sở FPT University</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdmissionMethods;