import React from "react";
import "./button.css";
import { Link } from "react-router-dom";

function HomePageButton(props) {
  const url = props.path;
  return (
    <div class={"primary-blue-button " + props.variant}>
      <a href={url}>
        <div className="feature-content-link">
          {props.buttonText || "Learn More"}
        </div>
      </a>
    </div>
  );
}

export default HomePageButton;
