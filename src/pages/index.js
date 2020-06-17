import React from "react"
import Layout from "../components/layout"
import Projects from "../components/projects"


export default function Home({data}) {
	return (
		<Layout>
			<title>{data.site.siteMetadata.title}</title>
			<h1>Index page</h1>

      <Projects />
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