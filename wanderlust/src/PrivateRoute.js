import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={() => {
          if (localStorage.getItem("token")) {
            return <Component />;
          } else {
              alert('Hi there 😊, you have to Sign in Please')
            return <Redirect to="/" />;
          }
        }}
      />
    );
  };
  
<<<<<<< HEAD
  export default PrivateRoute;
=======
  export default PrivateRoute;
>>>>>>> master
