export interface Campus {
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  mapButton: string;
  color: string;
  stats: { label: string; value: string; icon: string }[];
  address: string;
  locationDescription: string;
  mapEmbed: string;
  city: string;
  phone: string;
  website: string;
  established: string;
}

export const campusesData: Campus[] = [
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
    mapEmbed: "https://www.google.com/maps?q=FPT+University+H%C3%B2a+L%E1%BA%A1c&output=embed",
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
    locationDescription: "Xây trên diện tích gần 5.1 ha, công trình lấy cảm hứng từ 'sách xếp chồng', có sân bóng và thư viện.",
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