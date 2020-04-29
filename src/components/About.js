import React from "react";
import "./About.css";
import profilePicture from "../images/website_profile.jpg";
import laptopPicture from "../images/laptop.jpg"

export default function About() {
  return (
    <section id="about" className="s-about target-section">
      <div className="row narrow section-intro has-bottom-sep">
        <div className="col-full text-center">
          <h3>About</h3>
          <h1>More About Me</h1>
          <p className="lead">
            Becoming a web developer wasn't particularly my childhood's dream. Let me
            take you on my unconventional journey towards web development.
          </p>
        </div>
      </div>

      <div className="row about-content">
        <div className="col-six tab-full left">
          <img src={profilePicture} alt="profile" />
        </div>

        <div className="col-six tab-full right">
          <h3>Hi there!</h3>

          <p>
            When I was in high school, I wanted to become a doctor to help
            people. In 2012, I started my Bachelor in Biomedical Sciences, but
            there was one problem: I didn't like biochemistry at all. I soon got
            discouraged in my studying, and I eventually switched to do a
            Bachelor's in International Development studies.
          </p>

          <p>
            While discussing, reading, and writing about development issues such
            as poverty, environmental degradation, and urbanization, <strong>I
            discovered what it was like to be truly passionate about what you
            do</strong>.
          </p>
        </div>
      </div>

      <div className="row about-content">
        <div className="col-six tab-full left">
          <p>
            <strong>But something was still missing.</strong> I realized that my field of studies
            didn't allow me to be creative, to build things from scratch. During
            my search for a Master's program, I stumbled upon an IT traineeship.
            My passion for coding was awakened, and I started learning HTML, CSS
            and computer science essentials in Python from home. <strong>Going through
            the well-known cycle of coding: enthusiasm, frustration, and that
            final moment of joy when things work out</strong>!
          </p>

          <p>
            In 2020, I moved to Toronto to attend a Web Development Bootcamp at
            Lighthouse Labs and pursue my career as a full-stack web developer.
            It has been a messy road, but I am so glad I have walked it!
          </p>
        </div>

        <div className="col-six tab-full right">
          <img src={laptopPicture} alt="laptop" />
        </div>
      </div>

      <div className="row about-content about-content--buttons">
        <div className="col-six tab-full left">
          <a
            href="https://www.canva.com/design/DAD0-GoqOl0/bqqrBA_LLJ5VtJeKxggozg/view?utm_content=DAD0-GoqOl0&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary full-width"
          >
            View My Resume
          </a>
        </div>
        <div className="col-six tab-full right">
          <a href="#contact" className="btn full-width">
            Hire Me Now
          </a>
        </div>
      </div>
    </section>
  );
}
