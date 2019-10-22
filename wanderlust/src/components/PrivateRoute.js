import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

export const PrivateRoute = (props) => {
  const { isAuthenticated } = props;
  const { component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={props => {
        return (isAuthenticated? (
          <Component {...props} />
        ): (
          <Redirect to={{pathname: '/login', state: {referer: props.location}}} />
        )
      )}}
    />
  );
}

export const connect(
  state => {
    isAuthenticated: state
  }
)
