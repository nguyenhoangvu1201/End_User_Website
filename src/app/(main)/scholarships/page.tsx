"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Filter, Award, Users, Calendar, CheckCircle, Star, GraduationCap } from "lucide-react";
import { useRouter } from 'next/navigation';

const Scholarships = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const scholarships = [
    {
      id: 1,
      title: "Học bổng Chuyên gia Toàn cầu",
      category: "excellence",
      value: "100%",
      description: "Đạt giải Nhất/Nhì/Ba kỳ thi HSG quốc gia. Đăng ký ngành Công nghệ Thông tin. Phỏng vấn cùng giảng viên ĐH FPT quốc tế",
      requirements: [
        "Đạt giải Nhất/Nhì/Ba kỳ thi HSG quốc gia",
        "Đăng ký ngành Công nghệ Thông tin",
        "Vượt qua vòng phỏng vấn với giảng viên quốc tế"
      ],
      benefits: [
        "Miễn 100% học phí 4 năm",
        "Hỗ trợ sinh hoạt phí hàng tháng",
        "Cơ hội thực tập tại các công ty đối tác quốc tế",
        "Mentoring 1-1 với chuyên gia"
      ],
      deadline: "31/03/2025",
      slots: 50,
      applied: 200,
      status: "open"
    },
    {
      id: 2,
      title: "Học bổng Học đường - Top School",
      category: "academic",
      value: "80%",
      description: "Mỗi trường THPT khu vực 1 có 1 suất. Xếp hạng SchoolRank thuộc Top50. Được Ban Giám hiệu trường THPT đề cử",
      requirements: [
        "Thuộc trường THPT khu vực 1",
        "Xếp hạng SchoolRank thuộc Top 50",
        "Được Ban Giám hiệu đề cử",
        "Học lực xuất sắc 3 năm THPT"
      ],
      benefits: [
        "Miễn 80% học phí 4 năm",
        "Ưu tiên tham gia các chương trình trao đổi sinh viên",
        "Hỗ trợ tài liệu học tập",
        "Cơ hội được tài trợ tham gia các cuộc thi"
      ],
      deadline: "15/04/2025",
      slots: 100,
      applied: 150,
      status: "open"
    },
    {
      id: 3,
      title: "Học bổng Xuất sắc Toàn diện",
      category: "excellence",
      value: "100%",
      description: "Dành cho thí sinh có thành tích xuất sắc trong học tập và các hoạt động ngoại khóa",
      requirements: [
        "Thi Olympic quốc tế hoặc thi HSG quốc gia",
        "Giải Khuyến khích kỳ thi HSG quốc gia + trúng tuyển ĐH FPT",
        "Điểm thi tốt nghiệp THPT ≥ 29.5/30",
        "Điểm thi đánh giá năng lực ≥ 30.0"
      ],
      benefits: [
        "Miễn 100% học phí 4 năm",
        "Laptop học tập miễn phí",
        "Ưu tiên chọn chuyên ngành",
        "Cơ hội du học ngắn hạn"
      ],
      deadline: "30/04/2025",
      slots: 75,
      applied: 300,
      status: "open"
    },
    {
      id: 4,
      title: "Học bổng Năng lực - DHQG",
      category: "academic",
      value: "90%",
      description: "Dành cho thí sinh có điểm cao trong kỳ thi đánh giá năng lực của DHQG",
      requirements: [
        "Điểm thi đánh giá năng lực DHQG HN/HCM ≥ 28.5/30",
        "Điểm TB 3 học kỳ cuối THPT ≥ 85%",
        "Chứng chỉ ngoại ngữ quốc tế (nếu có)"
      ],
      benefits: [
        "Miễn 90% học phí 4 năm",
        "Hỗ trợ tài liệu chuyên ngành",
        "Tham gia các workshop chuyên sâu",
        "Kết nối với mạng lưới alumni"
      ],
      deadline: "25/04/2025",
      slots: 120,
      applied: 180,
      status: "open"
    },
    {
      id: 5,
      title: "Học bổng Tài năng Tỉnh",
      category: "regional",
      value: "70%",
      description: "Dành cho học sinh xuất sắc ở các tỉnh thành trên cả nước",
      requirements: [
        "Đạt giải HSG cấp tỉnh",
        "Điểm thi đánh giá năng lực ≥ 28.0/30",
        "Điểm TB 3 học kỳ cuối ≥ 80%",
        "Tham gia hoạt động xã hội tích cực"
      ],
      benefits: [
        "Miễn 70% học phí 4 năm",
        "Hỗ trợ chi phí sinh hoạt",
        "Tham gia câu lạc bộ chuyên môn",
        "Cơ hội thực tập sớm"
      ],
      deadline: "10/05/2025",
      slots: 200,
      applied: 250,
      status: "open"
    },
    {
      id: 6,
      title: "Học bổng Nữ sinh IT",
      category: "special",
      value: "60%",
      description: "Khuyến khích nữ sinh theo học các chuyên ngành Công nghệ thông tin",
      requirements: [
        "Thí sinh nữ",
        "Đăng ký các ngành thuộc nhóm CNTT",
        "Điểm học tập trung bình khá trở lên",
        "Cam kết học tập tại FPT"
      ],
      benefits: [
        "Miễn 60% học phí 4 năm",
        "Tham gia cộng đồng Women in Tech",
        "Mentoring từ nữ chuyên gia trong ngành",
        "Ưu tiên cơ hội thực tập"
      ],
      deadline: "20/05/2025",
      slots: 150,
      applied: 100,
      status: "open"
    }
  ];

  const categories = [
    { id: 'all', name: 'Tất cả', icon: Award },
    { id: 'excellence', name: 'Xuất sắc', icon: Star },
    { id: 'academic', name: 'Học thuật', icon: GraduationCap },
    { id: 'regional', name: 'Khu vực', icon: Users },
    { id: 'special', name: 'Đặc biệt', icon: CheckCircle }
  ];

  const stats = [
    { label: 'Tổng học bổng', value: '695', icon: Award },
    { label: 'Đã cấp phát', value: '1,280', icon: CheckCircle },
    { label: 'Thí sinh đăng ký', value: '3,200+', icon: Users },
    { label: 'Tỷ lệ thành công', value: '89%', icon: Star }
  ];

  const filteredScholarships = scholarships.filter(scholarship => {
    const matchesSearch = scholarship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scholarship.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || scholarship.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'open': return 'bg-green-500';
      case 'closing': return 'bg-yellow-500';
      case 'closed': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'excellence': return 'bg-gradient-to-br from-purple-500 to-purple-600';
      case 'academic': return 'bg-gradient-to-br from-blue-500 to-blue-600';
      case 'regional': return 'bg-gradient-to-br from-green-500 to-green-600';
      case 'special': return 'bg-gradient-to-br from-pink-500 to-pink-600';
      default: return 'bg-gradient-to-br from-gray-500 to-gray-600';
    }
  };

  const handleApply = (scholarship: any) => {
    localStorage.setItem('selectedScholarship', JSON.stringify(scholarship));
    router.push('/scholarships/apply');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Chương trình Học bổng 
              <span className="text-orange-500"> FPT University</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Mở ra cơ hội học tập với các chương trình học bổng đa dạng, hỗ trợ tài năng trẻ phát triển toàn diện
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                  <stat.icon className="w-8 h-8 text-orange-500" />
                </div>
              </div>
            ))}
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Tìm kiếm học bổng..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button
              onClick={() => setShowFilters(!showFilters)}
              variant="outline"
              className="flex items-center gap-2 px-6 py-3 border-gray-200 hover:bg-gray-50"
            >
              <Filter className="w-5 h-5" />
              Bộ lọc
            </Button>
          </div>

          {/* Category Filter */}
          {showFilters && (
            <div className="mt-4 p-4 bg-gray-50 rounded-xl">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                      selectedCategory === category.id
                        ? 'bg-orange-500 text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Scholarships Grid */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredScholarships.map((scholarship) => (
            <Card key={scholarship.id} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden border-0">
              {/* Header */}
              <div className={`${getCategoryColor(scholarship.category)} p-6 text-white relative`}>
                <div className="flex justify-between items-start mb-4">
                  <Badge className={`${getStatusColor(scholarship.status)} text-white px-3 py-1 text-xs font-medium`}>
                    Đang mở
                  </Badge>
                  <div className="text-right">
                    <div className="text-2xl font-bold">{scholarship.value}</div>
                    <div className="text-sm opacity-90">Học phí</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold leading-tight">{scholarship.title}</h3>
              </div>

              <CardContent className="p-6">
                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {scholarship.description}
                </p>

                {/* Requirements Preview */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Điều kiện chính:</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {scholarship.requirements.slice(0, 2).map((req, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="line-clamp-1">{req}</span>
                      </li>
                    ))}
                    {scholarship.requirements.length > 2 && (
                      <li className="text-orange-500 text-xs">
                        +{scholarship.requirements.length - 2} điều kiện khác
                      </li>
                    )}
                  </ul>
                </div>

                {/* Stats */}
                <div className="flex justify-between items-center mb-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="w-4 h-4" />
                    <span>{scholarship.applied}/{scholarship.slots}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>{scholarship.deadline}</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-gray-600 mb-1">
                    <span>Tiến độ đăng ký</span>
                    <span>{Math.round((scholarship.applied / scholarship.slots) * 100)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${Math.min((scholarship.applied / scholarship.slots) * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button 
                    className="flex-1 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-medium"
                    onClick={() => handleApply(scholarship)}
                  >
                    Nộp hồ sơ
                  </Button>
                  <Button variant="outline" className="px-4 border-gray-200 hover:bg-gray-50 rounded-xl">
                    Chi tiết
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredScholarships.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Award className="w-16 h-16 mx-auto mb-4" />
              <p className="text-lg">Không tìm thấy học bổng phù hợp</p>
              <p className="text-sm">Hãy thử điều chỉnh bộ lọc hoặc từ khóa tìm kiếm</p>
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Bạn cần hỗ trợ tư vấn?</h2>
          <p className="text-lg mb-6 opacity-90">
            Đội ngũ tư vấn của chúng tôi sẵn sàng hỗ trợ bạn chọn lựa học bổng phù hợp nhất
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3 rounded-xl font-medium">
              Tư vấn trực tuyến
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-orange-500 px-8 py-3 rounded-xl font-medium">
              Tải brochure
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scholarships;