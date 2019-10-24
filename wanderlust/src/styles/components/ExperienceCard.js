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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum
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
