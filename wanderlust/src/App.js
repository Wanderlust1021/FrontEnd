import React from "react";
import { Route, Switch } from "react-router-dom";

// components
import Authentication from './components/Authentication';
import HomePage from './components/HomePage';

const App = props => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Authentication} />
        <Route path="/experiences" component={HomePage} />
      </Switch>
    </div>
  )
};

export default App;
