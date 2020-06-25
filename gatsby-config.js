const config = require('./src/data/config');

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  /* definition of metadata for the site */
  siteMetadata: {
    title: `IaLoiG portfolio`,
  },
  /* gatsby sass plugin */
  plugins: [
    `gatsby-plugin-sass`,
    //With this plugin, attributes you add in their component, 
    //e.g. title, meta attributes, etc. will get added to the static HTML pages Gatsby builds.
    'gatsby-plugin-react-helmet',
    //To automatically create pages with .mdx from other sources
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/content/`,
      },
    },
    //support for mdx files (markdown file with the support of jsx)
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          posts: require.resolve("./src/components/common/Templates/posts-layout.js"),
          default: require.resolve("./src/components/common/Templates/default-page-layout.js"),
        },
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "posts",
        path: `${__dirname}/content/posts`,
      }
    },
  {
    resolve: "gatsby-source-graphql",
    options: {
      typeName: "GitHub",
      fieldName: "github",
      url: "https://api.github.com/graphql",
      // HTTP headers
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
      // Additional options to pass to node-fetch
      fetchOptions: {}
    }
  }]
};
