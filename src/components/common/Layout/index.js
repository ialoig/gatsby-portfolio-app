import React from "react"
import {Link} from "gatsby"
import Navigation from "../../landing/Navigation"

import { labelSite } from "../../../data/config"

export default function Layout ({children}) {

    return(
        <div className="site-wrapper">
            <header className="site-header">
                <div className="site-title">
                    <Link to="/">{labelSite}</Link>
                </div>
                <Navigation />
            </header>

            {children}
            
            <footer className="site-footer">
                <h1>Footer</h1>
            </footer>
            
        </div>
    )
}
