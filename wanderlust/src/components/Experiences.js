import ExperienceCard from "./ExperienceCard";
import HomePage from "./HomePage";
import React, { useState, useEffect } from "react";
import axiosWithAuth from "../axiosWithAuth";
import { connect } from "react-redux";
import * as actionCreators from "../state/ActionCreators";


const Experiences = ({experiences, fetchExperiences}) => {
   
  useEffect(() => {
    fetchExperiences();
  }, []);
  
  return (
    <HomePage>
      <main className="experiences-list">
        <div className="container">
          <div className="row">
            {
              experiences && experiences.map((experience, id) => (
              <div className="col-md-4" key={id}>
                <ExperienceCard experience={experience}/>
              </div>
            ))}
          </div>
        </div>
      </main>
    </HomePage>
  );

}

const mapStateToProps = state => {
  return {
    experiences: state.appState.data
  };
};

export default connect(
  mapStateToProps,
  actionCreators
)(Experiences);
