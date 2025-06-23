"use client";

import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";


const News = () => {
  const navigate = useRouter();
  
  const newsItems = [
    {
      id: 1,
      title: "Trường Đại học FPT công bố kết quả học bổng giai đoạn 1 - Năm 2025",
      date: "11/06/2025",
      image: "/lovable-uploads/38695129-b0aa-43e0-b487-26770c51a5be.png"
    },
    {
      id: 2,
      title: "Trường Đại học FPT ký kết hợp tác với Trung tâm Hỗ trợ Khởi nghiệp sáng tạo Quốc gia, mở rộng cơ hội thực tiễn và học bổng cho sinh viên",
      date: "11/06/2025",
      image: "/lovable-uploads/38695129-b0aa-43e0-b487-26770c51a5be.png"
    },
    {
      id: 3,
      title: "5 nhóm sinh viên Trường Đại học FPT được nhận quỹ học bổng 100 triệu đồng",
      date: "11/06/2025",
      image: "/lovable-uploads/38695129-b0aa-43e0-b487-26770c51a5be.png"
    },
    {
      id: 4,
      title: "Thí sinh FPT Hackathon 2025 giải bài toán về AI và logistics thông minh",
      date: "11/06/2025",
      image: "/lovable-uploads/38695129-b0aa-43e0-b487-26770c51a5be.png"
    },
    {
      id: 5,
      title: "Giáng viên Trường Đại học FPT giành giải cao nhất tại Hội nghị ACBSP khu vực 10 năm 2025",
      date: "11/06/2025",
      image: "/lovable-uploads/38695129-b0aa-43e0-b487-26770c51a5be.png"
    },
    {
      id: 6,
      title: "Cựu sinh viên Trường Đại học FPT khám phá tiềm năng AI trên điển toàn đám mây",
      date: "11/06/2025",
      image: "/lovable-uploads/38695129-b0aa-43e0-b487-26770c51a5be.png"
    }
  ];

  const handleNewsClick = (newsItem: typeof newsItems[0]) => {
    navigate.push(`/news/${newsItem.id}`);
  };

  return (
    
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-orange-600 mb-2">Tin tức và sự kiện</h1>
          <p className="text-gray-600">
            Cập nhật những tin tức mới nhất từ Trường Đại học FPT
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <Card 
              key={item.id} 
              className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handleNewsClick(item)}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">{item.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 space-x-2">
          <button className="px-3 py-2 text-gray-600 hover:text-orange-600">‹</button>
          <button className="px-3 py-2 bg-orange-600 text-white rounded">1</button>
          <button className="px-3 py-2 text-gray-600 hover:text-orange-600">2</button>
          <button className="px-3 py-2 text-gray-600 hover:text-orange-600">3</button>
          <button className="px-3 py-2 text-gray-600 hover:text-orange-600">4</button>
          <button className="px-3 py-2 text-gray-600 hover:text-orange-600">›</button>
        </div>
      </div>
    
  );
};

export default News;
