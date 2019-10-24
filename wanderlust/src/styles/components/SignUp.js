import React, { useState } from "react";
import { connect } from "react-redux";
import { signupSuccess, startAuth, authFailure } from "../state/ActionCreators";
import axios from "axios";
import {
  Form,
  Button,
  FormGroup,
  FormControl,
  FormText,
  FormLabel
} from "react-bootstrap";


import { Icon } from 'antd';

const signupUrl = "https://wanderlust-ty.herokuapp.com/api/user/register";

const SignUp = ({signupSuccess, startAuth, history, isLoading}) => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = event => {
    event.preventDefault();
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    startAuth();
    event.preventDefault();
    axios
      .post(signupUrl, {
        username: user.username,
        password: user.password
      })
      .then(response => {
        debugger
        signupSuccess(response.data.username)
        history.push("/auth");
      })
      .catch(error => {
        debugger;
        authFailure(error.response.data.message)
      });
  };

  return (
    <Form>
      <FormGroup controlId="validationFormik01">
        <FormControl name="firstName" type="text" placeholder="First Name" />
      </FormGroup>
      <FormGroup controlId="validationFormik02">
        <FormControl name="lastName" type="text" placeholder="Last Name" />
      </FormGroup>
      <FormGroup controlId="ValidationFormikUsername">
        <FormControl
          name="username"
          type="username"
          placeholder="Username"
          value={user.username}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup controlId="ValidationFormikEmail">
        <FormControl type="email" placeholder="Enter email" />
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
        />
        <Form.Text className="text-muted">
          Must be at least 8 characters.
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="FormBasicCheckbox">
        <Form.Check type="checkbox" label="Accept Terms & Conditions" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit} className="text-center">
        {isLoading? <Icon type="loading" /> : `Register`}
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
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);