"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

import { useRouter } from "next/navigation";

const NewsDetail = () => {
  const navigate = useRouter();

  return (
    <>
      <div className="p-6 max-w-4xl mx-auto">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate.push('/news')}
          className="mb-6 text-gray-600 hover:text-gray-800"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Quay về trang chủ
        </Button>

        {/* Article Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-orange-600 mb-4">
            Trường Đại học FPT công bố kết quả học bổng giai đoạn 1 – Năm 2025
          </h1>
        </div>

        {/* Article Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Trường Đại học FPT vừa công bố 1.270 thí sinh đủ điều kiện 
                nhận học bổng và hỗ trợ tài chính trong giai đoạn 1 của năm 
                2025, thuộc chương trình học bổng thường niên nhằm vinh 
                danh thành tích học tập, phát triển tài năng và hỗ trợ học 
                sinh vào đại học.
              </p>

              <h3 className="text-lg font-semibold mb-4">Học bổng Nữ sinh STEM:</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>876 suất (20 triệu đồng/suất)</li>
                <li>Dành cho nữ sinh theo đuổi các ngành khoa học – công nghệ</li>
                <li>Thể hiện cam kết thúc đẩy bình đẳng giới trong lĩnh vực kỹ thuật</li>
              </ul>

              <h3 className="text-lg font-semibold mb-4">Học bổng Học đường:</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>324 suất (100% học phí toàn khóa)</li>
                <li>Dành cho học sinh THPT khu vực 1, thuộc top 10% theo SchoolRank</li>
                <li>Do Ban giám hiệu các trường THPT đề cử</li>
              </ul>

              <h3 className="text-lg font-semibold mb-4">Học bổng Chuyên gia toàn cầu:</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>48 thí sinh đủ điều kiện vào vòng phỏng vấn</li>
                <li>Học bổng toàn phần + 30 triệu đồng/năm sinh hoạt phí</li>
                <li>Cơ hội làm việc tại Mỹ, Nhật, Hàn, Đức hoặc Singapore sau tốt nghiệp</li>
              </ul>
            </div>
          </div>

          {/* Sidebar with Image */}
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              <img 
                src="/lovable-uploads/38695129-b0aa-43e0-b487-26770c51a5be.png"
                alt="Trường Đại học FPT công bố kết quả học bổng năm 2025"
                className="w-full rounded-lg shadow-lg mb-4"
              />
              <p className="text-sm text-gray-600 italic text-center">
                Trường Đại học FPT công bố kết quả 1.270 thí sinh đủ điều kiện học bổng trong giai đoạn 1 năm 2025.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsDetail;
