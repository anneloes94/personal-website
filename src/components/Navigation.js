import React from "react";
import "./Navigation.css";

export default function Navigation() {
  return (
    <header className="s-header sticky offset scrolling">
      <div className="header-logo">
        <a className="site-logo" href="#0">
          <span>anneloes.dev</span>
        </a>
      </div>

      <nav className="header-nav-wrap">
        <ul className="header-nav">
          <li className="current">
            <a className="smoothscroll" href="#home" title="home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about" title="about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#works" title="works">
              Projects
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact" title="contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <a className="header-menu-toggle" href="#0">
        <span>Menu</span>
      </a>
    </header>
  );
}
