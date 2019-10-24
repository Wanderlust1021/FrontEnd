import React from 'react';
import { Link } from 'react-router-dom';
import PrivateNav from './PrivateNav';
import OrganizerSidePanel from './OrganizerSidePanel';
import ExperienceSidePanel from './ExperienceSidePanel';
import Footer from './Footer';

// Displays info about an experience e.g the organizer of the experience,
// a description of the experience etc
const Experience = (props) => {
  

  return (
    <div>
      <PrivateNav />

      <section className="experience-item">
        <div className="container">
          <div className="hero mb-2"></div>
          <div className="row mb-2">
            <div className="col-md-12">
              <Link className="btn-custom btn-red btn-lg btn-block">BOOK NOW!</Link>
            </div>
          </div>
          
          <div className="row">
            <div className="col-md-3">
              <OrganizerSidePanel />
            </div>
            <div className="col-md-9">
              <ExperienceSidePanel />
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  )
}

export default Experience;
