"use client";

import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "@/context/ThemeContext";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body
        className={``}
      >
        <ThemeProvider>
          <QueryClientProvider client={queryClient}>
            <Toaster />
            {children}
          </QueryClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
