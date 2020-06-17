import React from "react"
import {useStaticQuery} from "gatsby"
import { graphql } from 'gatsby'
import {Grid, Item, Card, Content} from "./styles"


export default function Projects() {
    
    //using static query cause Layout is not a page component,
    //and is not possible to use GraphQL queries
    const data = useStaticQuery(
        graphql`
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
    )
    const repo = {
        repositories: data.github.viewer.repositories.edges
    }
    return(
        <div>
            <h1>Projects</h1>
            <Grid>
                {repo.repositories.map(obj => 
                    <Item key={obj.node.id} as="a" href={obj.node.url} target="_blank" rel="noopener noreferrer">
                        <Card>
                            <Content>
                                <h4>{obj.node.name}</h4>
                                <p>{obj.node.description}</p>
                            </Content>
                        </Card>
                    </Item>
                )}
            </Grid>
        </div>
    )
}