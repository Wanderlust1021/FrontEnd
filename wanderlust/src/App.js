import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "./State/ActionCreators";
import "./App.css";

export function App(props) {
  return <div className="App">

    <h1>{props.test}</h1>
  </div>;
}

const mapStateToProps = state => {
  return {
    test: state.appState.test
  };
};

export default connect(
  mapStateToProps,
  actionCreators
)(App);
