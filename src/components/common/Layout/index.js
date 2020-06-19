import React from "react"
import {Link} from "gatsby"
import SEO from "../../common/SEO"
import Navigation from "./navigation"
import Footer from "./footer"


import { labelSite } from "../../../data/config"

export default function Layout ({children}) {

    return(
        <>
        <SEO/>
        <div className="site-wrapper">
            <header className="site-header">
                <div className="site-title">
                    <Link to="/">{labelSite}</Link>
                </div>
                <Navigation/>
            </header>

            {children}
            
            <Footer/>
        </div>
        </>
    )
}
