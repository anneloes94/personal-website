import React from 'react'
import './Projects.css'
import Project from "./Project"

export default function Projects() {
  const projects = [{
    name: "Project name",
    image_URL: "images/portfolio/projects/g-bicycle.jpg",
    project_URL: "github.com/anneloes94",
    description: "Yada yada yada lorem ipsum, this is a project"}
  ]
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
          {projects.map(project => {
            return(
              <Project 
                name={project.name}
                image_URL={project.image_URL}
                project_URL={project.project_URL}
                description={project.description}
              />
            )
          })}
        </div> 
      </div>

    </section>
  )
}