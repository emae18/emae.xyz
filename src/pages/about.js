import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ImgBack from "../components/imgBack"
import ContactMe from "../components/contact-me"

const AboutPage = () => (
  <ImgBack>
    <Layout>
      <SEO title="About" />
      <ContactMe></ContactMe>
    </Layout>
  </ImgBack>
)
export default AboutPage
