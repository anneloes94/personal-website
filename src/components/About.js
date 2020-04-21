import React from "react"
import './About'

export default function About() {
  return(
    <section id="about" className="s-about target-section">
        
        <div className="row narrow section-intro has-bottom-sep">
            <div className="col-full text-center">
                <h3>About</h3>
                <h1>More About Me</h1>
                <p className="lead">Here comes an introduction of me/something in a nutshell.</p>
            </div>
        </div>

        <div className="row about-content">

            <div className="col-six tab-full left">
                <h3>Hi there!</h3>

                <p>Lorem ipsum Ut eiusmod ex magna sit dolor esse adipisicing minim ad cupidatat eu veniam nostrud mollit laboris sunt magna velit culpa consectetur nostrud consectetur labore sed do.</p>

                <p>
                Lorem ipsum Nisi officia Duis irure voluptate dolor commodo pariatur occaecat aliquip adipisicing voluptate Ut in qui ea sint occaecat in commodo in in in incididunt ut sunt in Ut Duis in ut ex qui anim cupidatat cupidatat ex in non dolore labore ea amet cillum ea qui dolor nisi sed velit mollit exercitation ex fugiat labore in deserunt culpa laborum culpa anim dolore laboris amet irure mollit proident velit fugiat aute ea elit magna consequat qui officia quis elit Duis dolor esse cupidatat tempor proident voluptate aliqua ex cupidatat do eiusmod veniam irure laborum ut magna nostrud dolore ullamco commodo elit sit magna aliqua laborum veniam officia dolor.	
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