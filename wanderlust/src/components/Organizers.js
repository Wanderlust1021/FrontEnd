import React from 'react';
import OrganizerCard from './OrganizerCard';

const Organizers = (props) => {
  let organizers = [1,2,3,4,5,6];
  debugger

  return(
    <main className='experiences-list'>
      <div className="container">
        <div className="row">
          {
            organizers.map((experience, id) => (
            <div className="col-md-4" key={id}>
              <OrganizerCard />
            </div>
            ))
          }
        </div>
      </div>
    </main>
  )
}

export default Organizers;
