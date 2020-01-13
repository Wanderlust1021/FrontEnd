import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import img from '../images/profile.jpg';


const OrganizerCard = (props) => {
  const { id, org_name } = props.organizer;
  let { url } = useRouteMatch();

  return (
    <div className="panel-card">
      <Link to={`${url}/${id}`}>
        <img 
          className="display-image display-organizer-image" 
          src={img}
          alt="sample experience"
        />
      </Link>
      <Link className="text-center">
        <h2 className="panel-title">
          { org_name }
        </h2>
        <span className="panel-location">
          <h4>
          </h4>
        </span>
      </Link>
      <div className="panel-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat
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
