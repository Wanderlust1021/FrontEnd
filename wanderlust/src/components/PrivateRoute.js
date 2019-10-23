import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

export const PrivateRoute = (props) => {
  const { component: Component, isAuthenticated, ...rest } = props;

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

export default connect(
  state => ({
    isAuthenticated: state.authState.isAuthenticated
  })
)(PrivateRoute);
