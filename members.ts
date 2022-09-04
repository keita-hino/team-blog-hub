import { Member } from "@src/types";

export const members: Member[] = [
  {
    id: "keita_hino",
    name: "日野恵太",
    role: "Tech Lead",
    bio: "プログラム大好き芸人",
    avatarSrc: "/avatars/keita_hino.jpg",
    sources: [
      "https://zenn.dev/keita_hino/feed",
      "https://qiita.com/_kt15_/feed"
    ],
    twitterUsername: "_kt15_"
  },
  {
    id: "tatsuya_sasaki",
    name: "佐々木達也",
    role: "Engineer",
    bio: "coming soon...",
    avatarSrc: "/avatars/tatsuya_icon.jpeg",
    sources: ["https://www.st-0q.com/index.xml"],
    twitterUsername: "st_0q",
  },
  {
    id: "yuta_sano",
    name: "佐野優太",
    role: "Engineer",
    bio: "coming soon...",
    avatarSrc: "/avatars/sano_icon.jpeg",
    sources: [
      "https://qiita.com/snyt45/feed",
      "https://snyt45.github.io/weneedfeed-snyt45com/feeds/snyt45com.xml"
    ],
    twitterUsername: "snyt45"
  }
];
