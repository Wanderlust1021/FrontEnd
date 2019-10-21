import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

// components
import Login from './components/Login';
import SignUp from './components/SignUp';

import { store } from './store'

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={SignUp} />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
