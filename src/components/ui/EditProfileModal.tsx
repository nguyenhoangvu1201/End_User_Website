'use client';

import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription, 
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export const EditProfileModal = ({ isOpen, onOpenChange, profileData, onSave }) => {
  const [formData, setFormData] = useState(profileData);

  useEffect(() => {
    // Update local form state when the profileData prop changes
    setFormData(profileData);
  }, [profileData]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSaveChanges = () => {
    onSave(formData);
    toast.success("Thông tin cá nhân đã được cập nhật thành công!");
  };

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-800">Chỉnh sửa thông tin cá nhân</DialogTitle>
          <DialogDescription>
            Cập nhật thông tin của bạn. Nhấn "Lưu thay đổi" khi hoàn tất.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Họ và tên</Label>
              <Input id="name" value={formData.name} onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="school">Trường THPT</Label>
              <Input id="school" value={formData.school} onChange={handleChange} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="class">Lớp</Label>
              <Input id="class" value={formData.class} onChange={handleChange} />
            </div>
            <div className="space-y-2">
                <Label htmlFor="avgScore">Điểm TB</Label>
                <Input id="avgScore" value={formData.avgScore} onChange={handleChange} />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="interestedMajor">Ngành quan tâm</Label>
            <Input id="interestedMajor" value={formData.interestedMajor} onChange={handleChange} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Số điện thoại</Label>
              <Input id="phone" value={formData.phone} onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="birthday">Ngày sinh</Label>
              <Input id="birthday" value={formData.birthday} onChange={handleChange} />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Địa chỉ</Label>
            <Input id="address" value={formData.address} onChange={handleChange} />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="outline">Hủy</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button type="button" onClick={handleSaveChanges}>Lưu thay đổi</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}; 