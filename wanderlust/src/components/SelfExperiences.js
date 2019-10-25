import React, { useState, useEffect } from 'react';
import ExperienceCard from "./ExperienceCard";
import HomePage from "./HomePage";
import axiosWithAuth from "../axiosWithAuth";
import { connect } from "react-redux";
import * as actionCreators from "../state/ActionCreators";
import { useParams, Link } from 'react-router-dom';

const SelfExperiences = (props) => {
   
  let { id } = useParams();

  const [experiences, setExperiences] = useState([]);
  const fetchExperiences = () => {
    axiosWithAuth()
      .get(`/exp/${id}`)
      .then(response => {
        let experiences = response.data;
        setExperiences(experiences);
      })
      .catch(error => {
        console.log(error)
      })
  }

  useEffect(()=> {
    fetchExperiences();
  }, [])

  return (
    <HomePage>
      <main className="experiences-list">
        <div className="container">

          <div className="row">
            <div className="col-md-2">
              <Link to="/experiences/new">
                <button 
                  className="btn btn-primary"
                >Add an Experience
                </button>
              </Link>
            </div>
          </div>
          <div className="row">
            {
              experiences && experiences.map((experience, id) => (
              <div className="col-md-4" key={id}>
                <ExperienceCard id={id} experience={experience}/>
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
)(SelfExperiences);
