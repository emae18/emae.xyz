import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styles/_header.scss"
const f = ()=>{
      const navLinks= document.querySelector('.nav-links');
      const links = document.querySelectorAll('.nav-links li');
      navLinks.classList.toggle("open");
      links.forEach(link=>{
        link.classList.toggle("fade");
      });
}

const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <div className="hamburger" role="button" tabIndex={0} onClick={()=>{f()}} onKeyDown={()=>{f()}}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <ul className="nav-links">
        <li ><Link to="/" activeClassName="no-select" className="no-select">HOME</Link></li>
        <li><Link  to="/" activeClassName="no-select" className="no-select" >SERVICES</Link></li>
        <li><Link to="/experience" activeClassName="no-select" className="no-select">EXPERIENCE</Link></li>
        <li><Link  to="/about" activeClassName="no-select" className="no-select"  >CONTACT ME</Link>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
