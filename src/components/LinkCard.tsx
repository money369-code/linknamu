"use client";

import type { LinkItem } from "@/data/profile";

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
      className="block w-full rounded-xl border border-neutral-200 bg-white px-5 py-3 text-center shadow-sm transition hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 dark:border-neutral-800 dark:bg-neutral-900"
    >
      <span className="block font-semibold">{link.title}</span>
      {link.description && (
        <span className="mt-0.5 block text-xs text-neutral-500 dark:text-neutral-400">
          {link.description}
        </span>
      )}
    </a>
  );
}
