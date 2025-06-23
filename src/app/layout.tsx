"use client";

import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner"

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
        <QueryClientProvider client={queryClient}>
        <Toaster />
        {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
