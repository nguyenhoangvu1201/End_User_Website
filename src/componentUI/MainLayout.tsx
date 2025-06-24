"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import { cn } from "@/lib/utils";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-[var(--color-bg)]">
      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      <div
        className={cn(
          "flex-1 flex flex-col transition-all duration-300 animate-fadeIn",
          sidebarOpen ? "ml-64" : "ml-16",
          "max-sm:ml-0"
        )}
        style={{ minHeight: '100vh' }}
      >
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
