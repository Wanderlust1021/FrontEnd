import React from "react";
import { Route, NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../state/ActionCreators";
import img from '../images/forestGreen.png';

import {
  WrapDiv,
  NavBarStyled,
  MainStyled
} from '../styles/auth_styles';

// components
import Login from "./Login";
import SignUp from "./SignUp";

const Authentication = props => {
  return (
    <WrapDiv img={img}>
      <MainStyled>
        <NavBarStyled>
          <NavLink
            to="/"
            activeStyle={{
              fontWeight: "bold",
              color: "#0069d9",
              fontFamily: "ABeeZee"
            }}
          >
            <h5> SIGN IN </h5>
          </NavLink>
          <NavLink
            to="/signUp"
            activeStyle={{
              fontWeight: "bold",
              color: "white",
              fontFamily: "ABeeZee"
            }}
          >
            <h5> JOIN </h5>
          </NavLink>
        </NavBarStyled>
        <Route exact path="/" render={props => <Login {...props} />} />
        <div>
          <div>
            <h6>
              <Link to="/signUp"> Don't have an account? Join </Link>
            </h6>
          </div>
        </div>
        <Route  path="/signUp" render={props => <SignUp {...props} />} />
      </MainStyled>
    </WrapDiv>
  );
};


const mapStateToProps = state => {
  return {
    test: state.appState.test
  };
};

export default connect(
  mapStateToProps,
  actionCreators
)(Authentication);
