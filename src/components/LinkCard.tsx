"use client";

import type { LinkItem } from "@/data/profile";
import LinkIcon from "@/components/LinkIcon";

function recordClick(linkId: string) {
  const body = JSON.stringify({ linkId });
  // 페이지를 떠나도 요청이 끊기지 않도록 sendBeacon 우선 사용
  if (navigator.sendBeacon?.("/api/clicks", body)) return;
  fetch("/api/clicks", { method: "POST", body, keepalive: true }).catch(() => {});
}

export default function LinkCard({ link }: { link: LinkItem }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => recordClick(link.id)}
      className="relative block w-full rounded-2xl border border-white/70 bg-white/45 px-16 py-4 text-center shadow-[0_8px_24px_-12px_rgba(150,80,40,0.25)] backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-px hover:bg-white/60 hover:shadow-[0_12px_28px_-12px_rgba(150,80,40,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300/70 active:translate-y-0 dark:border-white/10 dark:bg-white/[0.06] dark:shadow-[0_8px_24px_-12px_rgba(0,0,0,0.6)] dark:hover:bg-white/[0.09]"
    >
      {/* 제목이 카드 가운데에 오도록 아이콘은 왼쪽에 띄워 배치 */}
      {link.icon && (
        <span className="absolute left-3.5 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-xl bg-white/70 dark:bg-white/10">
          <LinkIcon name={link.icon} className="h-6 w-6" />
        </span>
      )}
      <span className="block text-[15px] font-semibold tracking-tight text-stone-900 dark:text-stone-50">
        {link.title}
      </span>
      {link.description && (
        <span className="mt-0.5 block text-xs text-stone-500 dark:text-stone-400">
          {link.description}
        </span>
      )}
    </a>
  );
}
