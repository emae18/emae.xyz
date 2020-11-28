
import React from "react"
import Image from "./image"
import "../styles/_home.scss"

const Home = () => (
  <div className="caja">
      <div>
          <h1 className="no-selec">Emanuel Vilte</h1>
          <h3>
              <span className="no-selec">Developer</span> |<span className="no-selec"> Runner </span> | <span className="no-selec">Guitarrist</span>
          </h3>
          <p>
              I am a responsible, proactive, punctual young professional
              <br/>
              with an interest in developing products with the best quality.
          </p>
          <button>About Me</button>.
         
      </div>
      <div>
          <Image></Image>
      </div>
      
      {/*<Image></Image>*/}
  </div>
)

export default Home