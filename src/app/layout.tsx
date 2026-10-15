import type { Metadata } from "next";
import localFont from "next/font/local";
import { profile } from "@/data/profile";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: `${profile.name} | 링크나무`,
  description: profile.bio,
};

// 첫 렌더 전에 테마를 적용해 깜빡임 방지 (저장값 → 시스템 설정 순)
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark')}catch(e){}})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${geistSans.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
