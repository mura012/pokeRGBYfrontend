export const links = [
  { id: 1, href: "/", label: "ホーム", img: "/", text: "" },
  {
    id: 2,
    href: "/Party",
    label: "パーティー",
    img: "/party.PNG",
    text: "旅で連れていくパーティーをセットして、足りないタイプを確認できます。",
  },
  {
    id: 3,
    href: "/Experience",
    label: "経験値",
    img: "/experience.PNG",
    text: "現在のレベルから目標のレベルまでに必要な経験値が確認できます。",
  },
  {
    id: 4,
    href: "/Qa",
    label: "Q&A",
    img: "/qa.PNG",
    text: "ポケモン赤緑青ピカチューについて気になって調べたことをQ&A形式で掲載しています。",
  },
] as const satisfies readonly {
  id: number;
  href: `/${string}`;
  label: string;
  img: string;
  text: string;
}[];
