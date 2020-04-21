import React from "react"
import './About'

export default function About() {
  return(
    <section id="about" className="s-about target-section">
        
        <div className="row narrow section-intro has-bottom-sep">
            <div className="col-full text-center">
                <h3>About</h3>
                <h1>More About Me</h1>
                <p className="lead">The path that took me to web development was not a typical one. It came with quite a few hurdles and side paths.</p>
            </div>
        </div>

        <div className="row about-content">

            <div className="col-six tab-full left">
                <h3>Hi there!</h3>

                <p>When I was in high school, I wanted to become a doctor to help people. In 2012, I started my Bachelor in Biomedical Sciences, but there was one problem: I didn't like biochemistry at all. I soon got discouraged in my studying, and I eventually switched to do a Bachelor's in International Development studies.</p>

                <p>
                Here I discovered what it was like to be passionate about what you do. 
                </p>
            </div>

            <div className="col-six tab-full right">
                <h3>I've Got Some skills.</h3>

                <ul className="skill-bars">
                    <li>
                    <div className="progress percent90"><span>90%</span></div>
                    <strong>HTML</strong>
                    </li>
                    <li>
                    <div className="progress percent85"><span>85%</span></div>
                    <strong>CSS</strong>
                    </li>
                    <li>
                    <div className="progress percent70"><span>70%</span></div>
                    <strong>JQuery</strong>
                    </li>
                </ul>
            </div>

        </div>

        <div className="row about-content about-content--buttons">

            <div className="col-six tab-full left">
                <a href="https://www.canva.com/design/DAD0-GoqOl0/bqqrBA_LLJ5VtJeKxggozg/view?utm_content=DAD0-GoqOl0&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton" target="_blank" rel="noopener noreferrer" className="btn btn--primary full-width">View My Resume</a>
            </div>
            <div className="col-six tab-full right">
                <a href="#0" className="btn full-width">Hire Me Now</a>
            </div>

        </div>

    </section>
  )
}