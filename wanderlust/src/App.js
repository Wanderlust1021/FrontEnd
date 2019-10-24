import React from "react";
import { Route, NavLink, Link, Switch } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "./state/ActionCreators";
import PrivateRoute from "./PrivateRoute";
import styled from "styled-components";
import img from "./images/forestGreen.png";

// components
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Experiences from "./components/Experiences";
import Experience from "./components/Experience";
import Organizer from "./components/Organizer";
import Organizers from "./components/Organizers";

import HomePage from "./components/HomePage";
import Footer from "./components/Footer";






const App = props => {
  return (
    <div>
      <Switch>

        <Route  path="/auth" component={AuthTest} />
        <Route exact path="/experiences" render={
          props => (
            <HomePage {...props} >
              <Experiences />
            </HomePage>
          )
        } />
        <Route path="/experiences/:id" component={Experience} />
        <Route exact path="/organizers" render={
          props => (
            <HomePage {...props}>
              <Organizers />
            </HomePage>
          )
        } />
        <Route path="/organizers/:id" component={Organizer} />
        <Route
        path="/experiences/:id"
        render={props => (
          <UpdateExperienceForm {...props} />
        )}
      />

      </Switch>
    </div>
  )
};

const mapStateToProps = state => {
  return {
    experiences: state.appState
  };
};


export default App;
