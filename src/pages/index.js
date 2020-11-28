import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from "../components/home"
import ImgBack from "../components/imgBack"

const IndexPage = () => {
 
  return(
    <ImgBack >
      <Layout >
        <SEO title="Home" />
        <Home></Home>
      </Layout>
    </ImgBack>
  )
}
export default IndexPage
