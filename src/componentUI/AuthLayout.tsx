import React from "react";
import { cn } from "@/lib/utils";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className={cn(
      "min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-[var(--color-bg)] via-white to-[var(--color-secondary)/10] animate-fadeIn font-[var(--font-main)]"
    )}>
      <div className="w-full max-w-6xl mx-auto flex items-center justify-center">
        <div className="text-center mb-8 mr-12 hidden lg:block">
          <div className="mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-[var(--color-secondary)] text-white px-3 py-1 rounded mr-1 font-bold">F</div>
              <div className="bg-[var(--color-primary)] text-white px-3 py-1 rounded mr-1 font-bold">P</div>
              <div className="bg-green-600 text-white px-3 py-1 rounded mr-2 font-bold">T</div>
              <span className="text-[var(--color-secondary)] font-semibold text-lg">Education</span>
            </div>
            <h1 className="text-4xl font-bold text-[var(--color-primary)] mb-4">
              TRƯỜNG ĐẠI HỌC FPT
            </h1>
          </div>
        </div>
        {children}
      </div>

      {/* Social Media Buttons */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 space-y-4 max-sm:static max-sm:flex max-sm:space-y-0 max-sm:space-x-4 max-sm:translate-y-0 max-sm:right-0 max-sm:top-auto max-sm:mt-8">
        <div className="w-12 h-12 bg-[var(--color-secondary)] rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-blue-600 transition-all duration-200 shadow-md active:scale-95 animate-fadeIn">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 3.462-2.136 4.702C14.152 14.122 12.547 14.849 10.69 15.018c-.993.092-1.999-.124-2.876-.617-.877-.493-1.575-1.265-1.996-2.207C5.396 10.751 5.72 9.012 6.832 7.901c1.111-1.111 2.85-1.436 4.293-1.014.722.211 1.352.576 1.875 1.078.523-.523.888-1.155 1.078-1.875.422-1.443.097-3.182-1.014-4.293C11.953.686 10.214.362 8.771.784 7.328 1.206 6.152 2.152 5.51 3.463 4.868 4.774 4.824 6.33 5.39 7.68c.566 1.35 1.6 2.384 2.95 2.95 1.35.566 2.906.522 4.217-.12 1.311-.642 2.257-1.818 2.679-3.261.422-1.443.098-3.182-1.013-4.293z"/>
          </svg>
        </div>
        <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-blue-500 transition-all duration-200 shadow-md active:scale-95 animate-fadeIn">
          Zalo
        </div>
        <div className="w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-orange-600 transition-all duration-200 shadow-md active:scale-95 animate-fadeIn">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
