import React, { useEffect } from 'react';
import ExperienceCard from './ExperienceCard';
import HomePage from './HomePage';


const Experiences = (props) => {
  let experiences = [1,2,3,4,5,6];

  return(
    <HomePage>
      <main className='experiences-list'>
        <div className="container">
          <div className="row">
            {
              experiences.map((experience, id) => (
              <div className="col-md-4" key={id}>
                <ExperienceCard />
              </div>
              ))
            }
          </div>
        </div>
      </main>
    </HomePage>
  )
}

export default Experiences;
