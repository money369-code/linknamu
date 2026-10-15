import type { LinkIconName } from "@/data/profile";

const NAVER_GREEN = "#03C75A";

// 유니코드에 없는 브랜드 아이콘이라 SVG로 직접 그림 (24x24 기준)
export default function LinkIcon({ name, className }: { name: LinkIconName; className?: string }) {
  switch (name) {
    case "github":
      // 다크모드에서도 보이도록 글자색(currentColor)을 따라감
      return (
        <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" className={className}>
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
        </svg>
      );
    case "naver-blog":
      // 초록 말풍선 + "blog"
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path d="M5 2h14a3 3 0 013 3v10a3 3 0 01-3 3h-5l-2 3-2-3H5a3 3 0 01-3-3V5a3 3 0 013-3z" fill={NAVER_GREEN} />
          <text x="12" y="13.2" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="800" fill="#fff">
            blog
          </text>
        </svg>
      );
    case "naver-mail":
      // 초록 사각형 + 흰 봉투
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <rect width="24" height="24" rx="6" fill={NAVER_GREEN} />
          <rect x="5" y="7" width="14" height="10" rx="1.5" fill="none" stroke="#fff" strokeWidth="1.8" />
          <path d="M5.5 8l6.5 5 6.5-5" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
      );
  }
}
