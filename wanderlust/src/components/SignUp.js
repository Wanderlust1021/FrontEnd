import React, { useState } from "react";
import { connect } from "react-redux";
import { signupSuccess, startAuth, authFailure } from "../State/ActionCreators";
import axiosWithAuth from "../axiosWithAuth";
import {
  Form,
  Button,
  FormGroup,
  FormControl,
  FormText,
} from "react-bootstrap";


import { Icon } from "antd";

const SignUp = ({ signupSuccess, startAuth, history, isLoading }) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    organizer: false
  });

  const handleChange = event => {
    event.preventDefault();
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    let signupUrl, userData;
    let isOrganizer = user.organizer === 'on';
    if (isOrganizer){
      signupUrl = '/org/register';
      userData = {org_name: user.username, password: user.password}
    } else {
      signupUrl = '/user/register';
      userData = {username: user.username, password: user.password}
    }
    startAuth();
    event.preventDefault();

    axiosWithAuth()
      .post(signupUrl, userData)
      .then(response => {
        signupSuccess(response.data.username)
        localStorage.setItem('user', JSON.stringify(response.data));
        history.push("/");
      })
      .catch(error => {
        authFailure(error.response.data.message);
      });
  };

  return (
    <Form>
      <FormGroup controlId="validationFormik01">
        <FormControl
          name="firstName"
          type="text"
          placeholder="First Name"
          value={user.firstName}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup controlId="validationFormik02">
        <FormControl
          name="lastName"
          type="text"
          placeholder="Last Name"
          value={user.lastName}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup controlId="ValidationFormikUsername">
        <FormControl
          name="username"
          type="username"
          placeholder="Username"
          value={user.username}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup controlId="ValidationFormikEmail">
        <FormControl 
          name="email"
          type="email" 
          placeholder="Enter email"
          value={user.email}
          onChange={handleChange} 
          required />
        <FormText className="text-muted">
          We'll never share your email with anyone else.
        </FormText>
      </FormGroup>

      <Form.Group controlId="ValidationFormikPassword">
        <Form.Control
          name="password"
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
          required
        />
        <Form.Text className="text-muted">
          Must be at least 8 characters.
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="FormBasicCheckbox">
        <Form.Check 
          name="organizer"
          type="checkbox" 
          label="Sign up as an organizer"
          onChange={handleChange}
        />
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        onClick={handleSubmit}
        className="text-center"
      >
        {isLoading ? <Icon type="loading" /> : `Register`}
      </Button>
    </Form>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.authState.isLoading
  };
};

const mapDispatchToProps = dispatch => ({
  signupSuccess: username => dispatch(signupSuccess(username)),
  startAuth: () => dispatch(startAuth()),
  authFailure: error => dispatch(authFailure(error))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
