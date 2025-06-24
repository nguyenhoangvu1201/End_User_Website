'use client'


import { useState } from "react";
import { useRouter } from "next/navigation"; 
import AuthLayout from "@/componentUI/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const Index = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [rememberMe, setRememberMe] = useState(false);
 
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate authentication and navigate to dashboard
    router.push("/dashboard");
  };

  return (
    <AuthLayout>
      <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-orange-600 mb-2">
            {isLogin ? "Đăng nhập" : "Đăng ký"}
          </h2>
          <p className="text-gray-600 text-sm">
            {isLogin ? (
              <>
                Bạn chưa có tài khoản?{" "}
                <button
                  onClick={() => setIsLogin(false)}
                  className="text-orange-600 hover:text-orange-700 font-medium"
                  aria-label="Chuyển sang trang đăng ký"
                >
                  Đăng ký
                </button>
              </>
            ) : (
              <>
                Bạn đã có tài khoản?{" "}
                <button
                  onClick={() => setIsLogin(true)}
                  className="text-orange-600 hover:text-orange-700 font-medium"
                  aria-label="Chuyển sang trang đăng nhập"
                >
                  Đăng nhập
                </button>
              </>
            )}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="username" className="text-gray-700 font-medium">
                Tài khoản
              </Label>
              <Input
                id="username"
                type="text"
                placeholder="USERNAME"
                className="mt-1 h-12 border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                required
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-gray-700 font-medium">
                Mật khẩu
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="PASSWORD"
                className="mt-1 h-12 border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                required
              />
            </div>

            {!isLogin && (
              <div>
                <Label htmlFor="confirmPassword" className="text-gray-700 font-medium">
                  Nhập lại mật khẩu
                </Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="CONFIRM PASSWORD"
                  className="mt-1 h-12 border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                  required
                />
              </div>
            )}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked as boolean)}
              />
              <Label htmlFor="remember" className="text-sm text-gray-600">
                Lưu tài khoản
              </Label>
            </div>
            {isLogin && (
              <button
                type="button"
                className="text-sm text-orange-600 hover:text-orange-700"
                aria-label="Quên mật khẩu"
              >
                Quên mật khẩu?
              </button>
            )}
          </div>

          <Button
            type="submit"
            className="w-full h-12 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium rounded-lg transition-all duration-200"
            aria-label={isLogin ? "Đăng nhập" : "Đăng ký"}
          >
            {isLogin ? "Đăng nhập" : "Đăng ký"}
          </Button>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Index;
