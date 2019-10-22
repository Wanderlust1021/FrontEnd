import React from "react";
import { Route, NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "./State/ActionCreators";
import PrivateRoute from "./PrivateRoute";
import styled from "styled-components";
import img from "./Images/forestGreen.png";

// components
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Experiences from "./components/Experiences";

const App = props => {
  return (
    <WrapDiv>
    
      <NavBarStyled>
        <div>
          <NavLink
            to="/experiences"
            activeStyle={{
              fontWeight: "bold",
              color: "#0069d9",
              fontFamily: "ABeeZee"
            }}
          >
            <h6> explore experiences </h6>
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/"
            activeStyle={{
              fontWeight: "bold",
              color: "#0069d9",
              fontFamily: "ABeeZee"
            }}
          >
            <h5> log in </h5>
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/signUp"
            activeStyle={{
              fontWeight: "bold",
              color: "white",
              fontFamily: "ABeeZee"
            }}
          >
            <h5> sign up </h5>
          </NavLink>
          <div>
            <NavLink to="/">
              <h5>log out</h5>
            </NavLink>
          </div>
        </div>
      </NavBarStyled>

      <PrivateRoute path="/experiences" component={Experiences} />
      <MainStyled>
        <Route exact path="/" render={props => <Login {...props} />} />
        <div>
          <div>
            <h6>
              <Link to="/signUp"> Don't have an account? Sign Up </Link>
            </h6>
          </div>
        </div>
        <Route exact path="/signUp" render={props => <SignUp {...props} />} />
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
