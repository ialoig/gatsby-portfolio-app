import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/common/Layout"

export default function Posts({ data }) {
    const posts = data.allMdx.edges
    console.log("posts", posts)
    
    return(
        <Layout>
            <h1>Posts</h1>
            <div className="grids">
                {posts.map(post => 
                <article className="card" key={post.node.id}>
                    <header>
                        <h2 className="prj-title">
                            <a href={post.node.frontmatter.slug} rel="noopener noreferrer" className="prj-link">
                                {post.node.frontmatter.title}
                            </a>
                        </h2>
                        <div className="prj-meta">{post.node.frontmatter.date}</div>
                    </header>
                </article>
            )}
            </div>
        </Layout>
    )
}
export const pageQuery = graphql` {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
            node {
                frontmatter {
                    date(formatString: "MMMM DD, YYYY")
                    slug
                    title
                }
                id
            }
        }
    }
}
`