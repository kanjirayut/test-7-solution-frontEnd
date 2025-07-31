// app/layout.tsx
import React from "react";
import "../styles/globals.css"; // นำเข้ารูปแบบ CSS ของโปรเจค

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
            <h1>Jirayut Charoensiri</h1>
          </header>

          <main className="main">{children}</main>

          <footer className="footer">
            <p>&copy; 2025 Test Front-end 7Solution. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
