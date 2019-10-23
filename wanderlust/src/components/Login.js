import React, { useState } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/ActionCreators";
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

const loginUrl = "https://wanderlust-ty.herokuapp.com/api/user/login";

const Login = props => {
  const initalState = { username: "", password: "" };
  const [user, setUser] = useState(initalState);

  const handleChange = event => {
    event.preventDefault();
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    axiosWithAuth()
      .post("/user/login", user)
      .then(response => { console.log(user)
        localStorage.setItem("token", response.data.payload);
        props.history.push("/experiences");
   
      })
      .catch(error => {
        // props.loginFailure(error.response.data.message);
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

      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Login
      </Button>
    </Form>
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
)(Login);
