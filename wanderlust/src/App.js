import React from "react";
import { Route, Switch } from "react-router-dom";

// components
import Authentication from './components/Authentication';
import HomePage from './components/HomePage';
import Experiences from './components/Experiences';
import Experience from './components/Experience';
import Organizers from './components/Organizers';
import Organizer from './components/Organizer';

import { AuthTest } from './components/AuthTest';

const App = props => {
  return (
    <div>
      <Switch>
        <Route  path="/auth" component={AuthTest} />
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
        <Route path="/organizers/:id" component={Organizer} />
      </Switch>
    </div>
  )
};

export default App;
