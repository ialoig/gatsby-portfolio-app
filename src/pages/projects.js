import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/common/Layout"


export default function Projects({ data }) {
    
    const repo = data.github.viewer.repositories.edges

    return(
        <Layout>
            <h1>Projects</h1>
            <div className="grids">
                {repo.map(obj => 
                <article className="card" key={obj.node.id}>
                    <header>
                        <h2 className="prj-title">
                            <a href={obj.node.url} target="_blank"rel="noopener noreferrer" className="prj-link">
                                {obj.node.name}
                            </a>
                        </h2>
                        <div className="prj-meta">{obj.node.description}</div>
                    </header>
                </article>
            )}
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`
    query {
        github {
            viewer {
                repositories(first: 6) {
                    edges {
                        node {
                            id
                            name
                            updatedAt
                            description
                            url
                        }
                    }
                }
            }
        }
    }
`
