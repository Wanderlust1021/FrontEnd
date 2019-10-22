import React, { useState } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../State/ActionCreators";
import * as reducers from "../State/Reducers";
import axios from "axios";
import styled from "styled-components";
import { Button, FormGroup, FormControl, FormLabel, Form } from "react-bootstrap";

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

    axios
      .post(loginUrl, user)
      .then(response => {
        response.data.username
          ? props.loginSuccess()
          : props.loginFailure(response.data.message);
      })
      .catch(error => {
        props.loginFailure(error.response.data.message);
      });

    setUser(initalState);
  };

  return (
    // <div className="input-section">
    //   <div className="logo-title">
    //     <Link to="/">Wanderlust</Link>
    //   </div>
    //   <div className="input-page">
    //     <div className="input-header">Log In</div>
    //     <form className="input-form" onSubmit={handleSubmit}>
    //       <div className="text-input">
    //         <label htmlFor="username">Email or Username</label>
    //         <input
    //           id="username"
    //           type="text"
    //           name="username"
    //           onChange={handleChange}
    //           value={user.username}
    //           required
    //         />
    //       </div>
    //       <div className="password-input">
    //         <label htmlFor="password">Password</label>
    //         <input
    //           type="password"
    //           name="password"
    //           onChange={handleChange}
    //           value={user.password}
    //           required
    //         />
    //       </div>
    //       <button>Login</button>
    //     </form>
    //   </div>
    // </div>

    <Form>
      <FormGroup controlId="FormBasicUsername">
        <FormControl name="name" type="name" placeholder="Username" />
      </FormGroup>

      <FormGroup controlId="FormBasicPassword">
        <FormControl name="password" type="password" placeholder="Password" />
      </FormGroup>

      <Button variant="primary" type="submit">
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
