import React, { Component } from "react";
import "./glossary.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/HeaderBar/Navbar";
import Footer from "../../components/Footer/footer";
import LandRoverFooter from "../../components/Footer/landRoverFooter";
import $ from "jquery";

class Glossary extends Component {
  constructor(props) {
    super(props);
  }

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

    if (this.props.site === "jaguar") {
      // createLink.href = "./jag-favicon.ico";
      document.title = "Glossary | Jaguar Financial Group | Chase.com";
    }
    if (this.props.site === "landrover") {
      // createLink.href = "./lr-favicon.ico";
      document.title = "Glossary | Land Rover Financial Group | Chase.com";
    }

    let favIcon = document.getElementById("favicon");
    favIcon.href =
      "/" + (this.props.site ? this.props.site + "-" : "") + "favicon.ico";
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
          <div className="title-section">
            <h4>GLOSSARY</h4>
          </div>
          <button className="btn">GET STARTED</button>
        </div>

        <div>
          <div className="body-fs">
            <div className="body-subheader">
              <h4>PAGE UNDER CONSTRUCTION</h4>
            </div>
          </div>{" "}
        </div>
        {this.props.site === "jaguar" ? <Footer /> : <LandRoverFooter />}
      </div>
    );
  }
}

export default Glossary;
