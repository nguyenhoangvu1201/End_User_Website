import MainLayout from "@/componentUI/MainLayout";

export default function MainLayOut({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    
    return (
      <html lang="en">
        <body
          className={``}
        >
          <MainLayout>
          {children}
          </MainLayout>
        </body>
      </html>
    );
  }