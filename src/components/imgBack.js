
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import "../styles/_imgBack.scss"
/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

const ImgBack = ({children}) => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "pexels-kelly-lacy-2874066.jpg" }) {
        childImageSharp {
          fluid( maxWidth:1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  if (!data?.desktop?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }
  const imageData = data.desktop.childImageSharp.fluid

  return (
    <BackgroundImage
      Tag="section"
      fluid={imageData}
      className="masthead"
      fadeIn
    >
        <>{children}</>
    </BackgroundImage>
  )
}

export default ImgBack
