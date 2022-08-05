import React from "react";
import { Component } from "react";
import Navbar from "../components/HeaderBar/Navbar";
import MainPage from "./Home/MainPage";
import Footer from "../components/Footer/footer";
import LandRoverFooter from "../components/Footer/landRoverFooter";

class MainContainer extends Component {
  MasterData = {};

  async componentWillMount() {
    let data = require("../data/" + this.props.site + ".jsx").default;
    this.MasterData = data;
  }

  componentDidMount() {
    // const getHeadElement = document.getElementsByTagName("head");
    // console.log(getHeadElement);
    // const createLink = document.createElement('link');
    // createLink.rel = "icon";
    let favIcon = document.getElementById("favicon");
    favIcon.href =
      "/" + (this.props.site ? this.props.site + "-" : "") + "favicon.ico";
    if (this.props.site === "jaguar") {
      // createLink.href = "./jag-favicon.ico";
      document.title =
        "When You're Ready to Lease or Buy | Jaguar Financial Group | Chase.com";
    }
    if (this.props.site === "landrover") {
      // createLink.href = "./lr-favicon.ico";
      document.title =
        "Financing a Land Rover | Land Rover Financial Group | Chase.com";
    }
    // document.head.appendChild(createLink);
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
        <MainPage site={this.props.site} masterData={this.MasterData} />
        {this.props.site === "jaguar" ? <Footer /> : <LandRoverFooter />}
      </div>
    );
  }
}

export default MainContainer;
