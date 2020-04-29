import React from 'react';
import './Home.css'

export default function Home() {
  return(
    <section id="home" className="s-home page-hero target-section" data-parallax="scroll">
      <div className="home-content">

        <div className="row home-content__main">

          <h3>Hello There</h3>
          <h1>
              I am Anne. <br/> I am a full stack <br/> web developer based in Toronto.
          </h1>

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

      <ul className="home-social">
          <li>
              <a href="https://www.linkedin.com/in/anneloes-van-kesteren/"><i className="im im-linkedin" ariaHidden="true"></i><span>LinkedIn</span></a>
          </li>
          <li>
              <a href="https://github.com/anneloes94"><i className="im im-github" ariaHidden="true"></i><span>Github</span></a>
          </li>
      </ul> 



    </section>
  )
}