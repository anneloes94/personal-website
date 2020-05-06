import React from 'react'
import './Portfolio.css'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';


export default function Portfolio() {

  const projects = [
    {
      title: "Happy Brauer",
      image_URL:
        "https://raw.githubusercontent.com/anneloes94/Happy-Hour/master/docs/BarCrawlFeature5.png",
      project_URL: "https://github.com/anneloes94/Happy-Hour",
      description:
        "A web application that finds a user's nearest happy hours in Toronto. This web app uses Google Maps API and Google Directions API. It was built using ReactJS on the front-end, Node.JS on the backend and PostGreSQL for the database.",
    },
    {
      title: "Jungle on Rails",
      image_URL: "https://raw.githubusercontent.com/anneloes94/jungle-rails/master/docs/Jungle_homepage.png",
      project_URL: "https://github.com/anneloes94/jungle-rails",
      description:
        "A mini e-commerce application built with Rails 4.2 for purposes of learning Rails by example, and tested with RSpec and Capybara. Jungle's home page displays products which a user can add to their cart and pay for (using the paying platform Stripe). An admin using HTTP basic authentication can add products and view the amount of products and categories.",
    },
    {
      title: "Scheduler",
      image_URL: "https://raw.githubusercontent.com/anneloes94/scheduler/master/docs/Scheduler_Form.png",
      project_URL: "https://scheduler-lh.netlify.app/",
      description:
        "Interview Scheduler is a one-page web application built in React, and tested with Jest and Cypress. It allows students to schedule an appointment with an interviewer in a calendar style structure. Students can only book an appointment with interviewers available for that day. A user can create, edit and delete an appointment.",
    },
    {
      title: "Tweeter",
      image_URL: "https://raw.githubusercontent.com/anneloes94/tweeter/master/docs/MakingTweet.png",
      project_URL: "https://tweeter-lh.herokuapp.com/",
      description:
        "Tweeter is a simple, single-page Twitter clone that was built to practice HTML, CSS, JS, jQuery and AJAX front-end skills, and Node and Express (interacting with a JSON API) back-end skills. User can read Tweets, add Tweet texts (up until 140 characters), and navigate to the new Tweet section.",
    },
    {
      title: "TinyApp",
      image_URL: "https://raw.githubusercontent.com/anneloes94/tinyapp/master/docs/TinyApp_MyURLs.png",
      project_URL: "https://tinyapp-lh.herokuapp.com/",
      description:
        "TinyApp is a full stack web application built with Node and Express that allows users to shorten long URLs (à la bit.ly). TinyApp allows users to shorten new URLs, see an overview of their created URLs, and edit them. The shortened URLS can be shared with users that do not have an account.",
    },
    {
      title: "TinDog",
      image_URL: "https://raw.githubusercontent.com/anneloes94/tindog-mock/master/docs/Landing_laptop.png",
      project_URL: "https://anneloes94.github.io/tindog-mock/",
      description: 
        "Tindog is dating webpage for dogs built with HTML, CSS and Bootstrap."
    }
  ];

  return(
    <section id="works" className="s-works target-section">

      <div className="row narrow section-intro has-bottom-sep">
        <div className="col-full">
          <h3>Portfolio</h3>
          <h1>See My Latest Projects.</h1>
        </div>
      </div>

      <div className="row">
        <Slider className="slider-wrapper">
          {projects.map((project, index) => (
          <div
            key={index}
            className="slider-content"
            style={{ background: `url('${project.image_URL}') no-repeat center center` }}
          >
            <div className="inner">
              <h1>{project.title}</h1>
              <p>{project.description}</p>
              <button> <a href={project.project_URL} target="_blank" rel="noopener noreferrer">View me</a></button>
            </div>
          </div>
        ))}
		    </Slider>
      </div>

    </section>
  )
}