import React from "react";
import { Route, NavLink, Switch, useRouteMatch } from "react-router-dom";
import img from '../images/forestGreen.png';

import {
  WrapDiv,
  NavBarStyled,
  MainStyled
} from '../styles/auth_styles';

// components
import Login from "./Login";
import SignUp from "./SignUp";

export const Authentication = props => {
  let { path } = useRouteMatch();
  return (
    <WrapDiv img={img}>
      <MainStyled>
        <NavBarStyled>
          <NavLink
            to={`/`}
            activeStyle={{
              fontWeight: "bold",
              color: "#0069d9",
              fontFamily: "ABeeZee"
            }}
          >
            <h5> SIGN IN </h5>
          </NavLink>
          <NavLink
            to={`/register`}
            activeStyle={{
              fontWeight: "bold",
              color: "white",
              fontFamily: "ABeeZee"
            }}
          >
            <h5> SIGN UP </h5>
          </NavLink>
        </NavBarStyled>
        <Switch>
          <Route exact path={path} component={Login} />
          <Route  exact path={`/`} render={props => <Login {...props} />} />
          <Route  exact path={`/register`} render={props => <SignUp {...props} />} />
        </Switch>
      </MainStyled>
    </WrapDiv>
  );
};

export default Authentication;
