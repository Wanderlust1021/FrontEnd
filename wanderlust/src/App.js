import React from "react";
import { Route, Switch } from "react-router-dom";

// components
import Authentication from './components/Authentication';
import HomePage from './components/HomePage';
import Experiences from './components/Experiences';
import Experience from './components/Experience';
import Organizers from './components/Organizers';

const App = props => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Authentication} />
        <Route exact path="/experiences" render={
          props => (
            <HomePage {...props} >
              <Experiences />
            </HomePage>
          )
        } />
        <Route path="/experiences/:id" component={Experience} />
        <Route exact path="/organizers" render={
          props => (
            <HomePage {...props}>
              <Organizers />
            </HomePage>
          )
        } />
      </Switch>
    </div>
  )
};

export default App;
