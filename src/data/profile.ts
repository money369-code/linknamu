export type LinkIconName = "github" | "naver-blog" | "naver-mail";

export type LinkItem = {
  id: string;
  title: string;
  url: string;
  description?: string;
  icon?: LinkIconName;
};

export type Profile = {
  name: string;
  bio: string[];
  image: string;
  links: LinkItem[];
};

// TODO: 블로그·이메일 주소는 임시값(naver.com)입니다. 진짜 값으로 바꿔 주세요.
export const profile: Profile = {
  name: "노승혁",
  bio: ["풀스택 개발자", "요즘에는 AI 개발에 관심이 많아요"],
  image: "https://placehold.co/150x150/orange/white",
  links: [
    { id: "github", title: "깃허브", url: "https://github.com/money369-code", description: "코드 저장소", icon: "github" },
    { id: "blog", title: "블로그", url: "https://naver.com", description: "개발 기록", icon: "naver-blog" },
    { id: "email", title: "이메일", url: "https://naver.com", description: "네이버 메일", icon: "naver-mail" },
  ],
};
