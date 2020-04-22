import React from 'react'
import './Projects.css'
import Project from "./Project"

export default function Projects() {
  const projects = [{}]
  return(
    <section id="works" className="s-works target-section">

      <div className="row narrow section-intro has-bottom-sep">
        <div className="col-full">
          <h3>Portfolio</h3>
          <h1>See My Latest Projects.</h1>
          
          <p className="lead">Lorem ipsum Dolor adipisicing nostrud et aute Excepteur amet commodo ea dolore irure esse Duis nulla sint fugiat cillum ullamco proident aliquip quis qui voluptate dolore veniam Ut laborum non est in officia.</p>
        </div>
      </div>

      <div className="row masonry-wrap">
        <div className="masonry">
          {}
          <Project />
          {/* ! PROJECTS ! */}
        </div> 
      </div>

    </section>
  )
}