import React from "react"

export default function Project(props) {
  return (
    <div className="masonry__brick">
      <div className="item-folio">

        <div className="item-folio__thumb">
          <a href={props.imgURL} className="thumb-link" title="{props.name}" dataSize="1050x700">
            <img src={props.imgURL} 
              srcset="images/portfolio/beetle.jpg 1x, images/portfolio/beetle@2x.jpg 2x" alt="project-img" />
            <span className="shadow-overlay"></span>
          </a>
        </div>

        <div className="item-folio__text">
          <h3 className="item-folio__title">
            {props.name}
          </h3>
        </div>

        <a href={props.url} className="item-folio__project-link" title="Project link">
          <i className="im im-link"></i>
        </a>

        <div className="item-folio__caption">
          <p>{props.description}</p>
        </div>
      </div>

    </div>
  )
}
