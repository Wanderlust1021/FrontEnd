import React from "react";
import { Route, Switch } from "react-router-dom";

// components
import Authentication from './components/Authentication';
import Experiences from './components/Experiences';
import Experience from './components/Experience';
import Organizers from './components/Organizers';
import Organizer from './components/Organizer';
import PrivateRoute from './components/PrivateRoute';
import AddExperience from './components/AddNewExperience';
import SelfExperiences from './components/SelfExperiences';
import UpdateExperience from './components/UpdateExperience';

const App = props => {

  return (
    <div>
      <Switch>
        <Route  path="/" component={Authentication} />
        <PrivateRoute exact path="/experiences/new" component={AddExperience}/>
        <PrivateRoute exact path="/experiences" component={Experiences}/>
        <PrivateRoute exact path="/experiences/:id" component={Experience} />
        <PrivateRoute path="/experiences/:id/edit" component={UpdateExperience} />
        <PrivateRoute path="/experiences/:id/all" component={SelfExperiences} />
        <PrivateRoute exact path="/organizers" component={Organizers} />
        <PrivateRoute path="/organizers/:id" component={Organizer} />
      </Switch>
    </div>
  )

};


export default App;
