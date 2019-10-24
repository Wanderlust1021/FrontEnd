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
  let { path, url } = useRouteMatch();
  return (
    <WrapDiv img={img}>
      <MainStyled>
        <NavBarStyled>
          <NavLink
            to={`${url}/login`}
            activeStyle={{
              fontWeight: "bold",
              color: "#0069d9",
              fontFamily: "ABeeZee"
            }}
          >
            <h5> SIGN IN </h5>
          </NavLink>
          <NavLink
            to={`${url}/signup`}
            activeStyle={{
              fontWeight: "bold",
              color: "white",
              fontFamily: "ABeeZee"
            }}
          >
            <h5> JOIN </h5>
          </NavLink>
        </NavBarStyled>
        <Switch>
          <Route exact path={path} component={Login} />
          <Route path={`${path}/login`} render={props => <Login {...props} />} />
          <Route  path={`${path}/signup`} render={props => <SignUp {...props} />} />
        </Switch>
      </MainStyled>
    </WrapDiv>
  );
};

export default Authentication;
