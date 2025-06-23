"use client";


import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useParams, useRouter } from "next/navigation";


const ProgramDetail = () => {
  const param = useParams();
  const id = param.id;
  const navigate = useRouter();

  const programData = {
    "an-toan-thong-tin": {
      title: "Tại sao nên học ANTT ở FPT ?",
      subtitle: "Vai trò của Việt Nam trong ngành An toàn thông tin toàn cầu",
      description: "Việt Nam được xếp hạng thứ 7/78 quốc gia về Chỉ số Dịch vụ Toàn cầu (GSLI 2023), khẳng định vị thế trong lĩnh vực công nghệ thông tin, bao gồm An toàn thông tin. Dự kiến có hơn 50.000 người đang làm việc trong lĩnh vực này, con số này vẫn chưa đáp ứng đủ nhu cầu.",
      whyFpt: "Vì sao Trường Đại học FPT là sự lựa chọn phù hợp dành cho bạn?",
      whyFptDescription: "Chương trình đào tạo chuyên ngành An toàn thông tin tại Trường Đại học FPT được thiết kế để đáp ứng nhu cầu cao của thị trường, không định vị thế dần đầu trong lĩnh vực Cyber Security. Chương trình liên tục cập nhật xu hướng mới và kết nối chất với Tập đoàn FPT, đảm bảo kiến thức chuyên sâu cùng những trải nghiệm thực tế phong phú, sinh viên tự tin bước vào một trong những ngành nghề hấp dẫn và đầy tiềm năng hiện nay.",
      careerOpportunities: [
        {
          title: "Cơ hội nghề nghiệp An toàn thông tin",
          jobs: [
            "Chuyên viên phân tích bảo mật (Security Analyst)",
            "Chuyên gia bảo mật mạng (Network Security Specialist)",
            "Quản lý rủi ro an ninh mạng (Cybersecurity Risk Manager)",
            "Chuyên viên kiểm thử xâm nhập (Penetration Tester)",
            "Chuyên gia ứng phó sự cố (Incident Responder)",
            "Chuyên gia bảo mật đám mây (Cloud Security Specialist)",
            "Chuyên viên mã hóa (Cryptography Specialist)",
            "Chuyên viên bảo mật ứng dụng (Application Security Engineer)",
            "Chuyên gia bảo mật dữ liệu (Data Security Analyst)",
            "Chuyên viên kiểm toán bảo mật (Security Auditor)"
          ]
        },
        {
          title: "Tố chất để thành công trong lĩnh vực An toàn thông tin",
          qualities: [
            "Tư duy logic và giải quyết vấn đề",
            "Đam mê công nghệ",
            "Yêu thích công việc giải quyết vấn đề, phân tích, điều tra",
            "Tính thận trọng, nghiêm túc"
          ]
        }
      ],
      image: "/lovable-uploads/77745bbb-8a4b-4086-a9a3-2827ef4b8bc8.png"
    }
  };

  const currentProgram = programData[id as keyof typeof programData];

  if (!currentProgram) {
    return (
        <div className="p-6">
          <h1 className="text-2xl font-bold text-center">Không tìm thấy thông tin ngành học</h1>
        </div>
    );
  }

  return (

      <div className="p-6 max-w-6xl mx-auto">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate.back()}
          className="mb-6 text-gray-600 hover:text-gray-800"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Quay về trang chủ
        </Button>

        {/* Main Content */}
        <div className="space-y-6">
          {/* Title */}
          <h1 className="text-3xl font-bold text-orange-600">
            {currentProgram.title}
          </h1>

          {/* Content Card */}
          <Card className="overflow-hidden">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Image */}
                <div className="space-y-4">
                  <img
                    src={currentProgram.image}
                    alt="An toàn thông tin"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>

                {/* Right Column - Content */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">
                      {currentProgram.subtitle}
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      {currentProgram.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                      Vì sao <span className="text-orange-600">Trường Đại học FPT</span> là sự lựa chọn phù hợp dành cho bạn?
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {currentProgram.whyFptDescription}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Career Opportunities */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {currentProgram.careerOpportunities.map((section, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.jobs ? 
                      section.jobs.map((job, jobIndex) => (
                        <li key={jobIndex} className="text-sm text-gray-600 flex items-start">
                          <span className="text-orange-500 mr-2">•</span>
                          {job}
                        </li>
                      )) :
                      (section as any).qualities?.map((quality: string, qualityIndex: number) => (
                        <li key={qualityIndex} className="text-sm text-gray-600 flex items-start">
                          <span className="text-orange-500 mr-2">•</span>
                          {quality}
                        </li>
                      ))
                    }
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
  );
};

export default ProgramDetail;
