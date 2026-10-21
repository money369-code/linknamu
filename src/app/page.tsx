import ProfileHeader from "@/components/ProfileHeader";
import LinkList from "@/components/LinkList";
import ThemeToggle from "@/components/ThemeToggle";
import { profile } from "@/data/profile";

// wireframe.png 구성: 원형 프로필 사진 → 이름 → 한 줄 소개 → 링크 카드 3개(세로)
export default function Home() {
  return (
    <>
      {/* 글래스 카드 뒤로 비치는 은은한 빛 번짐 (장식용) */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-orange-200/50 blur-3xl dark:bg-orange-900/20" />
        <div className="absolute -right-20 top-1/3 h-72 w-72 rounded-full bg-rose-200/40 blur-3xl dark:bg-rose-900/15" />
        <div className="absolute -bottom-24 left-1/4 h-80 w-80 rounded-full bg-amber-100/60 blur-3xl dark:bg-amber-900/15" />
      </div>

      <main className="relative mx-auto flex min-h-dvh w-full max-w-md flex-col items-center px-6 pb-16 pt-24 sm:pt-28">
        <div className="absolute right-5 top-5">
          <ThemeToggle />
        </div>

        <ProfileHeader name={profile.name} bio={profile.bio} image={profile.image} />

        <LinkList links={profile.links} />
      </main>
    </>
  );
}
