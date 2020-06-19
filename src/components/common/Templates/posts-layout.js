import React from "react"
import Layout from "../Layout"
import { graphql } from "gatsby"


export default function Template (props) {
	console.log("props=", props)
  	const post = props.data.mdx
	console.log("post=", post)
	
  	return (
  	  	<Layout>
  	  		<h1>{post.frontmatter.title}</h1>
  	  		<h3>{post.frontmatter.description}</h3>
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