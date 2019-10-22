import React from "react";
import ReactDOM from "react-dom";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import "./index.scss";
import "./styles/auth.scss";
import App from "./App";
import * as reducers from "./state/Reducers";

const allReducers = combineReducers({
  authState: reducers.authReducer,
});

const store = createStore(
  allReducers,
  {},
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);

