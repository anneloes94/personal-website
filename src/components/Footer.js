import React from 'react';
import './Footer.css'

export default function Footer() {
  return(
    <footer>
      <div className="row">
        <div className="col-full">

          <div className="footer-logo">
            <a className="footer-site-logo" href="#top"><span>anneloes.dev</span></a>
          </div>

          <ul className="footer-social">
            <li><a href="https://www.linkedin.com/in/anneloes-van-kesteren/" target="_blank" rel="noopener noreferrer">
              <i className="im im-linkedin" ariaHidden="true"></i>
              <span>LinkedIn</span>
            </a></li>
            <li><a href="https://github.com/anneloes94" target="_blank" rel="noopener noreferrer" >
              <i className="im im-github" ariaHidden="true"></i>
              <span>Github</span>
            </a></li>
          </ul>
                
        </div>
      </div>

      <div className="row footer-bottom">

        <div className="col-twelve">
          <div className="copyright">
            <span>2020 © Anneloes van Kesteren</span> 
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