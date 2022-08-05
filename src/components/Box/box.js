import React from "react";
import image from "../../assets/img/lleaseVsLoan.jpg";
import "./box.css";

function Box() {
  return (
    <div class="row text-center inner" id="portfolio">
      <div class="col-sm-3">
        <div class="feature-content">
          <img src={image}></img>
          <h2 class="feature-content-title blue-text">Lease Vs. Loan</h2>
          <p class="feature-content-description">
            Review the benefits of leasing vs. financing your new Jaguar.
          </p>
          <div class="primary-blue-button">
            <a href="#" class="feature-content-link green-btn">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Box;
