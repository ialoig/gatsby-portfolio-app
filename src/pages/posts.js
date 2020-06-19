import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/common/Layout"

export default function Posts({ data }) {
    const posts = data.allMdx.edges
    console.log("posts", posts)
    
    return(
        <Layout>
            <h1>Here {posts.length} Posts:</h1>
            <div>
                {posts.map(post =>  
                    <h2>{post.node.frontmatter.title}</h2>
                )}
            </div>
        </Layout>
    )
}
export const pageQuery = graphql` {
    allMdx {
        edges {
            node {
                frontmatter {
                date
                slug
                title
                }
            }
        }
    }
}
`