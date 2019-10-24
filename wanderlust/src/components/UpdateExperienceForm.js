import React, { useState, useEffect } from 'react';
import axios from 'axios';
import axiosWithAuth from "../axiosWithAuth";
import { connect } from "react-redux";
import * as actionCreators from "../state/ActionCreators";

const initialUpdateForm = {
    org_name: "",
    experience_title: "",
    experience_desc: "",
    date: "",
    image: null
    },

export const UpdateExperienceForm = props => {
    const { match, experiences } = props;

  const [ experience, setExperience ] = useState(initialUpdateForm);

  const id = match.params.id


    useEffect(() => {
  const experienceToUpdate = experiences.find(experience => `${experience.id}` === id );
  if (experienceToUpdate){
      setExperience(experienceToUpdate)
  }}, [match, experiences]
)

const handleSubmit = e => dispatch => {
    e.preventDefault();
    axiosWithAuth()
      .put(`/exp/${experience.id}`, experience)
      .then(response => {
          console.log(res)
      })
  };

  
  const handleChange = e => {
    setExperience({
      ...experience,
      [e.target.name]: e.target.value
    });
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
  )(UpdateExperienceForm);
