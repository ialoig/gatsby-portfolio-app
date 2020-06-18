import React from "react"
import {Link} from "gatsby"

export default function Navigation() {
    return(
        <>
            <nav className="navigation">
                <Link to="/projects/">Projects</Link>
                <Link to="/contact/">Contact</Link>
            </nav>
        </>
    )
}