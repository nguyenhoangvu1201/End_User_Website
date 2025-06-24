"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { X, MapPin, Navigation, ExternalLink, Phone, Clock, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const About = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mapCampus, setMapCampus] = useState<any | null>(null);

  const campuses = [
    {
      title: "Campus Trường Đại học FPT tại Hà Nội",
      description: "Campus Trường Đại học FPT tại Hà Nội tọa lạc tại Thủ đô nghìn năm văn hiến. Với khuôn viên 30ha, sức chứa lên đến 10.000 sinh viên và hơn 5.000 chỗ ở nội trú, campus này được ví như một khu đô thị toàn năng thu nhỏ.",
      fullDescription: "Thiết kế không gian mở, xen kẽ với thiên nhiên xanh mát mang lại cảm giác thoáng đãng, tạo nên sự cân bằng giữa tự nhiên và con người, campus này hội đủ yếu tố trở thành nơi gần bờ, trường thành và phát triển cá nhân toàn diện của sinh viên trong giai đoạn thanh xuân rực rỡ.",
      image: "/images/campus-hanoi.jpg",
      mapButton: "Xem Map",
      color: "from-blue-500 to-cyan-500",
      stats: [
        { label: "Diện tích", value: "30ha", icon: "🏢" },
        { label: "Sinh viên", value: "10,000", icon: "👥" },
        { label: "Chỗ ở", value: "5,000", icon: "🏠" }
      ],
      address: "Khu công nghệ cao Hòa Lạc, Km29 Đại lộ Thăng Long, xã Thạch Hòa, huyện Thạch Thất, Hà Nội",
      locationDescription: "Thiết kế hình rồng nổi bật, nhiều không gian xanh và được trao giải kiến trúc quốc tế. Đây là campus đầu tiên và lớn nhất của FPT.",
      mapEmbed: "https://www.google.com/maps?q=FPT+University+H%C3%Bòa+L%E1%BA%A1c&output=embed",
      city: "Hà Nội",
      phone: "024 7300 1866",
      website: "hanoi.fpt.edu.vn",
      established: "2006"
    },
    {
      title: "Campus Trường Đại học FPT tại Đà Nẵng",
      description: "Campus Trường Đại học FPT tại Đà Nẵng tọa lạc trong lòng Khu đô thị FPT tại thành phố Đà Nẵng – nơi được mệnh danh 'thành phố đáng sống nhất Việt Nam'.",
      fullDescription: "Khuôn viên Trường Đại học FPT tại Đà Nẵng được xây dựng theo mô hình campus toàn năng với không gian mở, thiên nhiên xanh mát, trong lành mang đến cho sinh viên môi trường học tập, trải nghiệm hội hoá lý tưởng.",
      image: "/images/campus-hanoi.jpg",
      mapButton: "Xem Map",
      color: "from-orange-500 to-red-500",
      stats: [
        { label: "Không gian", value: "Mở", icon: "🌳" },
        { label: "Môi trường", value: "Xanh", icon: "🍃" },
        { label: "Tiện ích", value: "Đầy đủ", icon: "⭐" }
      ],
      address: "Khu đô thị công nghệ FPT City, phường Hòa Hải, quận Ngũ Hành Sơn, Đà Nẵng",
      locationDescription: "Xây trên diện tích gần 5.1 ha, công trình lấy cảm hứng từ \"sách xếp chồng\", có sân bóng và thư viện.",
      mapEmbed: "https://www.google.com/maps?q=FPT+University+Da+Nang&output=embed",
      city: "Đà Nẵng",
      phone: "0236 6506 088",
      website: "danang.fpt.edu.vn",
      established: "2009"
    },
    {
      title: "Campus Trường Đại học FPT tại TP. HCM",
      description: "Campus này tọa lạc tại thành phố mang tên Bác – thành phố trẻ, sôi động và hiện đại bậc nhất Việt Nam, bên trong Khu công nghệ cao.",
      fullDescription: "Nơi hội tụ các tập đoàn đa quốc gia, các trung tâm nghiên cứu khoa học công nghệ hiện đại, mang đến cho sinh viên cơ hội tiếp cận với môi trường công nghệ tiên tiến nhất.",
      image: "/images/campus-hanoi.jpg",
      mapButton: "Xem Map",
      color: "from-purple-500 to-pink-500",
      stats: [
        { label: "Vị trí", value: "KCN Cao", icon: "🏭" },
        { label: "Công nghệ", value: "Hiện đại", icon: "💻" },
        { label: "Cơ hội", value: "Cao", icon: "🚀" }
      ],
      address: "Lô E2a‑7, đường D1, Khu Công nghệ cao (Saigon Hi‑Tech Park), phường Long Thạnh Mỹ, TP. Thủ Đức",
      locationDescription: "Campus rộng ~22.500 m², kiến trúc xanh và độc đáo theo phong cách Võ Trọng Nghĩa, được ví như resort với sân trong, thư viện, phòng lab…",
      mapEmbed: "https://www.google.com/maps?q=FPT+University+HCM&output=embed",
      city: "TP. HCM",
      phone: "028 7300 1866",
      website: "hcm.fpt.edu.vn",
      established: "2010"
    },
    {
      title: "Campus Trường Đại học FPT tại Cần Thơ",
      description: "Campus Trường Đại học FPT tại Cần Thơ nằm tại trung tâm đồng bằng sông Cửu Long, là nơi hội tụ của sinh viên các tỉnh miền Tây.",
      fullDescription: "Với cơ sở vật chất hiện đại, không gian xanh mát, campus Cần Thơ mang đến môi trường học tập lý tưởng, gần gũi thiên nhiên và thuận tiện di chuyển cho sinh viên khu vực phía Nam.",
      image: "/images/campus-hanoi.jpg",
      mapButton: "Xem Map",
      color: "from-green-600 to-green-400",
      stats: [
        { label: "Diện tích", value: "20ha", icon: "🏢" },
        { label: "Sinh viên", value: "5,000", icon: "👥" },
        { label: "Khu vực", value: "Miền Tây", icon: "🌾" }
      ],
      address: "Số 600, đường Nguyễn Văn Cừ mở rộng, phường An Bình, quận Ninh Kiều, Cần Thơ",
      locationDescription: "Thiết kế do công ty kiến trúc Pháp đảm nhiệm, riêng biệt, tích hợp thư viện, phòng máy và khách sạn thực tập quản trị cho ngành du lịch.",
      mapEmbed: "https://www.google.com/maps?q=FPT+University+Can+Tho&output=embed",
      city: "Cần Thơ",
      phone: "0292 7300 866",
      website: "cantho.fpt.edu.vn",
      established: "2009"
    },
    {
      title: "Campus Trường Đại học FPT tại Quy Nhơn",
      description: "Campus Trường Đại học FPT tại Quy Nhơn tọa lạc tại thành phố biển miền Trung, nổi bật với không gian sáng tạo và công nghệ.",
      fullDescription: "Được đầu tư phát triển mạnh về AI và công nghệ mới, campus Quy Nhơn là điểm đến lý tưởng cho sinh viên yêu thích nghiên cứu, sáng tạo và trải nghiệm môi trường học tập quốc tế.",
      image: "/images/campus-hanoi.jpg",
      mapButton: "Xem Map",
      color: "from-blue-700 to-indigo-400",
      stats: [
        { label: "Chuyên ngành", value: "AI, Data", icon: "🤖" },
        { label: "Sinh viên", value: "2,000", icon: "👥" },
        { label: "Biển", value: "Gần biển", icon: "🌊" }
      ],
      address: "Khu đô thị mới An Phú Thịnh, Nhơn Bình & Nhơn Độn ‑ Quy Nhơn, Bình Định",
      locationDescription: "Mong xây dựng trung tâm AI lớn nhất Việt Nam, nằm ven đầm Thi Nai – hướng ra biển, bao gồm cả khu ở cho giảng viên.",
      mapEmbed: "https://www.google.com/maps?q=FPT+University+Quy+Nhon&output=embed",
      city: "Quy Nhơn",
      phone: "0256 7300 299",
      website: "quyinhon.fpt.edu.vn",
      established: "2017"
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      campuses.forEach((_, index) => {
        setTimeout(() => {
          setVisibleCards(prev => [...prev, index]);
        }, index * 200);
      });
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const handleMapClick = (campus: any) => {
    setMapCampus(campus);
  };

  const handleCloseMap = () => setMapCampus(null);

  const handleDirections = (address: string) => {
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`, '_blank');
  };

  const handleCallPhone = (phone: string) => {
    window.open(`tel:${phone}`, '_self');
  };

  const handleVisitWebsite = (website: string) => {
    window.open(`https://${website}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 p-6">
      {/* Hero Section */}
      <div className="relative mb-12 text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-3xl blur-3xl" />
        <div className="relative z-10 py-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-6 animate-fadeIn">
            Khám phá các Campus FPT
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-slideIn">
            Hệ thống campus hiện đại trải dài khắp Việt Nam, mang đến môi trường học tập tốt nhất cho sinh viên
          </p>
          <div className="flex justify-center mt-8 space-x-8 animate-fadeIn">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">5</div>
              <div className="text-gray-600">Campus</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">50,000+</div>
              <div className="text-gray-600">Sinh viên</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">15+</div>
              <div className="text-gray-600">Năm kinh nghiệm</div>
            </div>
          </div>
        </div>
      </div>

      {/* Campus Cards */}
      <div className="space-y-12 max-w-7xl mx-auto">
        {campuses.map((campus, index) => (
          <Card 
            key={index} 
            className={cn(
              "group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:scale-[1.02]",
              visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              "animate-slideIn"
            )}
            style={{ animationDelay: `${index * 200}ms` }}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Background Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-r ${campus.color} opacity-0 
              group-hover:opacity-5 transition-opacity duration-500`} />
            
            <CardContent className="p-0 relative">
              <div className={`flex ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} 
                flex-col gap-0 min-h-[500px]`}>
                
                {/* Content Section */}
                <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center relative">
                  {/* City Badge */}
                  <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-6
                    bg-gradient-to-r ${campus.color} text-white shadow-lg transform transition-transform duration-300
                    ${hoveredCard === index ? 'scale-110' : ''}`}>
                    <span className="mr-2">📍</span>
                    {campus.city}
                  </div>

                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    {campus.title}
                  </h2>
                  
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    {campus.description}
                  </p>
                  
                  <p className="text-gray-600 leading-relaxed mb-8">
                    {campus.fullDescription}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {campus.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="text-center p-4 bg-gray-50/80 rounded-xl hover:bg-gray-100/80 transition-colors duration-300">
                        <div className="text-2xl mb-2">{stat.icon}</div>
                        <div className="font-bold text-gray-900">{stat.value}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <button 
                      onClick={() => handleMapClick(campus)}
                      className={`flex-1 lg:flex-none px-8 py-4 bg-gradient-to-r ${campus.color} 
                        text-white rounded-xl font-semibold shadow-lg hover:shadow-xl 
                        transition-all duration-300 transform hover:scale-105 active:scale-95
                        flex items-center justify-center group`}
                    >
                      <span className="mr-2 group-hover:rotate-12 transition-transform duration-300">🗺️</span>
                      {campus.mapButton}
                    </button>
                    <button className="px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold
                      hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 transform hover:scale-105">
                      Tìm hiểu thêm
                    </button>
                  </div>
                </div>

                {/* Image Section */}
                <div className="flex-1 relative group/image">
                  <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent z-10 opacity-0 group-hover/image:opacity-100 transition-opacity duration-500" />
                  
                  <img 
                    src={campus.image} 
                    alt={campus.title}
                    className="w-full h-64 lg:h-full object-cover transition-transform duration-700 group-hover/image:scale-110"
                  />
                  
                  {/* Floating Info Card */}
                  <div className={`absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg
                    transform transition-all duration-500 z-20
                    ${hoveredCard === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                    <div className="text-sm font-semibold text-gray-900">Campus {index + 1}</div>
                    <div className="text-xs text-gray-600">Được thành lập 2009</div>
                  </div>

                  {/* Overlay Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60" />
                  
                  {/* Corner Badge */}
                  <div className="absolute bottom-6 left-6 z-20">
                    <div className={`px-4 py-2 bg-gradient-to-r ${campus.color} text-white rounded-lg shadow-lg
                      transform transition-all duration-300 ${hoveredCard === index ? 'scale-110' : ''}`}>
                      <div className="text-sm font-bold">Ranking #1</div>
                      <div className="text-xs opacity-90">IT University</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Bottom CTA Section */}
      <div className="mt-20 text-center">
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-12 text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">Sẵn sàng bắt đầu hành trình khám phá của bạn?</h3>
          <p className="text-xl opacity-90 mb-8">Khám phá cơ hội học tập tại các campus FPT trên toàn quốc</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-orange-600 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Đăng ký tham quan
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:scale-105">
              Tải brochure
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Modal Map */}
      {mapCampus && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-fadeIn">
            {/* Header Section */}
            <div className={`relative px-8 py-6 bg-gradient-to-r ${mapCampus.color} text-white`}>
              <button 
                onClick={handleCloseMap} 
                className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all duration-200 hover:scale-110"
              >
                <X size={20} />
              </button>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/20 rounded-xl">
                  <MapPin size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">{mapCampus.city}</h2>
                  <p className="text-white/90 font-medium">Campus FPT University</p>
                  <div className="flex items-center gap-4 mt-3 text-sm">
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>Thành lập {mapCampus.established}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Globe size={16} />
                      <span>{mapCampus.website}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row max-h-[calc(90vh-120px)]">
              {/* Info Panel */}
              <div className="lg:w-2/5 p-6 bg-gray-50 overflow-y-auto">
                <div className="space-y-6">
                  {/* Address */}
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <MapPin size={18} className="text-blue-600" />
                      Địa chỉ
                    </h4>
                    <p className="text-gray-700 leading-relaxed">{mapCampus.address}</p>
                  </div>

                  {/* Description */}
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Mô tả</h4>
                    <p className="text-gray-700 leading-relaxed text-sm">{mapCampus.locationDescription}</p>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-3">
                    <h4 className="font-bold text-gray-900 flex items-center gap-2">
                      <Phone size={18} className="text-green-600" />
                      Thông tin liên hệ
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                        <span className="text-gray-600">Điện thoại:</span>
                        <button 
                          onClick={() => handleCallPhone(mapCampus.phone)}
                          className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                        >
                          {mapCampus.phone}
                        </button>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                        <span className="text-gray-600">Website:</span>
                        <button 
                          onClick={() => handleVisitWebsite(mapCampus.website)}
                          className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center gap-1"
                        >
                          {mapCampus.website}
                          <ExternalLink size={14} />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3 pt-4 border-t">
                    <button 
                      onClick={() => handleDirections(mapCampus.address)}
                      className={`w-full px-6 py-4 bg-gradient-to-r ${mapCampus.color} text-white rounded-xl font-semibold 
                        shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] 
                        flex items-center justify-center gap-3`}
                    >
                      <Navigation size={20} />
                      Chỉ đường đến đây
                    </button>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <button className="px-4 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold
                        hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2">
                        <Phone size={16} />
                        Gọi ngay
                      </button>
                      <button className="px-4 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold
                        hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2">
                        <Globe size={16} />
                        Website
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Section */}
              <div className="lg:w-3/5 relative">
                <div className="h-64 lg:h-full rounded-br-3xl overflow-hidden">
                  <iframe
                    src={mapCampus.mapEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '400px' }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Bản đồ ${mapCampus.city}`}
                    className="w-full h-full"
                  />
                </div>
                
                {/* Map Overlay Info */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg max-w-64">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${mapCampus.color}`}>
                      <MapPin size={16} className="text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm">{mapCampus.city}</div>
                      <div className="text-xs text-gray-600">FPT University Campus</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;