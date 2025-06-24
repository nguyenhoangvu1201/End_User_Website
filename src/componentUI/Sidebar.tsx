"use client"
import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { menuItems } from "./menuItems";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  onLogout?: () => void;
  onNavigate?: (path: string) => void;
}

const Sidebar: React.FC<SidebarProps> = React.memo(({ isOpen, onToggle, onLogout, onNavigate }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    } else {
      const confirmLogout = window.confirm("Bạn có chắc chắn muốn đăng xuất?");
      if (confirmLogout) {
        router.push('/');
      }
    }
  };

  const handleNavigation = (path: string) => {
    if (onNavigate) {
      onNavigate(path);
    } else {
      router.push(path);
    }
    if (window.innerWidth < 1024 && isOpen) {
      onToggle();
    }
  };

  return (
    <>
      {/* Overlay cho mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300"
          onClick={onToggle}
          aria-hidden="true"
        />
      )}
      
      <aside className={`fixed left-0 top-0 h-full bg-white shadow-lg border-r border-gray-200 transition-all duration-300 z-50 ${isOpen ? 'w-72' : 'w-16'} flex flex-col`}>
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10 ring-2 ring-orange-100">
              <AvatarImage src="/lovable-uploads/5cc70e68-3aa0-4b76-83f6-267c1abc2296.png" alt="FPT University Logo" />
              <AvatarFallback className="bg-orange-500 text-white font-semibold">FPT</AvatarFallback>
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
        <nav className="mt-4 px-2 flex-1 overflow-y-auto" role="navigation" aria-label="Sidebar navigation">
          <div className="space-y-1">
            {menuItems.map((item) => {
              const isActive = pathname === item.path || pathname.startsWith(item.path + '/');
              return (
                <div
                  key={item.id}
                  className={`relative flex ${isOpen ? '' : 'justify-center'} items-center`}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <button
                    onClick={() => handleNavigation(item.path)}
                    className={`w-full flex items-center ${isOpen ? '' : 'justify-center'} px-4 py-3.5 text-base font-medium rounded-xl 
                      transition-all duration-300 ease-out
                      group relative overflow-hidden
                      focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2
                      ${isActive 
                        ? `bg-gradient-to-r ${item.color} text-white shadow-lg transform scale-[1.02]` 
                        : 'text-gray-700 hover:bg-gray-100/80 hover:shadow-md hover:scale-[1.01]'
                      }
                    `}
                    tabIndex={0}
                    aria-label={item.label}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {/* Background animation */}
                    {!isActive && (
                      <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 
                        transition-opacity duration-300 rounded-xl
                        ${hoveredItem === item.id ? 'opacity-10' : ''}
                      `} aria-hidden="true" />
                    )}
                    <span className={`text-2xl transition-all duration-300 relative z-10 flex items-center justify-center ${isOpen ? 'mr-4' : ''}`}>
                      {item.icon}
                    </span>
                    <span
                      className={`truncate transition-all duration-300 transform relative z-10
                        ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'}
                      `}
                    >
                      {item.label}
                    </span>

                    {/* Active indicator */}
                    {isActive && (
                      <span className="absolute left-0 top-0 h-full w-1 bg-white rounded-r-lg animate-slideIn" aria-hidden="true" />
                    )}
                  </button>

                  {/* Tooltip for collapsed state */}
                  {!isOpen && hoveredItem === item.id && (
                    <div className="absolute left-full ml-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-lg z-50 whitespace-nowrap pointer-events-none" role="tooltip">
                      {item.label}
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-900 rotate-45" aria-hidden="true"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200">
          <Button
            onClick={handleLogout}
            className={`w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white transition-all duration-300 shadow-md hover:shadow-lg ${!isOpen && 'px-2'}`}
            aria-label="Đăng xuất"
          >
            {isOpen ? (
              <span className="flex items-center justify-center">
                <span className="mr-2" aria-hidden="true">↩</span>
                Đăng xuất
              </span>
            ) : (
              '↩'
            )}
          </Button>
        </div>

        {/* Toggle Button */}
        <button
          onClick={onToggle}
          className="absolute right-[-18px] top-1/2 -translate-y-1/2 w-8 h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:bg-orange-100 hover:border-orange-300 shadow-lg transition-all duration-300 z-20 focus:outline-none focus:ring-2 focus:ring-orange-500"
          aria-label={isOpen ? "Thu gọn sidebar" : "Mở rộng sidebar"}
          aria-expanded={isOpen}
        >
          <span className="text-lg font-bold transition-transform duration-300" aria-hidden="true">
            {isOpen ? '◀' : '▶'} 
          </span>
        </button>
      </aside>
    </>
  );
});

Sidebar.displayName = "Sidebar";

export default Sidebar;