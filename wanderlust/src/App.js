import React from "react";
import { Route, NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "./State/ActionCreators";
import PrivateRoute from "./PrivateRoute";
import styled from "styled-components";
import img from "./Images/forestGreen.png";

// components
import Authentication from './components/Authentication';
import Experiences from './components/Experiences';
import Experience from './components/Experience';
import Organizers from './components/Organizers';
import Organizer from './components/Organizer';
import PrivateRoute from './components/PrivateRoute';


const App = props => {
  return (
    <div>
      <Switch>
        <Route  path="/auth" component={Authentication} />
        <PrivateRoute exact path="/experiences" component={Experiences}/>
        <PrivateRoute path="/experiences/:id" component={Experience} />
        <PrivateRoute exact path="/organizers" component={Organizers} />
        <PrivateRoute path="/organizers/:id" component={Organizer} />
      </Switch>
    </div>
  )
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
