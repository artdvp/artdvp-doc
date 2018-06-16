const base = process.env.GH ? "/vuepress" : "/";

module.exports = {
  title: "Artdvp Learner",
  description: "All Learning Resource for me",
  themeConfig: {
    repo: "artdvp/artdvp-doc",
    nav: [{
      text: "Learn",
      link: "/learn/"
    }, {
      text: "iBuild",
      link: "/ibuild/"
    }],
    sidebar: {
      "/learn/": [{
        title: "Learn",
        collapsable: false,
        children: [""]
      }],
      '/graphql/': [{
        title: "GraphQL",
        collapsable: false,
        children: ["", "graphql_tut", "graphql_nodejs"]
      }],
      '/sitepin/': [{
        title: "Site Pin & Learn",
        collapsable: false,
        children: ["", "pin", "todo", "selflearn", "devstack", "sitedev", "read-article", "project-interest", "aspnet"]
      }],
      '/javascript/': [{
        title: "JavaScript",
        collapsable: false,
        children: ["", "javascript_pin", "modern-js-cheatsheet", "js-learning", "you-dont-know-js"]
      }],
      '/git/': [{
        title: "Git",
        collapsable: false,
        children: ["", "git-begin"]
      }],
      '/freecodecamp/': [{
        title: "Free Code Camp",
        collapsable: false,
        children: ["", "frontend-htmlcss", "frontend-responsive", "frontend-jquery", "basic-frontend-project", "frontend-javascript", "frontend-oop-functional-programming", "frontend-basic-algorithm", "frontend-json-apis-and-ajax", "intermediate-frontend-project"]
      }],
      '/ibuild/': [{
        title: "I Build",
        collapsable: false,
        children: ["", "ibuild4learn", "ibuildvue"]
      }],
      '/css/': [{
        title: "CSS",
        collapsable: false,
        children: ["", "css-basic"]
      }],
      '/docker/': [{
        title: "Docker",
        collapsable: false,
        children: [""]
      }],
      '/foundation/': [{
        title: "Basic Foundation",
        collapsable: false,
        children: ["", "makewebsite-with-codecademy"]
      }],
      '/commandline/': [{
        title: "Command Line",
        collapsable: false,
        children: ["", "commandline-with-codecademy"]
      }],
      '/blog': [{
        title: "Blog",
        collapsable: false,
        children: ["", "20180518-1"]
      }],
      '/gitmd/': [{
        title: "Git Markdown",
        collapsable: false,
        children: ["", "awesome-vue", "awesome-nuxt", "best-website-should-visit"]
      }],
      '/vue/': [{
        title: "Vue.js",
        collapsable: false,
        children: ["", "vue-lynda"]
      }],
      '/note/': [{
        title: "Note",
        collapsable: false,
        children: ["", "workshop-node-vue"]
      }],
    }
  },
  serviceWorker: false
};