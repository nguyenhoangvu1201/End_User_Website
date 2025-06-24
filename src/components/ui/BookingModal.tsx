import { X, Video, MapPin } from 'lucide-react';
import React from 'react';

interface BookingData {
  fullName: string;
  email: string;
  phone: string;
  type: string;
  date: string;
  time: string;
}

interface BookingModalProps {
  bookingData: BookingData;
  setBookingData: React.Dispatch<React.SetStateAction<BookingData>>;
  setShowBookingModal: (show: boolean) => void;
  setShowSuccessModal: (show: boolean) => void;
  timeSlots: string[];
  onSubmit: (e: React.FormEvent) => void;
}

const BookingModal: React.FC<BookingModalProps> = ({
  bookingData,
  setBookingData,
  setShowBookingModal,
  setShowSuccessModal,
  timeSlots,
  onSubmit,
}) => {
  return (
    <div className="fixed inset-0 bg-black/10 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border-2 border-orange-400">
        <div className="p-6 border-b border-orange-200">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-bold text-orange-600">Đặt lịch tư vấn</h3>
            <button 
              onClick={() => setShowBookingModal(false)}
              className="text-orange-500 hover:text-orange-700 p-2"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
        <form onSubmit={onSubmit} className="p-6 space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h4 className="font-semibold text-black border-b pb-2">Thông tin cá nhân</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-black font-medium mb-2">Họ và tên *</label>
                <input
                  type="text"
                  value={bookingData.fullName}
                  onChange={(e) => setBookingData({...bookingData, fullName: e.target.value})}
                  className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                  placeholder="Nhập họ và tên"
                />
              </div>
              <div>
                <label className="block text-black font-medium mb-2">Số điện thoại *</label>
                <input
                  type="tel"
                  value={bookingData.phone}
                  onChange={(e) => setBookingData({...bookingData, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                  placeholder="Nhập số điện thoại"
                />
              </div>
            </div>
            <div>
              <label className="block text-black font-medium mb-2">Email *</label>
              <input
                type="email"
                value={bookingData.email}
                onChange={(e) => setBookingData({...bookingData, email: e.target.value})}
                className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
                placeholder="Nhập địa chỉ email"
              />
            </div>
          </div>
          {/* Consultation Type */}
          <div>
            <h4 className="font-semibold text-black border-b pb-2 mb-4">Hình thức tư vấn</h4>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setBookingData({...bookingData, type: 'online'})}
                className={`p-4 rounded-xl border-2 transition-all ${
                  bookingData.type === 'online'
                    ? 'border-orange-500 bg-orange-50'
                    : 'border-orange-200 hover:border-orange-400'
                }`}
              >
                <Video className="w-8 h-8 mx-auto mb-2 text-orange-500" />
                <div className="font-semibold text-black">Trực tuyến</div>
                <div className="text-sm text-gray-700">Qua video call</div>
              </button>
              <button
                type="button"
                onClick={() => setBookingData({...bookingData, type: 'offline'})}
                className={`p-4 rounded-xl border-2 transition-all ${
                  bookingData.type === 'offline'
                    ? 'border-orange-500 bg-orange-50'
                    : 'border-orange-200 hover:border-orange-400'
                }`}
              >
                <MapPin className="w-8 h-8 mx-auto mb-2 text-orange-500" />
                <div className="font-semibold text-black">Trực tiếp</div>
                <div className="text-sm text-gray-700">Tại trường</div>
              </button>
            </div>
          </div>
          {/* Date and Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-black font-medium mb-2">Chọn ngày *</label>
              <input
                type="date"
                value={bookingData.date}
                onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-black font-medium mb-2">Chọn giờ *</label>
              <select
                value={bookingData.time}
                onChange={(e) => setBookingData({...bookingData, time: e.target.value})}
                className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
              >
                <option value="">Chọn khung giờ</option>
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </select>
            </div>
          </div>
          {/* Submit Buttons */}
          <div className="flex justify-end gap-4 pt-4 border-t border-orange-200">
            <button
              type="button"
              onClick={() => setShowBookingModal(false)}
              className="px-6 py-3 border-2 border-orange-200 rounded-lg text-black font-semibold hover:bg-orange-50 transition-all"
            >
              Hủy
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Xác nhận đặt lịch
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingModal; 