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
      '/graphql/': [
        {
          title: "GraphQL",
          collapsable: false,
          children: ["","graphql_tut","graphql_nodejs"]
        }
      ],
      '/sitepin/': [
        {
          title: "Site Pin",
          collapsable: false,
          children: ["","pin","sitedev","devlog"]
        }
      ],
      '/javascript/': [
        {
          title: "JavaScript",
          collapsable: false,
          children: ["","javascript_pin"]
        }
      ]
     
    }
  },
  serviceWorker: false
};
