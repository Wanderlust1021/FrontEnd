import React, { useState } from 'react';
import axios from 'axios';
import axiosWithAuth from "../axiosWithAuth";
import { connect } from "react-redux";
import * as actionCreators from "../state/ActionCreators";
import PrivateNav from './PrivateNav';

const AddExperience = (props) => {
  const initialState = {
    org_name: "",
    experience_title: "",
    experience_desc: "",
    date: '',
    image: null
  }

  const user = JSON.parse(localStorage.getItem('user'));

  const [experience, setExperience] = useState(initialState);

  const handleChange = event => {
    setExperience({
      ...experience,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
    debugger
    event.preventDefault();
    axiosWithAuth()
      .post(`/org/${user.id}/exp`, experience)
      .then(response => {
        debugger
          
      })
      .catch(error => {
        debugger
      })
  }


  return (
    <div>
      <PrivateNav />
      <div className="container mt-3">
        <div className="col-md-12" style={{width: '60%'}}>
          <div>
            <h1>Add an Experience</h1>
          </div>
          <form onSubmit={handleSubmit} method="post">
            <div class="form-group">
              <label for="">Organization Name</label>
              <input
                type="text"
                name="org_name"
                onChange={handleChange}
                placeholder="Organizer name"
                value={experience.org_name}
                className="form-control"
              />
            </div>
            <div class="form-group">
              <label for="">Experience title</label>
              <input
                type="text"
                name="experience_title"
                onChange={handleChange}
                placeholder="Experience title"
                value={experience.experience_title}
                className="form-control"
              />
            </div>
            <div class="form-group">
              <label for="">Experience Description</label>
              <textarea
                name="experience_desc"
                onChange={handleChange}
                value={experience.experience_desc}
                className="form-control"
                rows="3"
              >Place your description here...</textarea>
            </div>
            <div class="form-group">
              <label for="">Date</label>
              <input
                type="date"
                name="date"
                onChange={handleChange}
                value={experience.date}
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
          </form>
        </div>
      </div>
    </div>
    );
}


const mapStateToProps = state => ({
});


const mapDispatchToProps = dispatch => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddExperience);
