import React from 'react';
import './Home.css'

export default function Home() {
  const curlyLeft = '{'
  const curlyRight = '}'

  return(
    <section id="home" className="s-home page-hero target-section" dataParallax="scroll" dataImageSrc="images/hero-bg.jpg">
      <div className="home-content">

        <div className="row home-content__main">

          {/* <h3>Hello There</h3> */}
          <div className="homeBox" >
            <h1>
              <pre></pre>"full stack web developer" : {curlyLeft} <br/>
              <pre>  "name": "Anneloes van Kesteren",</pre>
              <pre>  "location": "Toronto, Canada",</pre>
              <pre>  "tags": ["integrity", "", ""]</pre>
              {curlyRight}
            </h1>
          </div>

          <div className="home-content__buttons">
              <a href="#works" className="smoothscroll btn btn--stroke">
                  Latest Projects
              </a>
              <a href="#about" className="smoothscroll btn btn--stroke">
                  More About Me
              </a>
          </div>

          <div className="home-content__scroll">
              <a href="#about" className="scroll-link smoothscroll">
                  <span>Scroll Down</span>
              </a>
          </div>

        </div>
      </div>
    </section>
  )
}