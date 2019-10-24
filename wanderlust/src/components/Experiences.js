import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ExperienceCard from './ExperienceCard';
import HomePage from './HomePage';
import * as actionCreators from "../state/ActionCreators";


const Experiences = (props) => {
  const { experiences, fetchExperiences } = props;

  useEffect(() => {
    fetchExperiences();
  }, []);

  return(
    <HomePage style={{fontFamily:"ABeeZee"}}>
      <main className='experiences-list'>
        <div className="container">
          <div className="row">
            {
              experiences && experiences.map((experience, id) => (
              <div className="col-md-4" key={id}>
                <ExperienceCard experience={experience}/>
              </div>
              ))
            }
          </div>
        </div>
      </main>
    </HomePage>
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
)(Experiences);
