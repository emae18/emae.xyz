
import React from "react"
import Image from "./image"
import "./aside.scss"

const Home = () => (
  <div id="caja">
      <div>
          <h1 class="no-selec">Emanuel Vilte</h1>
          <h3>
              <span class="no-selec">Developer</span> |<span class="no-selec"> Runner </span> | <span class="no-selec">Guitarrist</span>
          </h3>
          <p>
              I am a responsible, proactive, punctual young professional
              <br/>
              with an interest in developing products with the best quality.
          </p>
          <button>About Me</button>
      </div>
      <div>
<Image></Image>
      </div>
  </div>
)

export default Home