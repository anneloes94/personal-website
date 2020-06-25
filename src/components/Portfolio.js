import React from "react";
import "./Portfolio.css";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

export default function Portfolio() {
  const projects = [
    {
      title: "Newsletter signup page",
      image_URL: "https://raw.githubusercontent.com/anneloes94/newsletter-signup/master/docs/screenshot_home.png",
      project_URL: "https://example-newsletter.herokuapp.com/",
      description: "This Express app is meant as part of any webpage requiring a signup page for newsletters. It sends the signup data to Mailchimp's api and registers it in your mailing list."

    },
    {
      title: "To do list",
      image_URL: "https://raw.githubusercontent.com/anneloes94/To-Do-list/master/docs/Screenshot.png",
      project_URL: "https://anneloes94-to-dos.herokuapp.com/",
      description: "This Express app shows you your to do's for the day. The page is rendered with EJS."
    },
    {
      title: "Scrabble",
      image_URL: "https://raw.githubusercontent.com/anneloes94/scrabble/master/docs/Screenshot_terminal.png",
      project_URL: "https://github.com/anneloes94/scrabble",
      description: "This game of Scrabble can be played in your terminal. A hand of letters gets dealt to you, from which you can try to make words worth the highest amount of points. Afterwards you can decide whether you would like to replay the hand, get a new hand or end the game."
    },
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
      image_URL:
        "https://raw.githubusercontent.com/anneloes94/jungle-rails/master/docs/Jungle_homepage.png",
      project_URL: "https://github.com/anneloes94/jungle-rails",
      description:
        "A mini e-commerce application built with Rails 4.2 for purposes of learning Rails by example, and tested with RSpec and Capybara. Jungle's home page displays products which a user can add to their cart and pay for (using the paying platform Stripe). An admin using HTTP basic authentication can add products and view the amount of products and categories.",
    },
    {
      title: "Scheduler",
      image_URL:
        "https://raw.githubusercontent.com/anneloes94/scheduler/master/docs/Scheduler_Form.png",
      project_URL: "https://scheduler-lh.netlify.app/",
      description:
        "Interview Scheduler is a one-page web application built in React, and tested with Jest and Cypress. It allows students to schedule an appointment with an interviewer in a calendar style structure. Students can only book an appointment with interviewers available for that day. A user can create, edit and delete an appointment.",
    },
    {
      title: "Tweeter",
      image_URL:
        "https://raw.githubusercontent.com/anneloes94/tweeter/master/docs/MakingTweet.png",
      project_URL: "https://tweeter-lh.herokuapp.com/",
      description:
        "Tweeter is a simple, single-page Twitter clone that was built to practice HTML, CSS, JS, jQuery and AJAX front-end skills, and Node and Express (interacting with a JSON API) back-end skills. User can read Tweets, add Tweet texts (up until 140 characters), and navigate to the new Tweet section.",
    },
    {
      title: "TinyApp",
      image_URL:
        "https://raw.githubusercontent.com/anneloes94/tinyapp/master/docs/TinyApp_MyURLs.png",
      project_URL: "https://tinyapp-lh.herokuapp.com/",
      description:
        "TinyApp is a full stack web application built with Node and Express that allows users to shorten long URLs (à la bit.ly). TinyApp allows users to shorten new URLs, see an overview of their created URLs, and edit them. The shortened URLS can be shared with users that do not have an account.",
    },
    {
      title: "Simon's game",
      image_URL:
        "https://raw.githubusercontent.com/anneloes94/Simon-game/master/Screenshot.png",
      project_URL: "https://anneloes94.github.io/Simon-game/",
      description:
        "Originally from the 80s, this simple memory game requires a player to remember and reproduce a sequence of colours in the right order. It is built with HTML, CSS and jQuery.",
    },
    {
      title: "Drum kit",
      image_URL:
        "https://raw.githubusercontent.com/anneloes94/drum-kit/master/docs/screenshot.png",
      project_URL: "https://anneloes94.github.io/drum-kit/",
      description:
        "A static webpage that provides a drumkit that can be played by either clicking the instrument or pressing a key. It is built with HTML, CSS and JavaScript.",
    },
    {
      title: "Dice roller",
      image_URL:
        "https://raw.githubusercontent.com/anneloes94/dicee_game/master/main_page.png",
      project_URL: "https://anneloes94.github.io/dicee_game/",
      description:
        "A simple two-player game of rolling dice. Who will roll the highest - Mark or Elon? Built in HTML, CSS and JS.",
    },
    {
      title: "TinDog",
      image_URL:
        "https://raw.githubusercontent.com/anneloes94/tindog-mock/master/docs/Landing_laptop.png",
      project_URL: "https://anneloes94.github.io/tindog-mock/",
      description:
        "Tindog is a static dating webpage for dogs built with HTML, CSS and Bootstrap.",
    },
  ];

  return (
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
              style={{
                background: `url('${project.image_URL}') no-repeat center center`,
              }}
            >
              <div className="inner"
              style={{
                backgroundColor: `rgb(180, 180, 180, 0.2)`,
                paddingTop: `20px`
              }}
              >
                <h1>{project.title}</h1>
                <p>{project.description}</p>
                <button>
                  {" "}
                  <a
                    href={project.project_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View me
                  </a>
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
