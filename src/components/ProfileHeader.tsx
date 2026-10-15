import Image from "next/image";

type Props = {
  name: string;
  bio: string[];
  image: string;
};

export default function ProfileHeader({ name, bio, image }: Props) {
  return (
    <header className="flex flex-col items-center text-center">
      {/* 흰 테두리 + 따뜻한 그림자로 살짝 떠 있는 느낌 */}
      <div className="rounded-full bg-white/70 p-1.5 shadow-[0_18px_40px_-14px_rgba(150,80,40,0.45),0_2px_6px_rgba(150,80,40,0.08)] ring-1 ring-white/80 dark:bg-white/10 dark:shadow-[0_18px_40px_-14px_rgba(0,0,0,0.7)] dark:ring-white/10">
        <Image
          src={image}
          alt={`${name} 프로필 사진`}
          width={128}
          height={128}
          priority
          // 원격 이미지(placehold.co는 SVG 응답)와 SVG는 최적화 없이 그대로 사용
          unoptimized={image.endsWith(".svg") || image.startsWith("http")}
          className="h-28 w-28 rounded-full object-cover sm:h-32 sm:w-32"
        />
      </div>
      <h1 className="mt-6 text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-50">{name}</h1>
      <div className="mt-2 space-y-1 text-[15px] leading-relaxed text-stone-600 dark:text-stone-400">
        {bio.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </header>
  );
}
