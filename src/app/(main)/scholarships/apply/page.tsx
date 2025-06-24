"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Award, Calendar, Users, User, Mail, Phone, MapPin, University, BookOpen } from "lucide-react";

interface Scholarship {
  id: number;
  title: string;
  category: string;
  value: string;
  description: string;
  requirements: string[];
  benefits: string[];
  deadline: string;
  slots: number;
  applied: number;
  status: string;
}

const ScholarshipApplication = () => {
  const router = useRouter();
  const [selectedScholarship, setSelectedScholarship] = useState<Scholarship | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    school: "",
    major: "",
    scholarshipType: ""
  });

  useEffect(() => {
    const scholarshipData = localStorage.getItem('selectedScholarship');
    if (scholarshipData) {
      const scholarship = JSON.parse(scholarshipData);
      setSelectedScholarship(scholarship);
      setFormData(prev => ({
        ...prev,
        scholarshipType: scholarship.title
      }));
    } else {
      // Nếu không có học bổng nào được chọn, có thể redirect về trang trước
      router.push('/scholarships');
    }
  }, [router]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Scholarship application submitted:", formData);
    //
    // Logic submit API ở đây
    // Sau khi submit thành công, có thể chuyển đến trang success
    alert("Nộp hồ sơ thành công!");
    router.push('/');
  };

  if (!selectedScholarship) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 flex items-center justify-center">
        <p>Đang tải thông tin học bổng...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-lg shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="bg-orange-500 rounded-xl p-3">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-orange-500 font-bold text-lg">F</span>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-orange-600">Nộp hồ sơ học bổng</h1>
                <p className="text-gray-600 text-sm">Hoàn tất thông tin để nhận cơ hội</p>
              </div>
            </div>
            <Button
              variant="outline"
              onClick={() => router.back()}
              className="flex items-center gap-2 border-gray-300 hover:bg-gray-100"
            >
              <ArrowLeft className="w-4 h-4" />
              Quay lại
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto p-6 space-y-8">
        {/* Selected Scholarship Card */}
        <Card className="bg-white shadow-lg rounded-2xl overflow-hidden border-orange-400 border-2">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 text-white">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-orange-100 mb-1">Học bổng bạn đang ứng tuyển</p>
                <h2 className="text-2xl font-bold">{selectedScholarship.title}</h2>
              </div>
              <div className="text-right flex-shrink-0 ml-4">
                <div className="text-3xl font-bold">{selectedScholarship.value}</div>
                <div className="text-sm opacity-90">Học phí</div>
              </div>
            </div>
          </div>
          <div className="p-6 grid grid-cols-3 gap-4 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-orange-500" />
              <div>
                <p className="font-semibold">Hạn nộp hồ sơ</p>
                <p>{selectedScholarship.deadline}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-orange-500" />
              <div>
                <p className="font-semibold">Chỉ tiêu</p>
                <p>{selectedScholarship.slots} suất</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-orange-500" />
              <div>
                <p className="font-semibold">Đã ứng tuyển</p>
                <p>{selectedScholarship.applied} hồ sơ</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Form Card */}
        <Card className="bg-white shadow-lg rounded-2xl border-0 overflow-hidden">
          <form onSubmit={handleSubmit}>
            <div className="p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6 border-l-4 border-orange-500 pl-4">
                Thông tin cá nhân
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-medium text-gray-700 flex items-center gap-2"><User className="w-4 h-4" />Họ và tên</label>
                  <Input required value={formData.fullName} onChange={(e) => handleInputChange("fullName", e.target.value)} placeholder="Nguyễn Văn An" className="h-12"/>
                </div>
                <div className="space-y-2">
                  <label className="font-medium text-gray-700 flex items-center gap-2"><Mail className="w-4 h-4" />Email</label>
                  <Input required type="email" value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} placeholder="you@email.com" className="h-12"/>
                </div>
                <div className="space-y-2">
                  <label className="font-medium text-gray-700 flex items-center gap-2"><Phone className="w-4 h-4" />Số điện thoại</label>
                  <Input required value={formData.phone} onChange={(e) => handleInputChange("phone", e.target.value)} placeholder="09xxxxxxxx" className="h-12"/>
                </div>
                <div className="space-y-2">
                  <label className="font-medium text-gray-700 flex items-center gap-2"><MapPin className="w-4 h-4" />Tỉnh/Thành phố</label>
                  <Input required value={formData.city} onChange={(e) => handleInputChange("city", e.target.value)} placeholder="Hà Nội" className="h-12"/>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6 border-l-4 border-orange-500 pl-4">
                Thông tin đăng ký
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-medium text-gray-700 flex items-center gap-2"><University className="w-4 h-4" />Đăng ký học tại</label>
                  <Input required value={formData.school} onChange={(e) => handleInputChange("school", e.target.value)} placeholder="FPT University Hà Nội" className="h-12"/>
                </div>
                <div className="space-y-2">
                  <label className="font-medium text-gray-700 flex items-center gap-2"><BookOpen className="w-4 h-4" />Chuyên ngành đăng ký</label>
                  <Input required value={formData.major} onChange={(e) => handleInputChange("major", e.target.value)} placeholder="Kỹ thuật phần mềm" className="h-12"/>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="font-medium text-gray-700 flex items-center gap-2"><Award className="w-4 h-4" />Loại học bổng</label>
                  <Input required value={formData.scholarshipType} readOnly className="h-12 bg-gray-200 cursor-not-allowed"/>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="p-8 flex justify-end">
              <Button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold text-base flex items-center gap-2 shadow-lg transition-all hover:shadow-xl transform hover:scale-105"
              >
                Nộp hồ sơ ngay
                <ArrowRight size={20} />
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default ScholarshipApplication;