import type { Metadata } from "next";
import { profile } from "@/data/profile";
import "./globals.css";

// 한글 포함 폰트라 화면에 쓰인 글자만 받는 dynamic-subset 버전 사용
const pretendardCss =
  "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css";

export const metadata: Metadata = {
  title: `${profile.name} | 링크나무`,
  description: profile.bio.join(" · "),
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
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="stylesheet" href={pretendardCss} crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
