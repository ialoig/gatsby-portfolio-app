import React from "react"

import { foundingDate, author, url } from "../../../data/config"


export default function Footer() {
    return (
        <footer className="site-footer">
            <p>{foundingDate} | Made with
                <span aria-label="love" role="img"> ❤️ </span>
                by <a href={url} className="" target={"_blank"}>{author}</a>
            </p>
        </footer>
    )
}