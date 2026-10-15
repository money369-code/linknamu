export type LinkItem = {
  id: string;
  title: string;
  url: string;
  description?: string;
};

export type Profile = {
  name: string;
  bio: string;
  image: string;
  links: LinkItem[];
};

// TODO: 링크 주소와 프로필 사진은 임시값입니다. 진짜 값으로 바꿔 주세요.
export const profile: Profile = {
  name: "노승혁",
  bio: "바이브코딩 연습중",
  image: "/profile.svg",
  links: [
    { id: "github", title: "GitHub", url: "https://github.com", description: "코드 저장소" },
    { id: "blog", title: "블로그", url: "https://velog.io", description: "개발 기록" },
    { id: "instagram", title: "Instagram", url: "https://instagram.com", description: "일상 사진" },
  ],
};
