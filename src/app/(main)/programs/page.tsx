"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";

const Programs = () => {
  const navigate = useRouter();
  
  const programCategories = [
    {
      title: "Công nghệ thông tin",
      programs: [
        { name: "An toàn thông tin", icon: "🛡️", id: "an-toan-thong-tin" },
        { name: "Công nghệ ô tô số", icon: "🚗", id: "cong-nghe-oto-so" },
        { name: "Kỹ thuật phần mềm", icon: "💻", id: "ky-thuat-phan-mem" },
        { name: "Chuyển đổi số", icon: "🔄", id: "chuyen-doi-so" },
        { name: "Thiết kế mỹ thuật số", icon: "🎨", id: "thiet-ke-my-thuat-so" },
        { name: "Thiết kế vi mạch bán dẫn", icon: "🔧", id: "thiet-ke-vi-mach-ban-dan" },
        { name: "Trí tuệ nhân tạo", icon: "🤖", id: "tri-tue-nhan-tao" },
      ]
    },
    {
      title: "Quản trị kinh doanh",
      programs: [
        { name: "Công nghệ tài chính (Fintech)", icon: "💳", id: "cong-nghe-tai-chinh-fintech" },
        { name: "Digital Marketing", icon: "📈", id: "digital-marketing" },
        { name: "Kinh doanh quốc tế", icon: "🌍", id: "kinh-doanh-quoc-te" },
        { name: "Logistics & quản lý chuỗi cung ứng toàn cầu", icon: "📦", id: "logistics-quan-ly-chuoi-cung-ung-toan-cau" },
        { name: "Quản trị khách sạn", icon: "🏨", id: "quan-ly-khach-san" },
        { name: "Quản trị dịch vụ du lịch & lữ hành", icon: "✈️", id: "quan-ly-dich-vu-du-lich-lu-hanh" },
        { name: "Tài chính doanh nghiệp", icon: "💰", id: "tai-chinh-doanh-nghiep" },
        { name: "Ngân hàng số - Tài chính (Digital Banking and Finance)", icon: "🏦", id: "ngan-hang-so-tai-chinh-digital-banking-and-finance" },
        { name: "Tài chính đầu tư", icon: "📊", id: "tai-chinh-dau-tu" },
      ]
    },
    {
      title: "Công nghệ truyền thông",
      programs: [
        { name: "Quản hệ công chúng", icon: "📢", id: "quan-he-cong-chung" },
        { name: "Truyền thông đa phương tiện", icon: "📺", id: "truyen-thong-da-phuong-tien" },
      ]
    },
    {
      title: "Luật",
      programs: [
        { name: "Luật kinh tế", icon: "⚖️", id: "luat-kinh-te" },
        { name: "Luật thương mại quốc tế", icon: "🌐", id: "luat-thuong-mai-quoc-te" },
      ]
    },
    {
      title: "Ngôn ngữ Anh",
      programs: [
        { name: "Ngôn ngữ Anh", icon: "🇺🇸", id: "ngon-ngu-anh" },
      ]
    },
    {
      title: "Ngôn ngữ Nhật",
      programs: [
        { name: "Song ngữ Nhật - Anh", icon: "🇯🇵", id: "song-ngu-nhat-anh" },
      ]
    },
    {
      title: "Ngôn ngữ Trung Quốc",
      programs: [
        { name: "Song ngữ Trung - Anh", icon: "🇨🇳", id: "song-ngu-trung-anh" },
      ]
    },
    {
      title: "Ngôn ngữ Hàn Quốc",
      programs: [
        { name: "Song ngữ Hàn - Anh", icon: "🇰🇷", id: "song-ngu-han-anh" },
      ]
    }
  ];

  const handleProgramClick = (programId: string) => {
    if (programId === "an-toan-thong-tin") {
      navigate.push(`/programs/${programId}`);
    }
  };

  return (
    
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-orange-600 mb-2">Ngành học</h1>
          <p className="text-gray-600">
            Khám phá các chương trình đào tạo chất lượng cao tại Trường Đại học FPT
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {programCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="h-full">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-bold text-orange-600">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.programs.map((program, programIndex) => (
                    <div
                      key={programIndex}
                      onClick={() => handleProgramClick(program.id)}
                      className={`flex items-center p-3 bg-orange-50 rounded-lg transition-colors ${
                        program.id === "an-toan-thong-tin" 
                          ? "hover:bg-orange-100 cursor-pointer" 
                          : "cursor-default"
                      }`}
                    >
                      <span className="text-xl mr-3">{program.icon}</span>
                      <span className="text-sm font-medium text-gray-800">
                        {program.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    
  );
};

export default Programs;
