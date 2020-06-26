import React from "react"
import Layout from "../components/common/Layout"


export default function Template ({pageContext, children}) {
	console.log("pageContext", pageContext)
  	return (
		  <Layout>
			  <h1>{pageContext.frontmatter.title}</h1>
			  <h4>{pageContext.frontmatter.date}</h4>
			  <div>{children}</div>
		  </Layout>
  	)
}
