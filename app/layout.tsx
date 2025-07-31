// app/layout.tsx
import React from "react";
import "../styles/globals.css"; // นำเข้ารูปแบบ CSS ของโปรเจค

export const metadata = {
  title: "My App", // ตั้งค่าชื่อเว็บไซต์
  description: "A Next.js 13+ app with a layout.", // ตั้งคำอธิบายเว็บไซต์
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode; // React Node ที่ใช้แสดงผลในแต่ละหน้า
}) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <header className="header">
            <h1>jirayut charoensiri</h1>
          </header>

          <main className="main">{children}</main>

          <footer className="footer">
            <p>&copy; 2025 Test Front-end. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
