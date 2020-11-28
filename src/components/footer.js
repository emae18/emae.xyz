import React from "react"
import "../styles/_footer.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from "@fortawesome/fontawesome-svg-core";
import { faFacebookF,faDiscord ,faGithub,faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

config.autoAddCss = false;

const Footer = () => (
  <footer>
      <ul>
          <li><a href="https://www.facebook.com/emaevilte" target="_blank" rel="noreferrer" className="no-selec"><FontAwesomeIcon icon={faFacebookF} /> </a></li>
          <li><a href="https://discord.gg/6r84bXa" target="_blank" rel="noreferrer" className="no-selec"><FontAwesomeIcon icon={faDiscord} /> </a></li>
          <li><a href="https://github.com/emae18/" target="_blank" rel="noreferrer" className="no-selec"><FontAwesomeIcon icon={faGithub} /> </a></li>
          <li><a href="https://www.linkedin.com/in/emaevilte/" target="_blank" rel="noreferrer" className="no-selec"><FontAwesomeIcon icon={faLinkedinIn} /> </a></li>
      </ul>
      <h5>
      © 2020. All Rights Reserved | Done by Emae
      </h5>
  </footer>
)


export default Footer
