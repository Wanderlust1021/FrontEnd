import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { loginSuccess, loginFailure } from '../store/actions/actions';
import axios from 'axios';

const loginUrl = 'https://wanderlust-ty.herokuapp.com/api/user/register';

const Login = ({dispatch}) => {
  const initalState = {username:'', password:''}
    const [user, setUser] = useState(initalState);
  
    const handleChange = event => {
      event.preventDefault();
      setUser({...user, [event.target.name]: event.target.value });
    };
  
    const handleSubmit = event => {
      event.preventDefault();
      debugger

      axios.post(loginUrl, user)
        .then(response => {
          debugger
          response.data.username?
            dispatch(loginSuccess()):
            dispatch(loginFailure(response.data.message));
        })
        .catch(error => {
          debugger
          dispatch(loginFailure(error.response.data.message));
        })

      setUser(initalState);
    }
  
    return (
      <div className="input-section">
        <div className="logo-title">
          <Link to="/">Wanderlast</Link>
        </div>
        <div className="input-page">
          <div className="input-header">
            Log In
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

export default connect()(Login);
  

