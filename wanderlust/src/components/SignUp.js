import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actionCreators from "../State/ActionCreators";
import * as reducers from "../State/Reducers";
import axios from "axios";
import { Form, Button, FormGroup, FormControl, FormText, FormLabel } from "react-bootstrap";

const signupUrl = "https://wanderlust-ty.herokuapp.com/api/user/register";

const SignUp = props => {
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
    event.preventDefault();

    axios
      .post(signupUrl)
      .then(response => {
        response.data.username
          ? props.signupSuccess()
          : props.signupFailure(response.data.message);
      })
      .catch(error => {
        props.signupFailure(error.response.data.message);
      });
  };

  return (
    // <div className="input-section">
    //   <div className="logo-title">
    //     <Link to="/">Wanderlast</Link>
    //   </div>
    //   <div className="input-page">
    //     <div className="input-header">
    //       Sign Up
    //     </div>
    //     <form className='input-form' onSubmit={handleSubmit}>
    //       <div className="text-input">
    //         <label htmlFor="username">Email or Username</label>
    //         <input
    //           id="username"
    //           type='text'
    //           name='username'
    //           onChange={handleChange}
    //           value={user.username}
    //           required
    //         />
    //       </div>
    //       <div className="password-input">
    //         <label htmlFor="password">Password</label>
    //         <input
    //             type='password'
    //             name='password'
    //             onChange={handleChange}
    //             value={user.password}
    //             required
    //           />
    //       </div>
    //       <button>Login</button>
    //     </form>
    //   </div>
    // </div>
    <Form>
      <FormGroup controlId="validationFormik01">
        <FormControl
          name="firstName"
          type="text"
          placeholder="First Name"
          // value={values.firstName}
          // isValid={touched.firstName && !errors.firstName}
        />
      </FormGroup>
      <FormGroup controlId="validationFormik02">
        <FormControl
          name="lastName"
          type="text"
          placeholder="Last Name"
          // value={values.firstName}
          // isValid={touched.lastName && !errors.lastName}
        />
      </FormGroup>
      <FormGroup controlId="ValidationFormikUsername">
        <FormControl name="username" type="username" placeholder="Username" />
      </FormGroup>
      <FormGroup controlId="ValidationFormikEmail">
        <FormControl type="email" placeholder="Enter email" />
        <FormText className="text-muted">
          We'll never share your email with anyone else.
        </FormText>
      </FormGroup>

      <Form.Group controlId="ValidationFormikPassword">
        <Form.Control type="password" placeholder="Password" />
        <Form.Text className="text-muted">
          Must be at least 8 characters.
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="FormBasicCheckbox">
        <Form.Check type="checkbox" label="Accept Terms & Conditions" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Register
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
)(SignUp);
