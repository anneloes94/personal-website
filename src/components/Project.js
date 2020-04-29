import React from "react"

export default function Project(props) {
  return (
    <div className="mySlides fade">
      <div className="numbertext">{props.id} / {props.total_projects}</div>
      <img src="img1.jpg" style={{ width: "100%" }} />
      <div className="text">Caption Text</div>
  </div>
  )
}
