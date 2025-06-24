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

const Profile = () => {
  const [activeTab, setActiveTab] = useState("info");

  const profileData = {
    name: "Nguyễn Văn An",
    email: "nguyenvanan@fpt.edu.vn",
    phone: "0967964875",
    birthday: "03/08/2001",
    address: "Hà Nội, Việt Nam",
    gender: "Nam",
    studentId: "SE161234",
    major: "Software Engineering",
    year: "Năm 3",
    gpa: "8.5",
    credits: "120/140",
    memberSince: "2022",
    status: "Đang học"
  };

  const achievements = [
    { title: "Học bổng xuất sắc", date: "2024", icon: Award, color: "text-yellow-600" },
    { title: "Giải nhất Hackathon", date: "2024", icon: Star, color: "text-blue-600" },
    { title: "Thành viên CLB AI", date: "2023", icon: BookOpen, color: "text-green-600" },
    { title: "Tình nguyện viên", date: "2023", icon: Activity, color: "text-purple-600" }
  ];

  const recentActivities = [
    { action: "Đăng ký môn học", detail: "Software Testing", time: "2 giờ trước", icon: BookOpen },
    { action: "Nộp bài tập", detail: "Database Assignment", time: "1 ngày trước", icon: Clock },
    { action: "Tham gia sự kiện", detail: "FPT TechTalk", time: "3 ngày trước", icon: Activity },
    { action: "Cập nhật thông tin", detail: "Thông tin liên hệ", time: "1 tuần trước", icon: Edit3 }
  ];

  const tabs = [
    { id: "info", label: "Thông tin cá nhân", icon: User },
    { id: "academic", label: "Học tập", icon: BookOpen },
    { id: "achievements", label: "Thành tích", icon: Award },
    { id: "activity", label: "Hoạt động", icon: Activity },
    { id: "settings", label: "Cài đặt", icon: Settings }
  ];

  return (
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
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                  {profileData.studentId}
                </span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                  {profileData.major}
                </span>
                <span className="bg-green-500 px-3 py-1 rounded-full text-sm font-medium">
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
                  Thành viên từ {profileData.memberSince}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex gap-3">
              <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
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
                      { label: "Mã sinh viên", value: profileData.studentId, icon: Shield },
                      { label: "Email", value: profileData.email, icon: Mail },
                      { label: "Số điện thoại", value: profileData.phone, icon: Phone },
                      { label: "Ngày sinh", value: profileData.birthday, icon: Calendar },
                      { label: "Địa chỉ", value: profileData.address, icon: MapPin },
                      { label: "Giới tính", value: profileData.gender, icon: User },
                      { label: "Chuyên ngành", value: profileData.major, icon: BookOpen }
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
                        { label: "Năm học", value: profileData.year, color: "text-blue-600" },
                        { label: "GPA", value: profileData.gpa, color: "text-green-600" },
                        { label: "Tín chỉ", value: profileData.credits, color: "text-purple-600" },
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
                    <h3 className="font-semibold">Môn học hiện tại</h3>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {["Software Testing", "Database Management", "Web Development", "Mobile App Development"].map((course, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <span className="font-medium">{course}</span>
                          <span className="text-sm text-gray-600">Học kỳ Fall 2024</span>
                        </div>
                      ))}
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
                    <span className="text-sm text-gray-600">Điểm trung bình</span>
                    <span className="font-bold text-green-600">{profileData.gpa}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Tín chỉ tích lũy</span>
                    <span className="font-bold text-blue-600">{profileData.credits}</span>
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
                <Button className="w-full bg-orange-600 hover:bg-orange-700">
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
  );
};

export default Profile;