import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = (props) => {
  const { component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={props => {
        return (localStorage.getItem("token") ? (
          <Component {...props} />
        ): (
          <Redirect to={{pathname: '/auth/login', state: {referer: props.location}}} />
        )
      )}}
    />
  );
}

export default connect(
  state => ({
    isAuthenticated: state.authState.isAuthenticated
  })
)(PrivateRoute);
