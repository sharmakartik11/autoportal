import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import FinancingSteps from "./templates/Financing Steps/FinancingSteps";
import LeaseEndInfo from "./templates/LeaseEndInfo/leaseEndInfo";
import LeaseVsLoan from "./templates/LeaseVsLoan/LeaseVsLoan";
import MainContainer from "./templates/MainContainer";
import ContactUs from "./templates/Contact Us/ContactUs";
import Glossary from "./templates/Glossary/Glossary";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={props => <MainContainer {...props} site="jaguar" />}
        />
        <Route
          exact
          path="/jaguar"
          render={props => <MainContainer {...props} site="jaguar" />}
        />
        <Route
          exact
          path="/jaguar/home"
          render={props => <MainContainer {...props} site="jaguar" />}
        />
        <Route
          path="/jaguar/financingsteps"
          render={props => <FinancingSteps {...props} site="jaguar" />}
        />
        <Route
          path="/jaguar/leasevsloan"
          render={props => <LeaseVsLoan {...props} site="jaguar" />}
        />
        <Route
          path="/jaguar/leaseendinfo"
          render={props => <LeaseEndInfo {...props} site="jaguar" />}
        />
        <Route
          path="/jaguar/glossary"
          render={props => <Glossary {...props} site="jaguar" />}
        />
        <Route
          path="/jaguar/contactus"
          render={props => <ContactUs {...props} site="jaguar" />}
        />
        <Route
          exact
          path="/landrover"
          render={props => <MainContainer {...props} site="landrover" />}
        />
        <Route
          exact
          path="/landrover/home"
          render={props => <MainContainer {...props} site="landrover" />}
        />
        <Route
          path="/landrover/leasevsloan"
          render={props => <LeaseVsLoan {...props} site="landrover" />}
        />
        <Route
          path="/landrover/leaseendinfo"
          render={props => <LeaseEndInfo {...props} site="landrover" />}
        />
        <Route
          path="/landrover/financingsteps"
          render={props => <FinancingSteps {...props} site="landrover" />}
        />
        <Route
          path="/landrover/glossary"
          render={props => <Glossary {...props} site="landrover" />}
        />
        <Route
          path="/landrover/contactus"
          render={props => <ContactUs {...props} site="landrover" />}
        />
      </Switch>
    </Router>
  );
}

export default App;