import React, { useState } from "react";
import Footer from "../../components/Footer/footer.js";
import "./financingsteps.css";
import { Component } from "react";
import Navbar from "../../components/HeaderBar/Navbar.js";
import LandRoverFooter from "../../components/Footer/landRoverFooter.js";
import $ from "jquery";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class FinancingSteps extends Component {
  async componentWillMount() {
    let data = require("../../data/" + this.props.site + ".jsx").default;
    this.MasterData = data;
  }
  componentDidMount() {
    $(window).on("scroll", function() {
      if ($(window).scrollTop()) {
        $("nav").addClass("black");
      } else {
        $("nav").removeClass("black");
      }
    });

    let favIcon = document.getElementById("favicon");
    favIcon.href =
      "/" + (this.props.site ? this.props.site + "-" : "") + "favicon.ico";

    if (this.props.site === "jaguar") {
      // createLink.href = "./jag-favicon.ico";
      document.title = "Financing Steps | Jaguar Financial Group | Chase.com";
    }
    if (this.props.site === "landrover") {
      // createLink.href = "./lr-favicon.ico";
      document.title =
        "Financing Steps | Land Rover Financial Group | Chase.com";
    }
  }
  render() {
    return (
      <div>
        <Navbar
          site={this.props.site}
          brand={this.MasterData.brand}
          logo={this.MasterData.logo}
          grouplogo={this.MasterData.grouplogo}
        />
        <div className="section" id="finsteps">
          {/* <Link to="/jaguar/financingsteps">
          <button> Go Back</button>
        </Link> */}
          <div className="title-section">
            <h4>FINANCING STEPS</h4>
          </div>
          <button className="btn">
            <a
              target="_blank"
              href={this.MasterData.links.financingSteps.getStarted}
            >
              GET STARTED
            </a>
          </button>
        </div>

        <div>
          <div className="body-fs">
            <div className="body-header">
              <h3>
                READY TO LEASE OR PURCHASE YOUR NEXT{" "}
                {this.props.site === "jaguar" ? "JAGUAR" : "LAND ROVER"}
              </h3>
            </div>
            <div className="body-subheader">
              <h4>
                Select and finance your{" "}
                {this.props.site === "jaguar" ? "Jaguar" : "Land Rover"} in
                three steps
              </h4>
            </div>
            <div className="body-list">
              <div className="list1">
                <i className="glyphicon glyphicon-cog"></i>
                <h5>1. BUILD & PRICE</h5>
                <p>
                  Build the{" "}
                  {this.props.site === "jaguar" ? "Jaguar" : "Land Rover"}{" "}
                  perfectly suited to your lifestyle.
                </p>
              </div>
              <div className="list2">
                <i className="glyphicon glyphicon-pencil"></i>
                <h5>2. ESTIMATE PAYMENT</h5>
                <p>Estimate your monthly lease or loan payment.</p>
              </div>
              <div className="list3">
                <i className=" glyphicon glyphicon-list-alt"></i>
                <h5>3. COMPLETE APPLICATION</h5>
                <p>Apply online to see how much you may be approved for.</p>
              </div>
            </div>
            <div className="sub-main">
              <button className="btn2">
                <span>
                  <a
                    target="_blank"
                    href={this.MasterData.links.financingSteps.startHere}
                  >
                    START HERE
                  </a>
                </span>
              </button>
              <hr />
            </div>
            <div className="body-locate">
              <div className="locateus">
                <i className="glyphicon glyphicon-map-marker"></i>
                <div>
                  <button className="btn3">
                    <span>
                      <a
                        target="_blank"
                        href={
                          this.MasterData.links.financingSteps.locateRetailer
                        }
                      >
                        LOCATE A RETAILER
                      </a>
                    </span>
                  </button>
                </div>
              </div>
              <hr className="vertical" />
              <div className="mail">
                <i className="glyphicon glyphicon-envelope"></i>
                <h5>NOT READY TO FINANCE?</h5>
                <p>
                  <a
                    target="_blank"
                    href={this.MasterData.links.financingSteps.stayInformed}
                  >
                    Stay informed
                  </a>{" "}
                  about news and special offers.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        {this.props.site === "jaguar" ? <Footer /> : <LandRoverFooter />}

        {/* <Modal isOpen={modal} toggle={toggle} fade={false}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal> */}
      </div>
    );
  }
}

export default FinancingSteps;
