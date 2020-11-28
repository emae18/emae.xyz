import React from "react"
import "../styles/_contactMe.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { config } from "@fortawesome/fontawesome-svg-core"
import {
  faAddressCard,
  faAt,
  faMapMarked,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons"
config.autoAddCss = false

const ContactMe = () => (
  <div className="caja2">
    <div className="addressInfo">
      <h2>
        <span>
          <FontAwesomeIcon icon={faAddressCard} />
        </span>
        Address Information
      </h2>
      <h3>
        <span>
          <FontAwesomeIcon icon={faMapMarked} />
        </span>
        San Salvador de Jujuy, Jujuy, Argentina
      </h3>
      <h3>
        <span>
          <FontAwesomeIcon icon={faMobileAlt} />
        </span>
        +543886864008
      </h3>
      <h3>
        <span>
          <FontAwesomeIcon icon={faAt} />
        </span>
        eliasvilte1@gmail.com
      </h3>
    </div>
    <div className="formulario">
      <form method="post" action="#">
        <label>
          <h4>Name</h4>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your first name, e.g. Nicholas"
          />
        </label>
        <label>
          <h4>Email</h4>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your first name, e.g. Nicholas"
          />
        </label>
        <label>
          <h4>Subject</h4>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Your first name, e.g. Nicholas"
          />
        </label>
        <label>
          <h4>Message</h4>
          <textarea name="message" id="message" rows="5" />
        </label>
        <div>
          <button type="submit">Send</button>
          <input className="clear" type="reset" value="Clear" />
        </div>
      </form>
    </div>
  </div>
)

export default ContactMe
