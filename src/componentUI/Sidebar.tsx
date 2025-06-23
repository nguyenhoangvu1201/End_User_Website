"use client"
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Sidebar = ({ isOpen, onToggle }: SidebarProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  
  const menuItems = [
    { id: 'about', label: 'Giới thiệu', icon: '📋', path: '/about', color: 'from-blue-500 to-blue-600' },
    { id: 'chat', label: 'Tư vấn cùng AI', icon: '🤖', path: '/dashboard', active: true, color: 'from-orange-500 to-orange-600' },
    { id: 'game-test', label: 'Game Test', icon: '🎮', path: '/game-test', color: 'from-purple-500 to-purple-600' },
    { id: 'programs', label: 'Ngành học', icon: '📚', path: '/programs', color: 'from-green-500 to-green-600' },
    { id: 'admissions', label: 'Tuyển sinh', icon: '🎓', path: '/admissions', color: 'from-indigo-500 to-indigo-600' },
    { id: 'scholarships', label: 'Học bổng', icon: '💰', path: '/scholarships', color: 'from-yellow-500 to-yellow-600' },
    { id: 'news', label: 'Tin tức & Sự kiện', icon: '📰', path: '/news', color: 'from-red-500 to-red-600' },
    { id: 'profile', label: 'Thông tin cá nhân', icon: '⚙️', path: '/profile', color: 'from-gray-500 to-gray-600' },
  ];

  const handleLogout = () => {
    router.push('/');
  };

  return (
    <>
      {/* Overlay cho mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300"
          onClick={onToggle}
        />
      )}
      
      <aside className={`fixed left-0 top-0 h-full bg-white shadow-lg border-l border-gray-200 transition-all duration-300 z-50 ${isOpen ? 'w-72' : 'w-16'} flex flex-col`}>
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/lovable-uploads/5cc70e68-3aa0-4b76-83f6-267c1abc2296.png" />
              <AvatarFallback>FPT</AvatarFallback>
            </Avatar>
            {isOpen && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">AI Assistant</p>
                <p className="text-xs text-gray-500 truncate">FPT University</p>
              </div>
            )}
          </div>
        </div>
        {/* Navigation */}
        <nav className="mt-4 px-2 flex-1">
          <div className="space-y-1">
            {menuItems.map((item, index) => {
              const isActive = pathname === item.path || pathname.startsWith(item.path + '/');
              return (
                <div
                  key={item.id}
                  className={`relative flex ${isOpen ? '' : 'justify-center'} items-center`}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <button
                    onClick={() => router.push(item.path)}
                    className={`w-full flex items-center ${isOpen ? '' : 'justify-center'} px-4 py-3.5 text-base font-medium rounded-xl 
                      transition-all duration-300 ease-out
                      group relative overflow-hidden
                      ${isActive 
                        ? `bg-gradient-to-r ${item.color} text-white shadow-lg transform scale-[1.02]` 
                        : 'text-gray-700 hover:bg-gray-100/80 hover:shadow-md hover:scale-[1.01]'
                      }
                    `}
                    tabIndex={0}
                    aria-label={item.label}
                  >
                    {/* Background animation */}
                    {!isActive && (
                      <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 
                        transition-opacity duration-300 rounded-xl
                        ${hoveredItem === item.id ? 'opacity-10' : ''}
                      `} />
                    )}
                    <span className={`text-2xl transition-all duration-300 relative z-10 flex items-center justify-center ${isOpen ? 'mr-4' : ''}`}>
                      {item.icon}
                    </span>
                    <span
                      className={`truncate transition-all duration-300 transform relative z-10
                        ${isOpen ? 'opacity-100 translate-x-0' : hoveredItem === item.id ? 'opacity-100 translate-x-0 ml-2' : 'opacity-0 translate-x-2 pointer-events-none'}
                      `}
                    >
                      {item.label}
                    </span>

                    {/* Hiệu ứng bar phải khi active */}
                    {isActive && (
                      <span className="absolute left-0 top-0 h-full w-1 bg-orange-500 rounded-r-lg animate-slideIn" />
                    )}
                  </button>
                  {/* Tooltip cho collapsed state - Đưa ra ngoài button, pointer-events-auto, nằm bên trái */}
                  
                </div>
              );
            })}
          </div>
        </nav>
        {/* Footer */}
        <div className="absolute bottom-4 right-2 left-2">
          <Button
            onClick={handleLogout}
            className={`w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white ${!isOpen && 'px-2'}`}
          >
            {isOpen ? 'Đăng xuất' : '↩'}
          </Button>
        </div>
        {/* Toggle Button */}
            <button
              onClick={onToggle}
              className="absolute right-[-18px] top-1/2 -translate-y-1/2 w-8 h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:bg-orange-100 shadow-lg transition-all duration-300 z-20"
              aria-label="Toggle sidebar"
            >
              <span className="text-lg font-bold">
                {isOpen ? '<' : '>'} 
              </span>
            </button>

      </aside>
    </>
  );
};

export default Sidebar;