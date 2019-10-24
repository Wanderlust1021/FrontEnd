import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({ component: Component, ...rest }) => {

  return (
      <Route
        {...rest}
        render={(props) => {
          if (localStorage.getItem("token")) {
            return <Component {...props} />;
          } else {
              alert('Hi there 😊, you have to Sign in Please')
            return (
              <Redirect 
                to={{pathname: '/auth/login', state: {referer: props.location}}}
              />)
          }
        }}
      />
  );
}

export default PrivateRoute; 
