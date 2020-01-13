import React, { useState } from "react";
import { connect } from "react-redux";
import { loginSuccess, authFailure, startAuth } from "../State/ActionCreators";
import * as reducers from "../State/Reducers";
import axiosWithAuth from "../axiosWithAuth";

import {
  Button,
  FormGroup,
  FormControl,
  FormLabel,
  Form
} from "react-bootstrap";
import { Icon } from 'antd';

const Login = (props) => {
  const {startAuth, loginSuccess, authFailure, isLoading, history} = props;
  const initalState = { username: "", password: "", organizer: '' };
  const [user, setUser] = useState(initalState);

  const handleChange = event => {
    event.preventDefault();
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    let loginUrl, userData;
    let isOrganizer = user.organizer === 'on';
    if (isOrganizer){
      loginUrl = '/org/login';
      userData = {org_name: user.username, password: user.password}
    } else {
      loginUrl = '/user/login';
      userData = {username: user.username, password: user.password}
    }
    startAuth();
    event.preventDefault();
    axiosWithAuth()
      .post(loginUrl, userData)
      .then(response => {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data));
        localStorage.setItem("username", user.username);
        let data = {organizer: '', username: ''};
        if (isOrganizer){
          data.organizer = user.username
        } else {
          data.username = user.username;
        }
        loginSuccess(data)
        history.push("/experiences");
      })
      .catch(error => {
        authFailure(error.response.data.message)
      });

    setUser(initalState);
  };

  return (
    <Form>
      <FormGroup controlId="FormBasicUsername">
        <FormControl
          name="username"
          type="name"
          placeholder="Username/Organization name"
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
      <Form.Group controlId="FormBasicCheckbox">
        <Form.Check 
          type="checkbox" 
          name="organizer" 
          label="Sign in as an organizer"
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleSubmit} className="text-center">
        {isLoading? <Icon type="loading" /> : `Login`}
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
  loginSuccess: username => dispatch(loginSuccess(username)),
  authFailure: error => dispatch(authFailure(error)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
