import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { signupFailure, signupSuccess } from '../store/actions/actions';
import axios from 'axios';

const signupUrl = 'https://wanderlust-ty.herokuapp.com/api/user/register';

const SignUp = ({dispatch}) => {
    const [user, setUser] = useState({
      username: '',
      password: ''
    });
  
    const handleChange = event => {
      event.preventDefault();
      setUser({...user, [event.target.name]: event.target.value });
    };
  
    const handleSubmit = event => {
      event.preventDefault();

      axios.post(signupUrl)
        .then(response => {
          response.data.username?
            dispatch(signupSuccess()):
            dispatch(signupFailure(response.data.message));
        })
        .catch(error => {
          dispatch(signupFailure(error.response.data.message));
        })
    }
  
    return (
      <div className="input-section">
        <div className="logo-title">
          <Link to="/">Wanderlast</Link>
        </div>
        <div className="input-page">
          <div className="input-header">
            Sign Up
          </div>
          <form className='input-form' onSubmit={handleSubmit}>      
            <div className="text-input">
              <label htmlFor="username">Email or Username</label>
              <input
                id="username"
                type='text'
                name='username'
                onChange={handleChange}
                value={user.username}
                required
              />
            </div>
            <div className="password-input">
              <label htmlFor="password">Password</label>
              <input
                  type='password'
                  name='password'
                  onChange={handleChange}
                  value={user.password}
                  required
                />
            </div>
            <button>Login</button>
          </form>
        </div>
      </div>
    );
  };
  
export default connect()(SignUp);
