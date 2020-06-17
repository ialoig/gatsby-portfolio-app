import React from "react"
import Layout from "../components/layout"

export default function About({ data }) {
    return(
        <Layout>
            <title>About | {data.site.siteMetadata.title}</title>
            <h1>About page</h1>
            <p>Here some information about gatsby-config.js:</p>
            <ul>
                <li>Title: {data.site.siteMetadata.title}</li>
            </ul>
        </Layout>
    )
}



export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`