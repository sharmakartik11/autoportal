import React, { useState } from "react";
import HomePageButton from "../Buttons/HomePageButton";
import { useRouteMatch, Link } from "react-router-dom";
// import "./navbar.css";
// import Logo from "../../assets/images/jaguar_logo.png";
// import GroupLogo from "../../assets/images/jaguar_financial_group_logo.png"

const Navbar = props => {
  const [isToggled, setIsToggle] = useState(false);
  const Logo = require("../../assets/images/" + props.logo);
  const GroupLogo = require("../../assets/images/" + props.grouplogo);

  let MasterData = require("../../data/" + props.site + ".jsx").default;

  if (props.brand === "Jaguar") {
    require("./navbar-dark.css");
  }
  if (props.brand === "Land Rover") {
    require("./navbar-light.css");
  }

  const handleToggleClick = () => {
    setIsToggle(!isToggled);
  };
  let mainurl = "/" + props.site;
  let glossaryurl = "/" + props.site + "/glossary";
  let contacturl = "/" + props.site + "/contactus";
  return (
    <header>
      <nav className="header-top">
        <div onClick={handleToggleClick} className="menu-icon">
          <i className="fa fa-bars fa-2x"></i>
        </div>
        <Link to={mainurl}>
          <div className="logo">
            <img className="brandlogo" src={Logo} alt="Logo"></img>
            <img
              className="grouplogo"
              src={GroupLogo}
              alt="Financial Group"
            ></img>

          </div>
        </Link>
        <div>
          <ul className={isToggled ? "showing" : "menu"}>
            <li>
              <a
                href={MasterData.links.navbar.currentOffers}
                onClick="return false;"
              >
                Current Offers
              </a>
            </li>
            <li>
              <a href={glossaryurl} onClick="return false;">
                Glossary
              </a>
            </li>
            <li>
              <a href={contacturl} onClick="return false;">
                Contact Us
              </a>
            </li>
            <li>
              <div className="signIn-button">
                <HomePageButton
                  buttonText="Sign In"
                  path={MasterData.links.navbar.signIn}
                />
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
