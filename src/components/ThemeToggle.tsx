"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
    setIsDark(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "밝은 화면으로 전환" : "어두운 화면으로 전환"}
      className="rounded-full border border-white/70 bg-white/45 p-2 text-lg leading-none shadow-sm backdrop-blur-xl transition duration-300 hover:bg-white/60 dark:border-white/10 dark:bg-white/[0.06] dark:hover:bg-white/[0.09]"
    >
      {/* 마운트 전에는 아이콘을 비워 하이드레이션 불일치 방지 */}
      <span className="block h-5 w-5">{isDark === null ? "" : isDark ? "☀️" : "🌙"}</span>
    </button>
  );
}
