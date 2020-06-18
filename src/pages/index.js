import React from "react"
import SEO from "../components/common/SEO"
import Layout from "../components/common/Layout"
import About from "../components/landing/About"


export default function Home() {
	return (
		<Layout>
      <SEO />
      <About />
		</Layout>
    )
}