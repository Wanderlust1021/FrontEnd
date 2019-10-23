import React from 'react';
import img from '../images/profile.jpg';


const OrganizerSidePanel = (props) => {
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
          <div className="row">
          </div>
          <hr className="panel-border" />

        </div>
      </div>


      <div className="panel panel-default">
        <div class="panel-heading">
          <h5>About Neema</h5>
        </div>
        <div className="panel-body">
          <div className="row">
            <div className="col-md-4">
              <a href="" className="panel-profile-pic">
                <img 
                  alt="profile picture" 
                  src={img} />
              </a>
            </div>
            <div className="col-md-8">
              <div class="row">
                <div class="col-md-12">
                  <a target="_blank" href="">
                    Neema </a>
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
                in Malaysia, and I have grown into being a tour operator
              </p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default OrganizerSidePanel;
