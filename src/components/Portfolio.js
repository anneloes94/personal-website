import React from 'react'
import './Portfolio.css'
import Project from "./Project"

export default function Portfolio() {

  const projects = [
    {
      id: 1,
      name: "Happy Brauer",
      image_URL:
        "https://raw.githubusercontent.com/anneloes94/Happy-Hour/master/docs/BarCrawlFeature5.png",
      project_URL: "https://github.com/anneloes94/Happy-Hour",
      description:
        "A web application that finds a user's nearest happy hours in Toronto. This web app uses Google Maps API and Google Directions API. It was built using ReactJS on the front-end, Node.JS on the backend and PostGreSQL for the database.",
    },
    {
      id: 2,
      name: "Jungle on Rails",
      image_URL: "https://raw.githubusercontent.com/anneloes94/jungle-rails/master/docs/Jungle_homepage.png",
      project_URL: "https://github.com/anneloes94/jungle-rails",
      description:
        "A mini e-commerce application built with Rails 4.2 for purposes of learning Rails by example. Jungle's home page displays products which a user can add to their cart and pay for (using the paying platform Stripe). An admin using HTTP basic authentication can add products and view the amount of products and categories.",
    },
  ];

  return(
    <section id="works" className="s-works target-section">

      <div className="row narrow section-intro has-bottom-sep">
        <div className="col-full">
          <h3>Portfolio</h3>
          <h1>See My Latest Projects.</h1>
          
          <p className="lead">Lorem ipsum Dolor adipisicing nostrud et aute Excepteur amet commodo ea dolore irure esse Duis nulla sint fugiat cillum ullamco proident aliquip quis qui voluptate dolore veniam Ut laborum non est in officia.</p>
        </div>
      </div>



      {/* <div className="row masonry-wrap">
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
      </div> */}

    </section>
  )
}