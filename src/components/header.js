import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.scss"

const Header = ({ siteTitle }) => (
  <header>
    <ul>
      <li ><Link class="no-selec">Home</Link></li>
      <li><Link class="no-selec">About</Link></li>
      <li><Link class="no-selec">Services</Link></li>
      <li><Link class="no-selec">Experience</Link></li>
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
