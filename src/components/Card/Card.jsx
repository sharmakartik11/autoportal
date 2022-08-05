import React from "react";
import HomePageButton from "../Buttons/HomePageButton";
import "./Card.css";

const Card = props => {
  return (
    <div className="section" id={"section" + props.id}>
      <div className="section-content">
        <h2 className="card-heading">{props.heading}</h2>
        <p className="card-verbiage">{props.children}</p>
      </div>
      <div className="main-button">
        <HomePageButton
          path={
            props.externalButtonPath
              ? props.externalButtonPath
              : "/" + props.buttonPath
          }
        />
      </div>
    </div>
  );
};

export default Card;
