import React, { useEffect } from 'react';
import OrganizerCard from './OrganizerCard';
import HomePage from './HomePage';
import { connect } from 'react-redux';
import * as actionCreators from "../State/ActionCreators";


const Organizers = (props) => {
  const { organizers, fetchOrganizers } = props;

  useEffect(() => {
    fetchOrganizers();
  });


  return(
    <HomePage>
      <main className='experiences-list'>
        <div className="container">
          <div className="row">
            {
              organizers && organizers.map((organizer, id) => (
              <div className="col-md-4" key={id}>
                <OrganizerCard organizer={organizer}/>
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
    organizers: state.appState.data
  };
};

export default connect(
  mapStateToProps,
  actionCreators
)(Organizers);
