import Image from "next/image";

type Props = {
  name: string;
  bio: string;
  image: string;
};

export default function ProfileHeader({ name, bio, image }: Props) {
  return (
    <header className="flex flex-col items-center text-center">
      <Image
        src={image}
        alt={`${name} 프로필 사진`}
        width={144}
        height={144}
        priority
        unoptimized={image.endsWith(".svg")}
        className="h-36 w-36 rounded-full object-cover ring-4 ring-white shadow-md dark:ring-neutral-800"
      />
      <h1 className="mt-5 text-xl font-bold">{name}</h1>
      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{bio}</p>
    </header>
  );
}
