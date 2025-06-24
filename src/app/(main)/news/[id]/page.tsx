"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, User, Share2, BookmarkPlus, Eye, MessageCircle, ThumbsUp, Facebook, Twitter, Linkedin, Copy, Tag } from "lucide-react";
import { useRouter, useParams } from "next/navigation";

const NewsDetail = () => {
  const navigate = useRouter();
  const params = useParams();
  const id = Number(params.id);

  // Sample related news data
  const relatedNews = [
    {
      id: 2,
      title: "5 nhóm sinh viên Trường Đại học FPT được nhận quỹ học bổng 100 triệu đồng",
      date: "09/06/2025",
      image: "/images/campus-quynhon.jpg"
    },
    {
      id: 3,
      title: "Thí sinh FPT Hackathon 2025 giải bài toán về AI và logistics thông minh",
      date: "08/06/2025",
      image: "/images/campus-quynhon.jpg"
    },
    {
      id: 4,
      title: "Giáng viên Trường Đại học FPT giành giải cao nhất tại Hội nghị ACBSP",
      date: "07/06/2025",
      image: "/images/campus-quynhon.jpg"
    }
  ];

  const handleShare = (platform: string) => {
    // Handle social sharing
    console.log(`Sharing to ${platform}`);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    // You could add a toast notification here
  };

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

  const allNews = [featuredNews, ...newsItems];
  const news = allNews.find(n => n.id === id);

  if (!news) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-orange-600 mb-4">Không tìm thấy bài viết</h1>
          <Button onClick={() => navigate.push('/news')} className="bg-orange-500 text-white">Quay về trang tin tức</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate.push('/news')}
            className="text-gray-600 hover:text-orange-600 hover:bg-orange-50"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Quay về Tin tức
          </Button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="bg-white rounded-xl shadow-sm overflow-hidden">
              {/* Article Header */}
              <div className="p-8 pb-6">
                {/* Category & Meta Info */}
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    <Tag className="inline h-3 w-3 mr-1" />
                    {news.category}
                  </span>
                  <div className="flex items-center gap-4 text-gray-500 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {news.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {news.readTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      Ban Truyền thông FPT
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      1,234 lượt xem
                    </div>
                  </div>
                </div>

                {/* Article Title */}
                <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  {news.title}
                </h1>

                {/* Article Summary */}
                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-8">
                  <p className="text-gray-700 font-medium leading-relaxed">
                    {news.summary}
                  </p>
                </div>

                {/* Social Actions */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b">
                  <div className="flex items-center gap-4">
                    <Button variant="outline" size="sm" className="text-gray-600 hover:text-red-600 hover:border-red-600">
                      <ThumbsUp className="h-4 w-4 mr-2" />
                      Thích (125)
                    </Button>
                    <Button variant="outline" size="sm" className="text-gray-600 hover:text-orange-600 hover:border-orange-600">
                      <BookmarkPlus className="h-4 w-4 mr-2" />
                      Lưu
                    </Button>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600 mr-2">Chia sẻ:</span>
                    <Button variant="ghost" size="sm" onClick={() => handleShare('facebook')} className="text-blue-600 hover:bg-blue-50">
                      <Facebook className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => handleShare('twitter')} className="text-sky-600 hover:bg-sky-50">
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => handleShare('linkedin')} className="text-blue-700 hover:bg-blue-50">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={handleCopyLink} className="text-gray-600 hover:bg-gray-50">
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Featured Image */}
              <div className="px-8 mb-8">
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src={news.image}
                    alt={news.title}
                    className="w-full h-80 object-cover rounded-lg"
                  />
                  <div className="bg-gray-100 px-4 py-2">
                    <p className="text-sm text-gray-600 italic text-center">
                      Lễ trao học bổng cho sinh viên xuất sắc tại Trường Đại học FPT năm 2025
                    </p>
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <div className="px-8 pb-8">
                <div className="prose max-w-none text-gray-700">
                  <p className="text-lg leading-relaxed mb-8 text-gray-800 font-medium">
                    {/* Placeholder for article content */}
                  </p>

                  {/* Scholarship Sections */}
                  <div className="space-y-8">
                    {/* STEM Scholarship */}
                    <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg p-6 border-l-4 border-pink-500">
                      <h3 className="text-2xl font-bold mb-4 text-pink-700 flex items-center">
                        <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">1</span>
                        Học bổng Nữ sinh STEM
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <ul className="space-y-3">
                            <li className="flex items-start">
                              <span className="bg-pink-500 text-white rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                              <span><strong>876 suất</strong> (20 triệu đồng/suất)</span>
                            </li>
                            <li className="flex items-start">
                              <span className="bg-pink-500 text-white rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                              <span>Dành cho nữ sinh theo đuổi các ngành khoa học – công nghệ</span>
                            </li>
                            <li className="flex items-start">
                              <span className="bg-pink-500 text-white rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                              <span>Thể hiện cam kết thúc đẩy bình đẳng giới trong lĩnh vực kỹ thuật</span>
                            </li>
                          </ul>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-pink-600">876</div>
                            <div className="text-sm text-gray-600">Suất học bổng</div>
                            <div className="text-xl font-semibold text-pink-600 mt-2">20 triệu đồng</div>
                            <div className="text-xs text-gray-500">Mỗi suất</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* School Scholarship */}
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 border-l-4 border-blue-500">
                      <h3 className="text-2xl font-bold mb-4 text-blue-700 flex items-center">
                        <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">2</span>
                        Học bổng Học đường
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <ul className="space-y-3">
                            <li className="flex items-start">
                              <span className="bg-blue-500 text-white rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                              <span><strong>324 suất</strong> (100% học phí toàn khóa)</span>
                            </li>
                            <li className="flex items-start">
                              <span className="bg-blue-500 text-white rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                              <span>Dành cho học sinh THPT khu vực 1, thuộc top 10% theo SchoolRank</span>
                            </li>
                            <li className="flex items-start">
                              <span className="bg-blue-500 text-white rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                              <span>Do Ban giám hiệu các trường THPT đề cử</span>
                            </li>
                          </ul>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-blue-600">324</div>
                            <div className="text-sm text-gray-600">Suất học bổng</div>
                            <div className="text-xl font-semibold text-blue-600 mt-2">100%</div>
                            <div className="text-xs text-gray-500">Học phí toàn khóa</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Global Expert Scholarship */}
                    <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-6 border-l-4 border-emerald-500">
                      <h3 className="text-2xl font-bold mb-4 text-emerald-700 flex items-center">
                        <span className="bg-emerald-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">3</span>
                        Học bổng Chuyên gia toàn cầu
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <ul className="space-y-3">
                            <li className="flex items-start">
                              <span className="bg-emerald-500 text-white rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                              <span><strong>48 thí sinh</strong> đủ điều kiện vào vòng phỏng vấn</span>
                            </li>
                            <li className="flex items-start">
                              <span className="bg-emerald-500 text-white rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                              <span>Học bổng toàn phần + 30 triệu đồng/năm sinh hoạt phí</span>
                            </li>
                            <li className="flex items-start">
                              <span className="bg-emerald-500 text-white rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                              <span>Cơ hội làm việc tại Mỹ, Nhật, Hàn, Đức hoặc Singapore sau tốt nghiệp</span>
                            </li>
                          </ul>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-emerald-600">48</div>
                            <div className="text-sm text-gray-600">Thí sinh đủ điều kiện</div>
                            <div className="text-xl font-semibold text-emerald-600 mt-2">Toàn phần</div>
                            <div className="text-xs text-gray-500">+ 30 triệu/năm</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg p-6 mt-8">
                    <h4 className="text-xl font-bold mb-3">Thông tin liên hệ</h4>
                    <p className="mb-4">
                      Để biết thêm chi tiết về các chương trình học bổng và quy trình đăng ký, 
                      thí sinh có thể liên hệ trực tiếp với Trường Đại học FPT.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button className="bg-white text-orange-600 hover:bg-orange-50">
                        Tư vấn học bổng
                      </Button>
                      <Button variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
                        Xem điều kiện chi tiết
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              {/* Author Info */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4">Tác giả</h3>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <User className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <div className="font-semibold">Ban Truyền thông FPT</div>
                      <div className="text-sm text-gray-500">Trường Đại học FPT</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Đơn vị chuyên cung cấp thông tin chính thức về các hoạt động, 
                    sự kiện và tin tức từ Trường Đại học FPT.
                  </p>
                </CardContent>
              </Card>

              {/* Related News */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4">Tin liên quan</h3>
                  <div className="space-y-4">
                    {relatedNews.map((news) => (
                      <div 
                        key={news.id} 
                        className="flex gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
                        onClick={() => navigate.push(`/news/${news.id}`)}
                      >
                        <img 
                          src={news.image} 
                          alt={news.title}
                          className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                        />
                        <div className="flex-1">
                          <h4 className="text-sm font-medium line-clamp-2 mb-1">{news.title}</h4>
                          <p className="text-xs text-gray-500">{news.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4">Thống kê nhanh</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Tổng học bổng:</span>
                      <span className="font-semibold">1,270 suất</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Tổng giá trị:</span>
                      <span className="font-semibold text-orange-600">~50 tỷ đồng</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Thời gian:</span>
                      <span className="font-semibold">Giai đoạn 1/2025</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;