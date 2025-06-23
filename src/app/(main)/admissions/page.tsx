
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Admissions = () => {
  const admissionMethods = [
    {
      title: "Xét kết quả học tập cấp THPT (Học ba)",
      description: "Đạt Top50 SchoolRank học ba THPT năm 2025, thực hiện trên trang schoolrank.fpt.edu.vn, dùng điểm lớp 11 và học kỳ 1 lớp 12, và điểm kỳ 2 năm lớp 12 của 6 học trình [Toán + 2 môn bất kỳ] ≥ 21 điểm (*).",
      image: "/lovable-uploads/a1169966-9b8e-47ab-84bd-8651c3ca636b.png",
      color: "bg-orange-100"
    },
    {
      title: "Sử dụng kết quả thi đánh giá năng lực của DHQG Hà Nội và DHQG TPHCM năm 2025",
      description: "Ngưỡng đầu vào: Đạt Top50 trong các kỳ thi này. Với kỳ thi đánh giá năng lực của DHQG Hà Nội: 78 điểm; Với kỳ thi đánh giá năng lực của DHQG TPHCM: 653 điểm (từ 13/6/2025) Ngưỡng đầu vào các đợt tiếp theo sẽ được thông báo khi có kết quả.",
      image: "/lovable-uploads/a1169966-9b8e-47ab-84bd-8651c3ca636b.png",
      color: "bg-blue-100"
    },
    {
      title: "Xét kết quả thi tốt nghiệp THPT",
      description: "Dùng tổ hợp [Toán + 2 môn bất kỳ + Điểm ưu tiên theo quy định của Bộ GD&ĐT] (*).",
      image: "/lovable-uploads/a1169966-9b8e-47ab-84bd-8651c3ca636b.png",
      color: "bg-green-100"
    },
    {
      title: "Phương thức tuyển sinh khác",
      description: "Xét tuyển theo tiêu chí riêng của Trường Đại Học FPT",
      image: "/lovable-uploads/a1169966-9b8e-47ab-84bd-8651c3ca636b.png",
      color: "bg-purple-100"
    }
  ];

  return (
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-orange-600 mb-2">Phương thức tuyển sinh</h1>
          <p className="text-gray-600 mb-4">
            Năm 2025, ngành xét tuyển thẳng theo quy định của Bộ Giáo dục và Đào tạo, Trường Đại học FPT áp dụng 4 phương thức sau:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {admissionMethods.map((method, index) => (
            <Card key={index} className={`${method.color} border-0 shadow-lg`}>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-800">
                  {method.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  {method.description}
                </p>
                <div className="flex justify-end">
                  <img 
                    src={method.image} 
                    alt="Student" 
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
          <h3 className="font-bold text-gray-800 mb-2">Ghi chú:</h3>
          <p className="text-gray-700">
            (*) Điểm ưu tiên được cộng theo quy định của Bộ Giáo dục và Đào tạo hiện hành.
          </p>
        </div>
      </div>
  );
};

export default Admissions;
