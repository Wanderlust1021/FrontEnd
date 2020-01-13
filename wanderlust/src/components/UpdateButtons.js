import React from 'react';
import { Link } from 'react-router-dom';
import axiosWithAuth from '../axiosWithAuth';
import { connect } from "react-redux";
import * as actionCreators from "../State/ActionCreators";

const UpdateButtons = props => {
  // has id of the experience
  const { editUrl, experienceId } = props;

  const deleteExperience = () => {
    axiosWithAuth()
      .delete(`/exp/${experienceId}`)
      .then(response => {
        props.history.push('/experiences')
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (

    <div class="row mt-4">
      <div class="col-md-12">
          <Link 
            className="btn btn-update btn-primary" 
            to={editUrl}
          >
            Edit
          </Link>
          <button 
            className="btn btn-update btn-danger"
            onClick={deleteExperience}
          >
            Delete
          </button>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    experiences: state.appState.data
  };
};

export default connect(
  mapStateToProps,
  actionCreators
)(UpdateButtons);
