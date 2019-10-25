import React from 'react';
import { Link } from 'react-router-dom';
import * as actionCreators from "../state/ActionCreators";
import { connect } from 'react-redux';
import { FaSearch } from 'react-icons/fa';

const SearchBar = (props) => {
  return (
    <div className="home-search-bar">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <form className="search-form">
              <input className="form-control form-control-md" type="text" placeholder="Search" />
              <FaSearch size="1.4em"/>
            </form>
          </div>
          <div className="col-md-4">
            {localStorage.getItem('organizer') &&
              <Link to="/experiences/new">
                <button type="button" class="btn btn-primary">Add an Experience</button>
              </Link>
              }
          </div>
        </div>
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
)(SearchBar);
