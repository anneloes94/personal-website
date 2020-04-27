import React from "react";
import "./About";
import profilePicture from "../images/website_profile.jpg";

export default function About() {
  return (
    <section id="about" className="s-about target-section">
      <div className="row narrow section-intro has-bottom-sep">
        <div className="col-full text-center">
          <h3>About</h3>
          <h1>More About Me</h1>
          <p className="lead">
            Becoming a web developer wasn't my childhood's dream at all. Let me
            take you on my unconventional journey towards web development.
          </p>
        </div>
      </div>

      <div className="row about-content">
        <div className="col-six tab-full left">
          <img src={profilePicture} alt="profile-picture" />
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
            as poverty, environmental degradation, and urbanization, I
            discovered what it was like to be truly passionate about what you
            do.
          </p>

          <p>
            But something was still missing. I realized that my field of studies
            didn't allow me to be creative, to build things from scratch. During
            my search for a Master's program, I stumbled upon an IT traineeship.
            My passion for coding was awakened, and I started learning HTML, CSS
            and computer science essentials in Python from home. Going through
            the well-known cycle of coding: enthusiasm, frustration, and that
            final moment of joy when things work out!
          </p>

          <p>
            In 2020, I moved to Toronto to attend a Web Development Bootcamp at
            Lighthouse Labs and pursue my career as a full-stack web developer.
            It has been a messy road, but I am so glad I have walked it!
          </p>
        </div>
      </div>

      <div className="row about-content">
        <div className="col-six tab-full right">
          <h3>I've Got Some skills.</h3>

          <ul className="skill-bars">
            <li>
              <div className="progress percent90">
                <span>90%</span>
              </div>
              <strong>HTML</strong>
            </li>
            <li>
              <div className="progress percent85">
                <span>85%</span>
              </div>
              <strong>CSS</strong>
            </li>
            <li>
              <div className="progress percent70">
                <span>70%</span>
              </div>
              <strong>JQuery</strong>
            </li>
          </ul>
        </div>

        <div className="col-six tab-full left">hello</div>
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
