import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="s-contact target-section">
      <div className="overlay"></div>

      <div className="row narrow section-intro">
        <div className="col-full">
          <h3>Contact</h3>
          <h1>Say Hello.</h1>

          <p className="lead">
            
          </p>
        </div>
      </div>

      <div className="row contact__main">
        <div className="col-eight tab-full contact__form"></div>
        <div className="col-four tab-full contact__infos">
          <h4 className="h06">Email</h4>
          <p>
            someone@email.com
            <br />
          </p>

          <h4 className="h06">LinkedIn</h4>
          <p>
            linkedin.com/in/someone
            <br />
          </p>
        </div>
      </div>
    </section>
  );
}
