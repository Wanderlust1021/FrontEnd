import React from 'react';
import { Link } from 'react-router-dom';
import img from '../images/experience.jpg';

const Experience = (props) => {

  return (
    <div className="panel-card">
      <Link>
        <img 
          className="display-image" 
          src={img}
          alt="sample experience"
        />
      </Link>
      <Link className="text-center">
        <h2 className="panel-title">
          A visit to a traditional moran home stead
        </h2>
        <span className="panel-location">
          <h4>
            Kenya(location)
          </h4>
        </span>
      </Link>
      <div className="panel-description">
        Enjoy Angkor Wat full day tour by Tuk Tuk. The Tuk Tuk is a local way to 
        travel and tourists can enjoy the natural view while on the tuk tuk.
        The Tuk Tuk can fit 4 people and offers a lower price to travellers.
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

export default Experience;
