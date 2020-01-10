import React, { useState } from 'react';
import axios from 'axios';
import axiosWithAuth from "../axiosWithAuth";
import { connect } from "react-redux";
import * as actionCreators from "../State/ActionCreators";
import { addExperience } from '../State/ActionCreators';
import PrivateNav from './PrivateNav';
import { Link } from 'react-router-dom';
import PageContainer from './PageContainer';

const AddExperience = (props) => {
  const initialState = {
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
        addExperience(experience)
        props.history.push('/experiences')
      })
      .catch(error => {
        debugger
      })
  }


  return (
    <PageContainer>
      <div className="container" style={{width: '70%'}}>
        <div className="panel panel-primary panel-organizer mt-4">
          <div className="panel-heading">
            <h5>Add an Experience</h5>
          </div>
          <div className="panel-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label for="user_weblinks">Title</label>
                <input 
                  className="form-control" 
                  type="text"
                  name="experience_title"
                  onChange={handleChange}
                  value={experience.experience_title}
                />
              </div>
              <div class="form-group">
                <label>Description</label>
                <textarea 
                  className="form-control"
                  style={{height: '6rem'}} 
                  name="experience_desc"
                  onChange={handleChange}
                  value={experience.experience_desc}
                >
                </textarea>
              </div>
              <div className="form-group">
                <label className="string optional" for="user_skype">Date</label>
                <input 
                  type="date" 
                  name="date"
                  className="form-control"
                  onChange={handleChange}
                  placeholder="Date"
                  value={experience.date}
                />
              </div>
              <div className="form-group">
                <label>Image (optional)</label>
                <input className="form-control hide" type="file" name=""/>
                <div className="row">
                  <div className="col-md-2">
                    <button className="btn btn-primary" id="profile">Browse</button>
                  </div>
                </div>
              </div>
              <div className="form-actions">
                <Link 
                  className="btn btn-default" 
                  id="cancel" 
                  style={{marginRight: '2px'}}
                  to="/experiences"
                >
                  Cancel
                </Link>
                <input type="submit" value="Save changes" className="btn btn-update btn-primary"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}


const mapStateToProps = state => {
  return {
    experiences: state.appState.data
  };
};
const mapDispatchToProps = dispatch => ({
  addExperience: (newExp) => dispatch(addExperience(newExp)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddExperience);
