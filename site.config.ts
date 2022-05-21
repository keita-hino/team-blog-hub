export const config = {
  siteMeta: {
    title: "Diddyworks Team Blog Hub",
    teamName: "diddyworks Inc.",
    description: "RSS based blog starter kit for teams.",
  },
  siteRoot:
    // TODO: 本番環境のURLが決まったら書き換える
    process.env.NODE_ENV === "production"
      ? "https://team-blog-hub.vercel.app"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Company",
      href: "https://diddyworks.co.jp/",
    }
  ],
};
