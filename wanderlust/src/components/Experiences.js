import React from "react";
import ExperienceCard from "./ExperienceCard";
import HomePage from "./HomePage";
import React, { useState, useEffect } from "react";
import axiosWithAuth from "../axiosWithAuth";
import { connect } from "react-redux";
import * as actionCreators from "../state/ActionCreators";


const Experiences = ({experiences}) => {
   
  useEffect(() => {
    props.fetchExperiences();
  }, []);
  
  return (
    <HomePage>
      <main className="experiences-list">
        <div className="container">
          <div className="row">
            {experiences.map((experience, id) => (
              <div className="col-md-4" key={id}>
                <ExperienceCard />
              </div>
            ))}
          </div>
        </div>
      </main>
    </HomePage>
  );

  // return (
  //   experiences && (
  //     <div >
  {
    /* {experiences.map(el => (
          <div key={el.org_name}>
            {el.org_name}
            <p>{el.date}</p>
            <p>{el.experience_desc}</p>
            <div>
              <img src={el.date} />
            </div>
            {el.experience_title}
          </div>
        ))} */
  }
  //     </div>
  //   )
  // );
}

const mapStateToProps = state => {
  return {
    experiences: state.appState
  };
};

export default connect(
  mapStateToProps,
  actionCreators
)(Experiences);
