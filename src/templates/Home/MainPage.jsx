import React, { Component } from "react";
//import "./mainpage.css";
import NavbarComp from "../../components/HeaderBar/Navbar.js";
import Footer from "../../components/Footer/footer.js";
import LandRoverFooter from "../../components/Footer/landRoverFooter.js";
import Card from "../../components/Card/Card";
import ReactFullpage from "@fullpage/react-fullpage";
import $ from "jquery";
// import { MasterData } from "../../data/jaguar";

class MainPage extends Component {
  
  async componentWillMount() {
    if(this.props.site === 'jaguar') {require('./jaguar_main.css')}
    if(this.props.site === 'landrover') {require('./landrover_main.css')}
  }

  componentDidMount() {
    const $header_top = $(".header-top");

    $header_top.find("a").on("click", function() {
      $(this)
        .parent()
        .toggleClass("open-menu");
    });

    $(window).on("scroll", function () {
      if ($(window).scrollTop()) {
        $('nav').addClass('black');
      }

      else {
        $('nav').removeClass('black');
      }
    });
  }

  getTooltips = () => {
    return this.props.masterData.sections.map(
      section => section.tooltip || section.heading
    );
  };

  render() {
    return (
      <div>
        <ReactFullpage
          navigation={true}
          navigationPosition="left"
          navigationTooltips={this.getTooltips()}
          showActiveTooltip={true}
          controlArrows={true}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                {this.props.masterData.sections.map((section, index) => {
                  return (
                    <Card
                      id={index + 1}
                      heading={section.heading}
                      buttonPath={section.buttonPath}
                      externalButtonPath={section.externalButtonPath}
                      backgroundImage={section.backgroundImage}
                    >
                      {section.verbiage}
                    </Card>
                  );
                })}
                {this.props.site === 'jaguar'? <Footer /> : <LandRoverFooter />}
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
    );
  }
}

export default MainPage;
