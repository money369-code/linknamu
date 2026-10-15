import ProfileHeader from "@/components/ProfileHeader";
import LinkCard from "@/components/LinkCard";
import ThemeToggle from "@/components/ThemeToggle";
import { profile } from "@/data/profile";

// wireframe.png 구성: 원형 프로필 사진 → 이름 → 한 줄 소개 → 링크 카드 3개(세로)
export default function Home() {
  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-sm flex-col items-center px-4 pt-20 pb-10">
      <div className="absolute right-4 top-4">
        <ThemeToggle />
      </div>

      <ProfileHeader name={profile.name} bio={profile.bio} image={profile.image} />

      <ul className="mt-6 flex w-full max-w-xs flex-col gap-4">
        {profile.links.map((link) => (
          <li key={link.id}>
            <LinkCard link={link} />
          </li>
        ))}
      </ul>
    </main>
  );
}
