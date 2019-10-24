import React from 'react';
import { Link } from 'react-router-dom';
import img from '../images/profile.jpg';


const OrganizerCard = (props) => {

  return (
    <div className="panel-card" style={{fontFamily:"ABeeZee"}}>
      <Link>
        <img 
          className="display-image display-organizer-image" 
          src={img}
          alt="sample experience"
        />
      </Link>
      <Link className="text-center">
        <h2 className="panel-title">
          Name of organizer
        </h2>
        <span className="panel-location">
          <h4>
            Country
          </h4>
        </span>
      </Link>
      <div className="panel-description">
        Hello! I am Neema, a locally born Congolese
        with a passion for travelling. I am a budding tourist guide, 
        and I have been in the travel industry for 13 years. 
      </div>
      <Link className="btn-custom btn-panel-button btn-panel-button-wide" href="#">
        <h4>
          <span>
            USD&nbsp;40.00
          </span>
          <span>
            <small className="panel-tour-type"></small>
          </span>
        </h4>
      </Link>
    </div>
  )

}

export default OrganizerCard;
