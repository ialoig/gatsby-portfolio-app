
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
    //styled components: lets you use actual CSS syntax inside your components
    `gatsby-plugin-styled-components`,
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
