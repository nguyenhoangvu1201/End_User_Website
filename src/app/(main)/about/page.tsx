"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { X, MapPin, Navigation, ExternalLink, Phone, Clock, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { campusesData } from "@/data/campusesData";
import CardCampus from "@/components/about/CardCampus";
import { useCampusActions } from "@/hooks/useCampusActions";
import { motion } from "framer-motion";

const About = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mapCampus, setMapCampus] = useState<any | null>(null);
  const { handleCallPhone, handleDirections, handleVisitWebsite } = useCampusActions();
  const [mapLoading, setMapLoading] = useState(false);

  const campuses = campusesData;

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

  useEffect(() => {
    if (!mapCampus) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMapCampus(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mapCampus]);

  const handleMapClick = (campus: any) => {
    setMapCampus(campus);
  };

  const handleCloseMap = () => setMapCampus(null);

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
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.7, type: "spring" }}
          >
            <CardCampus
              campus={campus}
              index={index}
              hoveredCard={hoveredCard}
              setHoveredCard={setHoveredCard}
              visible={visibleCards.includes(index)}
              onMapClick={setMapCampus}
            />
          </motion.div>
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

      {/* Modal Map */}
      {mapCampus && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
        >
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6 relative flex flex-col items-center animate-fadeIn">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-2xl"
              onClick={() => setMapCampus(null)}
              aria-label="Đóng bản đồ"
            >
              <X />
            </button>
            <h3 className="text-xl font-bold mb-2">{mapCampus.title}</h3>
            <div className="mb-4 text-gray-600 text-sm">{mapCampus.address}</div>
            <div className="w-full aspect-video rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
              {!mapLoading && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <span className="animate-spin text-2xl">⏳</span>
                </div>
              )}
              <iframe
                src={mapCampus.mapEmbed}
                title={`Bản đồ ${mapCampus.city}`}
                className="w-full h-full border-0"
                loading="lazy"
                onLoad={() => setMapLoading(true)}
                aria-label={`Bản đồ campus ${mapCampus.city}`}
              />
            </div>
            <div className="flex gap-3 mt-4">
              <button
                className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition text-sm"
                onClick={() => handleDirections(mapCampus.address)}
                aria-label="Chỉ đường đến campus"
              >
                <Navigation className="inline-block mr-2 w-4 h-4" /> Chỉ đường
              </button>
              <button
                className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition text-sm"
                onClick={() => handleCallPhone(mapCampus.phone)}
                aria-label="Gọi điện campus"
              >
                <Phone className="inline-block mr-2 w-4 h-4" /> Gọi điện
              </button>
              <button
                className="px-4 py-2 bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200 transition text-sm"
                onClick={() => handleVisitWebsite(mapCampus.website)}
                aria-label="Truy cập website campus"
              >
                <Globe className="inline-block mr-2 w-4 h-4" /> Website
              </button>
              <button
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition text-sm"
                onClick={() => setMapCampus(null)}
                aria-label="Đóng modal"
              >
                <X className="inline-block mr-2 w-4 h-4" /> Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;