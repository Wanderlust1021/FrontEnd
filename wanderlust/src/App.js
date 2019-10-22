import React from "react";
import { Route, NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "./State/ActionCreators";
import styled from "styled-components";
import img from "./Images/forestGreen.png";

// components
import Login from "./components/Login";
import SignUp from "./components/SignUp";

const App = props => {
  return (
    // <div>
    //   <div>
    //     <NavLink to="login">log in </NavLink>
    //     <NavLink to="signup">sign up </NavLink>
    //   </div>
    //   <Switch>
    //     <Route path="/login" component={Login} />
    //     <Route path="/signup" component={SignUp}/>
    //   </Switch>
    // </div>

    <WrapDiv>
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
        <Route
          exact
          path="/"
          render={props => (
            <Login
           
            />
          )}
        />
        <div>
          <div>
            <h6>
              {" "}
              <Link to="/signUp"> Don't have an account? Join </Link>
            </h6>
          </div>
        </div>
        <Route
          exact
          path="/signUp"
          render={props => (
            <SignUp
            
            />
          )}
        />
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
  margin-right: 20px;
`;

const MainStyled = styled.main`
  width: 90vw;
  min-height: 40vh;
  max-width: 350px;
  margin: 70px auto;
  background: white;
  padding: 15px;
  opacity: 0.8;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  &:hover {
    cursor: pointer;
  
  }
`;
