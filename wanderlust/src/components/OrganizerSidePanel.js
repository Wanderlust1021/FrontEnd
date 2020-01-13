import React from 'react';
import img from '../images/profile.jpg';


const OrganizerSidePanel = (props) => {
  // const { org_name, experience_title, experience_desc } = props.experience;
  const { org_name } = props.experience;

  return (
    <>
      <div className="panel panel-default">
        <div className="panel-body">
          <div className="row">
            <div class="col-md-5 price-label">Price</div>
          </div>
          <div className="row">
            <div class="col-md-12 text-center">
              <span class="text-center price">USD&nbsp;150.00</span>
            </div>
          </div>

          <hr className="panel-border" />

          <div className="row">
            <div class="col-md-5 duration-label">Duration</div>
          </div>

          <div className="row">
            <div class="col-md-12">
              <div class="text-center duration">10&nbsp;hours</div>
            </div>
          </div>
          <hr className="panel-border" />

          <div className="row">
            <div class="col-md-12">Rating</div>
          </div>
          <hr className="panel-border" />
        </div>
      </div>


      <div className="panel panel-default">
        <div class="panel-heading">
          <h5>About {org_name}</h5>
        </div>
        <div className="panel-body">
          <div className="row">
            <div className="col-md-4">
              <a href="/" className="panel-profile-pic">
                <img 
                  alt="panel profile" 
                  src={img} />
              </a>
            </div>
            <div className="col-md-8">
              <div class="row">
                <div class="col-md-12">
                  <a target="_blank" href="/">
                    {org_name} </a>
                  </div>
              </div>
              <div class="row">
                  <div class="col-md-12">
                    <small>
                      <em>Member since&nbsp;November 2016</em>
                    </small>
                  </div>
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-12">
              <p>
                I have been a tour guide for the past 20 years
                in Ethiopia, and I have grown into being a tour operator
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrganizerSidePanel;
