import React from "react"
import {Link, useStaticQuery} from "gatsby"


export default function Layout ({children}) {
    //using static query cause Layout is not a page component,
    //and is not possible to use GraphQL queries
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `
    )

    return(
        <div className="site-wrapper">
            <header className="site-header">
                <div className="site-title">
                    <Link to="/">{data.site.siteMetadata.title}</Link>
                </div>
                <Link to="/about/">About</Link>
            </header>

            {children}
            
            <footer className="site-footer">
                <h1>Footer</h1>
            </footer>
            
        </div>
    )
}
