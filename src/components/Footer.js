import React from 'react';
import './Footer.css'

export default function Footer() {
  return(
    <footer>
      <div className="row">
        <div className="col-full">

          <div className="footer-logo">
            <a className="footer-site-logo" href="#0"><img src="images/logo.png" alt="Homepage" /></a>
          </div>

          <ul className="footer-social">
            <li><a href="#0">
              <i className="im im-facebook" ariaHidden="true"></i>
              <span>LinkedIn</span>
            </a></li>
            <li><a href="#0">
              <i className="im im-twitter" ariaHidden="true"></i>
              <span>Github</span>
            </a></li>
            <li><a href="#0">
              <i className="im im-instagram" ariaHidden="true"></i>
              <span>Instagram</span>
            </a></li>
            <li><a href="#0">
              <i className="im im-behance" ariaHidden="true"></i>
              <span>Behance</span>
            </a></li>
            <li><a href="#0">
              <i className="im im-pinterest" ariaHidden="true"></i>
              <span>Pinterest</span>
            </a></li>
          </ul>
                
        </div>
      </div>

      <div className="row footer-bottom">

        <div className="col-twelve">
          <div className="copyright">
            <span>© Anneloes van Kesteren 2020</span> 
            <span>Design by <a href="https://www.styleshout.com/">styleshout</a></span>	
          </div>

          <div className="go-top">
            <a className="smoothscroll" title="Back to Top" href="#top"><i className="im im-arrow-up" aria-hidden="true"></i></a>
          </div>
        </div>

      </div>

    </footer>
  )
}