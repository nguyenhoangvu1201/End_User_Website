"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Scholarships = () => {

  const router = useRouter();

  const scholarships = [
    {
      title: "Học bổng Chuyên gia Toàn cầu",
      description: "Đạt giải Nhất/Nhì/Ba kỳ thi HSG quốc gia. Đăng ký ngành Công nghệ Thông tin. Phỏng vấn cùng giảng viên ĐH FPT quốc tế",
      badge: "Còn 100 suất"
    },
    {
      title: "Học bổng học đường",
      description: "Điều kiện:\n• Mỗi trường THPT khu vực 1 có 1 suất\n• Xếp hạng SchoolRank thuộc Top50\n• Được Ban Giám hiệu trường THPT đề cử",
      badge: "Còn 100 suất"
    },
    {
      title: "Học bổng học đường",
      description: "Thí sinh đạt một trong các điều kiện sau:\n• Thi Olympic quốc tế hoặc thi HSG quốc gia (theo quy định của Bộ GD&ĐT)\n• Nhận giải Khuyến khích kỳ thi HSG quốc gia - và đã trúng tuyển vào ĐH FPT theo quy định của Bộ GD&ĐT hoặc theo phương thức học ba\n• Đạt điểm ≥ 29.5/30 khi sử dụng kết quả thi tốt nghiệp THPT năm 2025 (Toán + 2 môn bất kỳ)\n• Đạt điểm trong bài thi ≥ 30.0 điểm từ kỳ thi đánh giá năng lực năm 2025 (Toán + 2 môn bất kỳ)",
      badge: "Còn 100 suất"
    },
    {
      title: "Học bổng Chuyên gia Toàn cầu",
      description: "Điều kiện (đạt 1 trong các điều kiện sau):\n• Đạt điểm ≥ 28.5/30 và bài thi đánh giá năng lực năm 2025 của DHQG HN/TP.HCM\n• Đạt điểm trung bình tốp 3 học kỳ tốt nghiệp THPT năm 2025 (Toán + 2 môn bất kỳ) ≥ 85% khi áp dụng đánh giá năng lực",
      badge: "Còn 100 suất"
    },
    {
      title: "Học bổng học đường",
      description: "Điều kiện (đạt 1 trong các điều kiện sau):\n• Đạt giải HSG cấp tỉnh\n• Đạt điểm ≥ 28.0/30 và bài thi đánh giá năng lực năm 2025 của DHQG HN/TP.HCM\n• Đạt điểm trung bình tốp 3 học kỳ tốt nghiệp THPT năm 2025 (Toán + 2 môn bất kỳ) ≥ 80%",
      badge: "Còn 100 suất"
    },
    {
      title: "Học bổng học đường",
      description: "Dành cho các thí sinh nữ đăng ký học các chuyên ngành thuộc nhóm ngành Công nghệ thông tin.",
      badge: "Còn 100 suất"
    }
  ];

  return (
    
      <div className="p-6 bg-gray-50 min-h-screen">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-orange-500 mb-4">Học bổng</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {scholarships.map((scholarship, index) => (
            <div key={index} className="relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                <Badge className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-full text-sm font-medium">
                  {scholarship.badge}
                </Badge>
              </div>
              
              <Card className="bg-gradient-to-br from-orange-400 to-orange-500 text-white border-none shadow-lg rounded-2xl overflow-hidden h-full">
                <CardHeader className="pb-4 pt-8">
                  <CardTitle className="text-xl font-bold text-white leading-tight">
                    {scholarship.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="flex flex-col h-full">
                  <div className="flex-1 mb-6">
                    <div className="text-white text-sm leading-relaxed whitespace-pre-line">
                      {scholarship.description}
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => router.push('/scholarships/apply')}
                    className="w-full bg-white text-orange-500 hover:bg-gray-50 font-semibold py-3 rounded-full border-none shadow-md transition-all hover:shadow-lg"
                  >
                    Nộp hồ sơ
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    
  );
};

export default Scholarships;