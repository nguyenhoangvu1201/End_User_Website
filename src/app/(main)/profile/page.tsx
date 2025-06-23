
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight } from "lucide-react";

const Profile = () => {
  return (
    
      <div className="p-6 max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-orange-600 mb-8 text-center">Thông tin cá nhân</h1>
        </div>

        <Card className="p-8">
          <CardContent className="p-0">
            {/* Profile Header */}
            <div className="flex items-center mb-8">
              <Avatar className="h-16 w-16 mr-4">
                <AvatarImage src="/lovable-uploads/5cc70e68-3aa0-4b76-83f6-267c1abc2296.png" />
                <AvatarFallback>NVA</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-xl font-semibold">Nguyen Van A</h2>
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                  Member
                </span>
                <p className="text-gray-500 text-sm mt-1">Đối tác khách</p>
              </div>
            </div>

            {/* Profile Information Grid */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-sm text-gray-600 mb-2">Họ và tên</label>
                <div className="bg-gray-50 p-3 rounded border">
                  <span className="text-gray-800">Nguyen Van A</span>
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">Ngày tháng năm sinh</label>
                <div className="bg-gray-50 p-3 rounded border">
                  <span className="text-gray-800">03/08/2001</span>
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">Địa chỉ Email</label>
                <div className="bg-gray-50 p-3 rounded border">
                  <span className="text-gray-800">Nguyen Van A</span>
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">Số điện thoại</label>
                <div className="bg-gray-50 p-3 rounded border">
                  <span className="text-gray-800">0967964875</span>
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">Địa chỉ cư trú</label>
                <div className="bg-gray-50 p-3 rounded border">
                  <span className="text-gray-800">Hà Nội</span>
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">Giới tính</label>
                <div className="bg-gray-50 p-3 rounded border">
                  <span className="text-gray-800">Nam</span>
                </div>
              </div>
            </div>

            {/* Edit Button */}
            <div className="flex justify-center">
              <Button 
                variant="outline" 
                className="border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-2"
              >
                Sửa thông tin
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    
  );
};

export default Profile;
