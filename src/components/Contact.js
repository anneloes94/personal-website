import React from "react";
import "./Contact.css";
import twoPeopleIcon from "../images/icons/men.svg"

export default function Contact() {
  return (
    <section id="contact" className="s-contact target-section">
      <div className="overlay"></div>

      <div className="row narrow section-intro">
        <div className="col-full">
          <h3>Contact</h3>
          <h1>Say Hello.</h1>

          <p className="lead">
            If you are looking for a junior web developer, I would love to discuss opportunities! If you are looking for someone to work on a project with, or you really just want to talk about your favourite things in life, I would be happy to connect! You can find me on LinkedIn or send me an email.
          </p>
        </div>
      </div>

      <div className="row contact__main">
        <div className="col-four tab-full contact__infos">
          <h4 className="h06">Email</h4>
          <p>
            <a href = "mailto: vankeste@ualberta.ca">vankeste@ualberta.ca</a>
            <br />
          </p>

          <h4 className="h06">LinkedIn</h4>
          <p>
            <a href="https://linkedin.com/in/anneloes-van-kesteren" target="_blank" rel="noopener noreferrer">linkedin.com/in/anneloes-van-kesteren</a>
            <br />
          </p>
        </div>
        <div className="col-eight tab-full">
          <img src={twoPeopleIcon} alt="two-people" />
        </div>
      </div>
    </section>
  );
}
