import React from 'react';
import { Link } from 'react-router-dom';
import img from '../images/experience.jpg';
import UpdateButtons from './UpdateButtons';


const ExperienceCard = (props) => {
  const {
    org_name,
    experience_title,
    experience_desc,
    image,
    id
  } = props.experience;

  let imgUrl = image || img;
  let expUrl = `experiences/${id}`;

  const user  = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="panel-card">
      <Link to={expUrl}>
        <img 
          className="display-image" 
          src={imgUrl}
          alt="sample experience"
        />
      </Link>
      <Link to={expUrl} className="text-center">
        <h2 className="panel-title">
          { experience_title }
        </h2>
        <span className="panel-location">
          <h4>
            { org_name }
          </h4>
        </span>
      </Link>
      <div className="panel-description">
        { experience_desc }
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
      {
      user.org?(
        <UpdateButtons 
          className="mt-4" 
          editUrl={`/experiences/${id}/edit`}
          experienceId={id}
        />
      ): null
      }
    </div>
  )

}

export default ExperienceCard;
