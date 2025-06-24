'use client'
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Edit3, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  User, 
  Shield, 
  Settings, 
  Bell,
  Eye,
  Lock,
  Camera,
  Award,
  Activity,
  BookOpen,
  Star,
  Clock,
  Download
} from "lucide-react";
import { useState } from "react";
import { EditProfileModal } from "@/components/ui/EditProfileModal";
import { Toaster } from "@/components/ui/sonner";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("info");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [profileData, setProfileData] = useState({
    name: "Nguyễn Hoàng Vũ",
    email: "nguyenhoangvu1201@gmail.com",
    phone: "0912345678",
    birthday: "12/01/2007",
    address: "Quận Cầu Giấy, Hà Nội",
    gender: "Nam",
    school: "THPT Chuyên Khoa học Tự nhiên",
    class: "12 Tin",
    interestedMajor: "Khoa học Máy tính, Trí tuệ Nhân tạo",
    avgScore: "9.2",
    status: "Đang là học sinh lớp 12"
  });

  const handleSaveProfile = (newProfileData: any) => {
    setProfileData(newProfileData);
  };

  const achievements = [
    { title: "Giải Nhì HSG Toán TP", date: "2023", icon: Award, color: "text-yellow-600" },
    { title: "Thành viên CLB Robotics", date: "2022-2024", icon: Star, color: "text-blue-600" },
    { title: "Tình nguyện viên Mùa hè xanh", date: "2023", icon: Activity, color: "text-green-600" },
    { title: "Giải Ba Olympic Tin học", date: "2022", icon: BookOpen, color: "text-purple-600" }
  ];

  const recentActivities = [
    { action: "Làm bài test định hướng", detail: "Kết quả: Nhóm ngành Công nghệ thông tin", time: "2 ngày trước", icon: BookOpen },
    { action: "Tham gia hội thảo nghề nghiệp", detail: "Talkshow Định hướng tương lai 2024", time: "1 tuần trước", icon: Activity },
    { action: "Cập nhật thông tin cá nhân", detail: "Thêm ngành quan tâm: Kinh doanh quốc tế", time: "2 tuần trước", icon: Edit3 },
    { action: "Tham gia CLB Robotics", detail: "CLB trường THPT Chuyên HN-Ams", time: "1 tháng trước", icon: Star }
  ];

  const tabs = [
    { id: "info", label: "Thông tin cá nhân", icon: User },
    { id: "academic", label: "Học tập & Định hướng", icon: BookOpen },
    { id: "achievements", label: "Thành tích", icon: Award },
    { id: "activity", label: "Hoạt động", icon: Activity },
    { id: "settings", label: "Cài đặt", icon: Settings }
  ];

  const [favoriteSubjects, setFavoriteSubjects] = useState(["Toán", "Lý", "Tin", "Văn", "Ngoại Ngữ"]);
  const [adding, setAdding] = useState(false);
  const [newSubject, setNewSubject] = useState("");

  return (
    <>
      <Toaster richColors position="top-right" />
      <EditProfileModal 
        isOpen={isEditModalOpen} 
        onOpenChange={setIsEditModalOpen}
        profileData={profileData}
        onSave={handleSaveProfile}
      />
      <div className="min-h-screen bg-gray-50">
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
          <div className="max-w-6xl mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Avatar Section */}
              <div className="relative">
                <Avatar className="h-32 w-32 border-4 border-white shadow-lg">
                  <AvatarImage src="/lovable-uploads/5cc70e68-3aa0-4b76-83f6-267c1abc2296.png" />
                  <AvatarFallback className="text-2xl font-bold">NVA</AvatarFallback>
                </Avatar>
                <Button 
                  size="sm" 
                  className="absolute bottom-0 right-0 rounded-full h-10 w-10 bg-white text-orange-600 hover:bg-orange-50 shadow-lg"
                >
                  <Camera className="h-4 w-4" />
                </Button>
              </div>

              {/* Profile Info */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold mb-2">{profileData.name}</h1>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                    {profileData.school}
                  </span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                    {profileData.class}
                  </span>
                  <span className="flex items-center gap-1 bg-green-500 px-3 py-1 rounded-full text-sm font-semibold text-white whitespace-nowrap shadow-md ml-0 md:ml-2">
                    <Clock className="w-4 h-4 mr-1" />
                    {profileData.status}
                  </span>
                </div>
                <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-orange-100">
                  <div className="flex items-center gap-1">
                    <Mail className="h-4 w-4" />
                    {profileData.email}
                  </div>
                  <div className="flex items-center gap-1">
                    <Phone className="h-4 w-4" />
                    {profileData.phone}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Ngày sinh {profileData.birthday}
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                  onClick={() => setIsEditModalOpen(true)}
                >
                  <Edit3 className="h-4 w-4 mr-2" />
                  Chỉnh sửa
                </Button>
                <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  <Settings className="h-4 w-4 mr-2" />
                  Cài đặt
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-8">
          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 bg-white rounded-lg p-2 shadow-sm">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "ghost"}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 ${
                  activeTab === tab.id 
                    ? "bg-orange-600 text-white" 
                    : "text-gray-600 hover:text-orange-600"
                }`}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {activeTab === "info" && (
                <Card>
                  <CardHeader>
                    <h2 className="text-xl font-bold flex items-center gap-2">
                      <User className="h-5 w-5 text-orange-600" />
                      Thông tin cá nhân
                    </h2>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        { label: "Họ và tên", value: profileData.name, icon: User },
                        { label: "Trường THPT", value: profileData.school, icon: User },
                        { label: "Lớp", value: profileData.class, icon: User },
                        { label: "Email", value: profileData.email, icon: Mail },
                        { label: "Số điện thoại", value: profileData.phone, icon: Phone },
                        { label: "Ngày sinh", value: profileData.birthday, icon: Calendar },
                        { label: "Địa chỉ", value: profileData.address, icon: MapPin },
                        { label: "Giới tính", value: profileData.gender, icon: User },
                        { label: "Ngành quan tâm", value: profileData.interestedMajor, icon: BookOpen }
                      ].map((field, index) => (
                        <div key={index} className="space-y-2">
                          <label className="text-sm font-medium text-gray-600 flex items-center gap-2">
                            <field.icon className="h-4 w-4" />
                            {field.label}
                          </label>
                          <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                            <span className="text-gray-900">{field.value}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {activeTab === "academic" && (
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <h2 className="text-xl font-bold flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-orange-600" />
                        Thông tin học tập
                      </h2>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                          { label: "Điểm TB các năm", value: profileData.avgScore, color: "text-green-600" },
                          { label: "Trạng thái", value: profileData.status, color: "text-orange-600" }
                        ].map((stat, index) => (
                          <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                            <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                            <div className="text-sm text-gray-600">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <h3 className="font-semibold">Môn học yêu thích</h3>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 items-center">
                        {favoriteSubjects.map((subject, idx) => (
                          <button
                            key={subject}
                            className="flex items-center border border-orange-300 bg-white text-orange-700 px-3 py-1 rounded-full text-sm font-medium gap-2 hover:bg-orange-50 transition group shadow-sm"
                            style={{paddingRight: 0}}
                          >
                            <span>{subject}</span>
                            <span
                              className="ml-1 p-1 rounded-full hover:bg-orange-100 text-orange-600 cursor-pointer group-hover:bg-orange-100"
                              onClick={e => { 
                                e.stopPropagation(); 
                                setFavoriteSubjects(favoriteSubjects.filter((s) => s !== subject)); 
                              }}
                              title="Xóa môn này"
                            >
                              <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                            </span>
                          </button>
                        ))}
                        {adding ? (
                          <form
                            onSubmit={e => {
                              e.preventDefault();
                              if (newSubject.trim() && !favoriteSubjects.includes(newSubject.trim())) {
                                setFavoriteSubjects([...favoriteSubjects, newSubject.trim()]);
                              }
                              setNewSubject("");
                              setAdding(false);
                            }}
                            className="flex items-center gap-1"
                          >
                            <input
                              autoFocus
                              className="border border-orange-300 rounded-full px-2 py-1 text-sm outline-none focus:border-orange-500"
                              value={newSubject}
                              onChange={e => setNewSubject(e.target.value)}
                              placeholder="Thêm môn..."
                              maxLength={20}
                            />
                            <button type="submit" className="p-1 rounded-full bg-green-100 hover:bg-green-200 text-green-600 border border-green-200" title="Lưu">
                              <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                            </button>
                            <button type="button" className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 border border-gray-200" onClick={() => {setAdding(false); setNewSubject("");}} title="Hủy">
                              <svg width="14" height="14" fill="none" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                            </button>
                          </form>
                        ) : (
                          <button
                            className="ml-2 p-1 rounded-full bg-orange-100 hover:bg-orange-200 text-orange-600 border border-orange-200 flex items-center justify-center"
                            onClick={() => setAdding(true)}
                            title="Thêm môn học"
                          >
                            <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M12 5v14m7-7H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                          </button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {activeTab === "achievements" && (
                <Card>
                  <CardHeader>
                    <h2 className="text-xl font-bold flex items-center gap-2">
                      <Award className="h-5 w-5 text-orange-600" />
                      Thành tích & Giải thưởng
                    </h2>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      {achievements.map((achievement, index) => (
                        <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                          <div className={`p-2 rounded-full bg-white ${achievement.color}`}>
                            <achievement.icon className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold">{achievement.title}</h4>
                            <p className="text-sm text-gray-600">{achievement.date}</p>
                          </div>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            Tải xuống
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {activeTab === "activity" && (
                <Card>
                  <CardHeader>
                    <h2 className="text-xl font-bold flex items-center gap-2">
                      <Activity className="h-5 w-5 text-orange-600" />
                      Hoạt động gần đây
                    </h2>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivities.map((activity, index) => (
                        <div key={index} className="flex items-start gap-4 pb-4 border-b border-gray-100 last:border-b-0">
                          <div className="p-2 bg-orange-100 rounded-full">
                            <activity.icon className="h-4 w-4 text-orange-600" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium">{activity.action}</h4>
                            <p className="text-sm text-gray-600">{activity.detail}</p>
                            <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {activeTab === "settings" && (
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <h2 className="text-xl font-bold flex items-center gap-2">
                        <Settings className="h-5 w-5 text-orange-600" />
                        Cài đặt tài khoản
                      </h2>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {[
                        { title: "Quyền riêng tư", desc: "Quản lý ai có thể xem thông tin của bạn", icon: Eye },
                        { title: "Bảo mật", desc: "Cập nhật mật khẩu và cài đặt bảo mật", icon: Lock },
                        { title: "Thông báo", desc: "Cài đặt thông báo email và push", icon: Bell },
                        { title: "Tài khoản", desc: "Quản lý thông tin tài khoản", icon: User }
                      ].map((setting, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <setting.icon className="h-5 w-5 text-gray-600" />
                            <div>
                              <h4 className="font-medium">{setting.title}</h4>
                              <p className="text-sm text-gray-600">{setting.desc}</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            Cài đặt
                          </Button>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Stats */}
              <Card>
                <CardHeader>
                  <h3 className="font-semibold">Thống kê nhanh</h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Điểm TB</span>
                      <span className="font-bold text-green-600">{profileData.avgScore}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Thành tích</span>
                      <span className="font-bold text-purple-600">{achievements.length}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <h3 className="font-semibold">Thao tác nhanh</h3>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button 
                    className="w-full bg-orange-600 hover:bg-orange-700"
                    onClick={() => setIsEditModalOpen(true)}
                  >
                    <Edit3 className="h-4 w-4 mr-2" />
                    Chỉnh sửa thông tin
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Tải transcript
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Lock className="h-4 w-4 mr-2" />
                    Đổi mật khẩu
                  </Button>
                </CardContent>
              </Card>

              {/* Recent Achievements */}
              <Card>
                <CardHeader>
                  <h3 className="font-semibold">Thành tích gần đây</h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {achievements.slice(0, 2).map((achievement, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className={`p-1 rounded-full ${achievement.color}`}>
                          <achievement.icon className="h-4 w-4" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-medium">{achievement.title}</h4>
                          <p className="text-xs text-gray-600">{achievement.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;