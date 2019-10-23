import React from 'react';
import ExperienceCard from './ExperienceCard';
import HomePage from './HomePage';

function Experiences(props) {
  const [experiences, setExperiences] = useState([]);

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
