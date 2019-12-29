import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { filterExperiences }  from "../actions/ActionCreators";
import { connect } from 'react-redux';
import { FaSearch } from 'react-icons/fa';

const SearchBar = (props) => {
  const { experiences, filterExperiences } = props;
  const [query, setQuery] = useState({query: ''})

  const handleChange = event => {
    setQuery({[event.target.name]: event.target.value});
  }

  const handleSubmit = event => {
    event.preventDefault()
    let filtered = experiences.filter(e => e.experience_title.includes(query.query));
    filterExperiences(filtered);
  }

  return (
    <div className="home-search-bar">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <form className="search-form" onSubmit={handleSubmit}>
              <input 
                className="form-control form-control-md"
                name="query"
                type="text"
                placeholder="Search"
                value={query.query}
                onChange={handleChange}
              />
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

const mapDispatchToProps = dispatch => ({
  filterExperiences: (data) => dispatch(filterExperiences(data)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
