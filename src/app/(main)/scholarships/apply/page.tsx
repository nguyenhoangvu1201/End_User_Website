"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const ScholarshipApplication = () => {
  const navigate = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    loginType: "",
    major: "",
    scholarshipType: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Scholarship application submitted:", formData);
    // Handle form submission logic here
  };

  return (
    
      <div className="p-6 bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-orange-500 mb-4">Đăng ký học bổng</h1>
          </div>

          <Card className="bg-gradient-to-br from-orange-400 to-orange-500 border-none shadow-xl rounded-3xl overflow-hidden">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Họ và tên</label>
                    <Input
                      value={formData.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      placeholder="Nguyen Van A"
                      className="bg-white border-none rounded-lg h-12 text-gray-800 placeholder-gray-400"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="Nguyen Van A"
                      className="bg-white border-none rounded-lg h-12 text-gray-800 placeholder-gray-400"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Số điện thoại</label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="Nguyen Van A"
                      className="bg-white border-none rounded-lg h-12 text-gray-800 placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Tỉnh/ Thành phố</label>
                    <Input
                      value={formData.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                      placeholder="Nguyen Van A"
                      className="bg-white border-none rounded-lg h-12 text-gray-800 placeholder-gray-400"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Đăng ký học tại</label>
                    <Input
                      value={formData.loginType}
                      onChange={(e) => handleInputChange("loginType", e.target.value)}
                      placeholder="Nguyen Van A"
                      className="bg-white border-none rounded-lg h-12 text-gray-800 placeholder-gray-400"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Chuyên ngành đăng ký</label>
                    <Input
                      value={formData.major}
                      onChange={(e) => handleInputChange("major", e.target.value)}
                      placeholder="Nguyen Van A"
                      className="bg-white border-none rounded-lg h-12 text-gray-800 placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                  <div className="md:w-1/3">
                    <label className="block text-white font-medium mb-2">Loại học bổng</label>
                    <Input
                      value={formData.scholarshipType}
                      onChange={(e) => handleInputChange("scholarshipType", e.target.value)}
                      placeholder="Nguyen Van A"
                      className="bg-white border-none rounded-lg h-12 text-gray-800 placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-6">
                  <Button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold text-lg flex items-center gap-2 shadow-lg transition-all hover:shadow-xl"
                  >
                    Đăng ký
                    <ArrowRight size={20} />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    
  );
};

export default ScholarshipApplication;