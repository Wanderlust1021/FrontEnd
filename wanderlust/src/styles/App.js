import React from "react";
import { Route, Switch } from "react-router-dom";

// components
import Authentication from './components/Authentication';
import Experiences from './components/Experiences';
import Experience from './components/Experience';
import Organizers from './components/Organizers';
import Organizer from './components/Organizer';
import PrivateRoute from './components/PrivateRoute';

const App = props => {

  return (
    <div>
      <Switch>
        <Route  path="/auth" component={Authentication} />
        <PrivateRoute exact path="/experiences" component={Experiences}/>
        <PrivateRoute path="/experiences/:id" component={Experience} />
        <PrivateRoute exact path="/organizers" component={Organizers} />
        <PrivateRoute path="/organizers/:id" component={Organizer} />
      </Switch>
    </div>
  )

};


export default App;
