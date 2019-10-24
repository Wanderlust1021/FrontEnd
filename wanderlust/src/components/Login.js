import React, { useState } from "react";
import { connect } from "react-redux";
import { loginSuccess, authFailure, startAuth } from "../state/ActionCreators";
import * as reducers from "../state/Reducers";
import axiosWithAuth from "../axiosWithAuth";
import axios from "axios";

import {
  Button,
  FormGroup,
  FormControl,
  FormLabel,
  Form
} from "react-bootstrap";
import { Icon } from "antd";

const loginUrl = "https://wanderlust-ty.herokuapp.com/api/user/login";


const Login = (props) => {
  const {startAuth, loginSuccess, authFailure, isLoading, history} = props;
  const initalState = { username: "", password: "" };
  const [user, setUser] = useState(initalState);

  const handleChange = event => {
    event.preventDefault();
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    startAuth();
    event.preventDefault();
    axiosWithAuth()
      .post("/user/login", user)
      .then(response => {
        console.log(user);
        debugger;
        localStorage.setItem("token", response.data.token);
        loginSuccess();
        history.push("/experiences");
      })
      .catch(error => {
        debugger;
        authFailure(error.response.data.message);
      });

    setUser(initalState);
  };

  return (
    <Form>
      <FormGroup controlId="FormBasicUsername">
        <FormControl
          name="username"
          type="name"
          placeholder="Username"
          onChange={handleChange}
          value={user.username}
          required
        />
      </FormGroup>

      <FormGroup controlId="FormBasicPassword">
        <FormControl
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          value={user.password}
          required
        />
      </FormGroup>

      <Button
        variant="primary"
        type="submit"
        onClick={handleSubmit}
        className="text-center"
      >
        {isLoading ? <Icon type="loading" /> : `Login`}
      </Button>
    </Form>
  );
};

const mapStateToProps = state => ({
  error: state.authState.error,
  isLoading: state.authState.isLoading
});
const mapDispatchToProps = dispatch => ({
  startAuth: () => dispatch(startAuth()),
  loginSuccess: () => dispatch(loginSuccess()),
  authFailure: error => dispatch(authFailure(error))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
