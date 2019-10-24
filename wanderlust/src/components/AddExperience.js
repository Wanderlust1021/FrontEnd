import React, { useState } from 'react';
import axios from 'axios';
import axiosWithAuth from "../axiosWithAuth";
import { connect } from "react-redux";
import * as actionCreators from "../state/ActionCreators";

const initialAddExperienceForm = {
    org_name: "",
    experience_title: "",
    experience_desc: "",
    date: "",
    image: null
    },

export const addExperienceForm = props => {
  const [ newExperience, setNewExperience ] = useState(initialAddExperienceForm);

  const handleChange = e => {
    setNewExperience({
      ...newExperience,
      [e.target.name]: e.target.value
    });
  };
  const addExperience = e => dispatch => {
    e.preventDefault();
    axiosWithAuth()
      .post("/org/register", )
      .then(response => {
          console.log(res)
      })
  };
 

  return (
    <div>
      <h2>Add New Experience </h2>
      <form onSubmit={addExperience}>
        <input
          type="text"
          name="org_name"
          onChange={handleChange}
          placeholder="Organizer"
          value={experience.org_name}
        />
        <div className="baseline" />

        <input
          type="text"
          name="experience_title"
          onChange={handleChange}
          placeholder="Title"
          value={experience.experience_title}
        />
        <div className="baseline" />

        {/* <input
          type="string"
          name="image"
          onChange={handleChange}
          placeholder="Image"
          value={experience.image}
        />
        <div className="baseline" /> */}

        <input
          type="string"
          name="date"
          onChange={handleChange}
          placeholder="Date"
          value={experience.date}
        />
        <div className="baseline" />

        <input
          type="text"
          name="experience_desc"
          onChange={handleChange}
          placeholder="Description"
          value={experience.experience_desc}
        />
        <div className="baseline" />

        <button className="md-button form-button">Add</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
    return {
      experiences: state.appState
    };
  };
  
  export default connect(
    mapStateToProps,
    actionCreators
  )(addExperienceForm);