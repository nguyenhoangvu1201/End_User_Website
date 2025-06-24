"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight, Search, Filter, Star } from "lucide-react";

const News = () => {
  const navigate = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");

  const featuredNews = {
    id: 1,
    title: "Trường Đại học FPT công bố kết quả học bổng giai đoạn 1 - Năm 2025",
    summary: "Trường Đại học FPT vừa công bố danh sách sinh viên xuất sắc nhận học bổng giai đoạn 1 năm 2025 với tổng giá trị lên đến 2 tỷ đồng...",
    date: "11/06/2025",
    readTime: "5 phút đọc",
    category: "Học bổng",
    image: "/images/campus-quynhon.jpg",
    featured: true
  };
  
  const newsItems = [
    {
      id: 2,
      title: "Trường Đại học FPT ký kết hợp tác với Trung tâm Hỗ trợ Khởi nghiệp sáng tạo Quốc gia",
      summary: "Mở rộng cơ hội thực tiễn và học bổng cho sinh viên trong lĩnh vực khởi nghiệp công nghệ...",
      date: "10/06/2025",
      readTime: "3 phút đọc",
      category: "Hợp tác",
      image: "/images/campus-quynhon.jpg"
    },
    {
      id: 3,
      title: "5 nhóm sinh viên Trường Đại học FPT được nhận quỹ học bổng 100 triệu đồng",
      summary: "Các dự án xuất sắc trong lĩnh vực AI, IoT và Blockchain được vinh danh tại lễ trao giải...",
      date: "09/06/2025",
      readTime: "4 phút đọc",
      category: "Học bổng",
      image: "/images/campus-quynhon.jpg"
    },
    {
      id: 4,
      title: "Thí sinh FPT Hackathon 2025 giải bài toán về AI và logistics thông minh",
      summary: "Cuộc thi lập trình lớn nhất năm với sự tham gia của hơn 500 sinh viên từ khắp cả nước...",
      date: "08/06/2025",
      readTime: "6 phút đọc",
      category: "Sự kiện",
      image: "/images/campus-quynhon.jpg"
    },
    {
      id: 5,
      title: "Giáng viên Trường Đại học FPT giành giải cao nhất tại Hội nghị ACBSP khu vực 10",
      summary: "Nghiên cứu về ứng dụng AI trong giáo dục được đánh giá cao tại hội nghị quốc tế...",
      date: "07/06/2025",
      readTime: "4 phút đọc",
      category: "Giải thưởng",
      image: "/images/campus-quynhon.jpg"
    },
    {
      id: 6,
      title: "Cựu sinh viên Trường Đại học FPT khám phá tiềm năng AI trên nền tảng đám mây",
      summary: "Startup công nghệ do cựu sinh viên FPT thành lập nhận được đầu tư 50 tỷ đồng vòng Series A...",
      date: "06/06/2025",
      readTime: "5 phút đọc",
      category: "Thành công",
      image: "/images/campus-quynhon.jpg"
    }
  ];

  const categories = ["Tất cả", "Học bổng", "Sự kiện", "Hợp tác", "Giải thưởng", "Thành công"];

  const handleNewsClick = (newsItem: any) => {
    navigate.push(`/news/${newsItem.id}`);
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      "Học bổng": "bg-blue-100 text-blue-700",
      "Sự kiện": "bg-green-100 text-green-700",
      "Hợp tác": "bg-purple-100 text-purple-700",
      "Giải thưởng": "bg-yellow-100 text-yellow-700",
      "Thành công": "bg-red-100 text-red-700"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-700";
  };

  // Lọc tin nổi bật và tin thường theo search/category
  const isMatch = (item: any) => {
    const matchCategory = selectedCategory === "Tất cả" || item.category === selectedCategory;
    const matchSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  };

  const filteredFeatured = isMatch(featuredNews) ? featuredNews : null;
  const filteredNews = newsItems.filter(isMatch);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-4">Tin tức & Sự kiện</h1>
            <p className="text-xl text-orange-100 mb-8">
              Cập nhật những thông tin mới nhất từ Trường Đại học FPT - Nơi ươm mầm tương lai công nghệ
            </p>
            
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Tìm kiếm tin tức, sự kiện..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-300"
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                />
              </div>
              <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg transition-colors">
                <Filter className="h-5 w-5" />
                Bộ lọc
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-orange-600 text-white"
                    : "bg-white text-gray-600 hover:bg-orange-50 hover:text-orange-600"
                } border border-gray-200`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured News */}
        {filteredFeatured && (
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Star className="h-6 w-6 text-orange-600" />
              <h2 className="text-2xl font-bold text-gray-900">Tin nổi bật</h2>
            </div>
            
            <Card 
              className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border-l-4 border-l-orange-600"
              onClick={() => handleNewsClick(filteredFeatured)}
            >
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="aspect-video md:aspect-square overflow-hidden rounded-lg">
                    <img 
                      src={filteredFeatured.image} 
                      alt={filteredFeatured.title}
                      className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(filteredFeatured.category)}`}>
                      {filteredFeatured.category}
                    </span>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Calendar className="h-4 w-4" />
                      {filteredFeatured.date}
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Clock className="h-4 w-4" />
                      {filteredFeatured.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                    {filteredFeatured.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {filteredFeatured.summary}
                  </p>
                  
                  <button
                    className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:gap-3 transition-all"
                    onClick={e => {
                      e.stopPropagation();
                      handleNewsClick(filteredFeatured);
                    }}
                  >
                    Đọc tiếp
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Latest News Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Tin tức mới nhất</h2>
          
          {filteredNews.length === 0 ? (
            <div className="text-center text-gray-400 py-12">Không tìm thấy tin tức phù hợp.</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((item) => (
                <Card 
                  key={item.id} 
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  onClick={() => handleNewsClick(item)}
                >
                  <div className="aspect-video overflow-hidden rounded-lg">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                        {item.category}
                      </span>
                      <div className="flex items-center gap-1 text-gray-400 text-xs">
                        <Clock className="h-3 w-3" />
                        {item.readTime}
                      </div>
                    </div>
                    
                    <h3 className="font-bold text-gray-900 mb-3 line-clamp-2 leading-tight group-hover:text-orange-600 transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                      {item.summary}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <Calendar className="h-4 w-4" />
                        {item.date}
                      </div>
                      <ArrowRight className="h-4 w-4 text-orange-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Enhanced Pagination */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <div className="text-gray-600 mb-4 md:mb-0">
            Hiển thị 1-{filteredNews.length} trong tổng số {filteredNews.length} tin tức
          </div>
          
          <div className="flex items-center space-x-2">
            <button className="px-4 py-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors">
              ‹ Trước
            </button>
            <button className="px-4 py-2 bg-orange-600 text-white rounded-lg">1</button>
            <button className="px-4 py-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors">2</button>
            <button className="px-4 py-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors">3</button>
            <button className="px-4 py-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors">4</button>
            <button className="px-4 py-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors">
              Sau ›
            </button>
          </div>
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white mt-16">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Đăng ký nhận tin tức</h3>
            <p className="text-orange-100 mb-6">
              Nhận thông báo về các tin tức và sự kiện mới nhất từ Trường Đại học FPT
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
              <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
                Đăng ký
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;