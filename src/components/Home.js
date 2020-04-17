import React from 'react';

export default function Home() {
  return(
    <div class="home-content">

      <div class="row home-content__main">

        <h3>Hello There</h3>

        <h1>
            I am Anne.
            I am a full stack
            web developer based in Toronto.
        </h1>

        <div class="home-content__buttons">
            <a href="#works" class="smoothscroll btn btn--stroke">
                Latest Projects
            </a>
            <a href="#about" class="smoothscroll btn btn--stroke">
                More About Me
            </a>
        </div>

        <div class="home-content__scroll">
            <a href="#about" class="scroll-link smoothscroll">
                <span>Scroll Down</span>
            </a>
        </div>

      </div>
    </div>
  )
}