const base = process.env.GH ? "/vuepress" : "/";

module.exports = {
  title: "Artdvp Learner",
  description: "All Learning Resource for me",
  themeConfig: {
    repo: "artdvp/artdvp-doc",
    nav: [{ text: "Learn", link: "/learn/" }],
    sidebar: {
      "/learn/": [
        {
          title: "Learn",
          collapsable: false,
          children: [""]
        }
      ],
      '/site-inspiration/': [
        {
          title: "Site Inspiration",
          collapsable: false,
          children: ["","sitedev"]
        }
      ],
      '/graphql/': [
        {
          title: "GraphQL",
          collapsable: false,
          children: ["","graphql-tut"]
        }
      ],
    }
  },
  serviceWorker: false
};
