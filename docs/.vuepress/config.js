const base = process.env.GH ? "/vuepress" : "/";

module.exports = {
  title: "Artdvp Learner",
  description: "All Learning Resource for me",
  themeConfig: {
    repo: "artdvp/artdvp-doc",
    nav: [{ text: "Learn", link: "/learn/" }, {text: "iBuild", link: "/ibuild/"}],
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
          children: ["","pin","selflearn","sitedev"]
        }
      ],
      '/javascript/': [
        {
          title: "JavaScript",
          collapsable: false,
          children: ["","javascript_pin","modern-js-cheatsheet"]
        }
      ],
      '/git/': [
        {
          title: "Git",
          collapsable: false,
          children: ["","git-begin"]
        }
      ],
      '/freecodecamp/': [
        {
          title: "Free Code Camp",
          collapsable: false,
          children: ["","frontend-htmlcss","frontend-responsive"]
        }
      ],
      '/ibuild/': [
        {
          title: "I Build",
          collapsable: false,
          children: ["","ibuildvue"]
        }
      ],
      '/css/': [
        {
          title: "CSS",
          collapsable: false,
          children: ["","css-basic"]
        }
      ]
    }
  },
  serviceWorker: false
};
