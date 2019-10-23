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





import { AuthTest } from './components/AuthTest';

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
      </Switch>
    </div>
  )
};

const mapStateToProps = state => {
  return {
    experiences: state.appState
  };
};

export default connect(
  mapStateToProps,
  actionCreators
)(App);

const WrapDiv = styled.div`
  border: 1px solid white;
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  height: 95vh;
  width: 100%;
`;

const NavBarStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 10px;
  background-color: "#a9d3e9";
  padding: "10px";
`;

const MainStyled = styled.main`
  width: 90vw;
  min-height: 40vh;
  max-width: 350px;
  margin: 70px auto;
  background: #a9d3e9;
  padding: 15px;
  opacity: 0.85;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  &:hover {
    cursor: pointer;
  }
`;
