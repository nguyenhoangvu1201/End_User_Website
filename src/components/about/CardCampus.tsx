import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Campus } from "@/data/campusesData";

interface CardCampusProps {
  campus: Campus;
  index: number;
  hoveredCard: number | null;
  setHoveredCard: (idx: number | null) => void;
  visible: boolean;
  onMapClick: (campus: Campus) => void;
}

const CardCampus: React.FC<CardCampusProps> = React.memo(({ campus, index, hoveredCard, setHoveredCard, visible, onMapClick }) => {
  return (
    <Card
      className={cn(
        "group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:scale-[1.02]",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        "animate-slideIn"
      )}
      style={{ animationDelay: `${index * 200}ms` }}
      onMouseEnter={() => setHoveredCard(index)}
      onMouseLeave={() => setHoveredCard(null)}
      aria-label={`Thông tin campus: ${campus.title}`}
      role="region"
    >
      {/* Background Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-r ${campus.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
      <CardContent className="p-0 relative">
        <div className={`flex ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col gap-0 min-h-[500px]`}>
          {/* Content Section */}
          <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center relative">
            {/* City Badge */}
            <div className="absolute top-8 right-8 z-10">
              <span className="inline-block bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-xs font-semibold shadow">{campus.city}</span>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-orange-700">{campus.title}</h2>
            <p className="text-lg text-gray-700 mb-4">{campus.description}</p>
            <ul className="flex space-x-6 mb-6">
              {campus.stats.map((stat, i) => (
                <li key={i} className="flex items-center space-x-2 text-sm text-gray-600">
                  <span>{stat.icon}</span>
                  <span className="font-semibold">{stat.value}</span>
                  <span>{stat.label}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 mb-4">
              <button
                className="flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition text-sm"
                onClick={() => onMapClick(campus)}
                aria-label={`Xem bản đồ campus ${campus.city}`}
                role="button"
              >
                <span className="mr-2">📍</span> {campus.mapButton}
              </button>
              <button
                className="flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200 transition text-sm"
                onClick={() => window.open(`https://${campus.website}`, '_blank')}
                aria-label={`Truy cập website campus ${campus.city}`}
                role="button"
              >
                <span className="mr-2">🌐</span> Website
              </button>
            </div>
            <div className="text-gray-500 text-sm mb-2">{campus.address}</div>
            <div className="text-gray-400 text-xs">Thành lập: {campus.established}</div>
          </div>
          {/* Image Section */}
          <div className="flex-1 min-w-[300px] flex items-center justify-center relative">
            <img
              src={campus.image}
              alt={`Ảnh campus ${campus.city}`}
              className="object-cover w-full h-full rounded-2xl shadow-lg border"
              loading="lazy"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
});
CardCampus.displayName = "CardCampus";

export default CardCampus; 