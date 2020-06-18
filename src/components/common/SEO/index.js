import React from "react"
import Helmet from 'react-helmet'
import { defaultDescription, defaultTitle, legalName, url, logo, foundingDate } from "../../../data/config"

export default function SEO() {
    const structuredDataOrganization = `{ 
		"@context": "http://schema.org",
		"@type": "Organization",
		"legalName": "${legalName}",
		"url": "${url}",
		"logo": "${logo}",
		"foundingDate": "${foundingDate}",
		"founders": [{
			"@type": "Person",
			"name": "${legalName}"
        }],
    }`

    return(
        <Helmet>
        <meta name="description" content={defaultDescription} />

        <meta property="og:url" content={`${url}`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={defaultTitle} />
        <meta property="og:description" content={defaultDescription} />
        
        <script type="application/ld+json">{structuredDataOrganization}</script>
        <title>{defaultTitle}</title>
        <html lang="en" dir="ltr" />
        </Helmet>
    )
}