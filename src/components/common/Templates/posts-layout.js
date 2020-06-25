import React from "react"
import Layout from "../Layout"
import { graphql } from "gatsby"


export default function Template ({children}) {

	
  	return (
  	  	<Layout>
			{children}
  	  	</Layout>
  	)
}

//query to get post by slug
export const pageQuery = graphql`
	query ($slug: String!) {
		mdx(fields: { slug: { eq: $slug } }) {
			frontmatter {
				title
				slug
				date
			}
			html
    	}
	}
`