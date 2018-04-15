const base = process.env.GH ? '/vueoress' : '/'

module.exports = {
  title: "Artdvp Learner",
  description: "All Learning Resource for me",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Learn", link: "/learn/" },
      { text: "GraphQL", link: "/graphql/" },
      { text: "Github", link: "https://github.com/artdvp/artdvp-doc" }
    ]
  },
  serviceWorker: true
};
