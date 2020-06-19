import React from "react";

export default function Stack() {
  return(
    <section id="stack" className="s-blog target-section">

      <div className="row narrow section-intro has-bottom-sep">
          <div className="col-full">
              <h3>Stack</h3>
              <h1>Check out my tech stack.</h1>
              <p className="lead">I am most comfortable working in JavaScript (PERN stack) and JS frameworks and libraries. I also work with PHP and Python. Most importantly, I value having a varied experience in different technologies and love to shake things up! </p>
              <p>
              <a href="https://stackshare.io/anneloes94/my-stack#stack" target="_blank" rel="noopener noreferrer">Check out my complete tech stack here.</a></p>
          </div>
      </div>

      <div className="row blog-content">
        <div className="row about-content">
          <a frameborder="0" data-theme="light" data-layers="1,2,3" data-stack-embed="true" href="https://embed.stackshare.io/stacks/embed/5c5c3fb28f48372321fd512ac92a03"></a>
        </div>
      </div>
    </section>
  )
}