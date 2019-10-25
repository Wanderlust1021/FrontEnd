import React from 'react';


const SideBar = (props) => {

  return (
    <div className="panel panel-primary organizer">
      <div className="panel-heading">
        <h3 className="title">
          <a href="">John Paul</a>
        </h3>
      </div>
      <div className="panel-body">
        <div className="panel-group">
          <div className="panel panel-default">
            <div class="panel-heading" id="users" role="tab">
              <h4 class="panel-title">
                <a href="#">
                <i class="fa fa-user"></i>
                &nbsp;My Account
                </a>
              </h4>
            </div>
            <div class="panel-heading" id="users" role="tab">
              <h4 class="panel-title">
                <a href="#">
                <i class="fa fa-globe"></i>
                &nbsp;Experiences
                </a>
              </h4>
            </div>
            <div class="panel-heading" id="users" role="tab">
              <h4 class="panel-title">
                <a href="#">
                <i class="fa fa-envelope"></i>
                &nbsp;Messages
                </a>
              </h4>
            </div>
            <div class="panel-heading" id="users" role="tab">
              <h4 class="panel-title">
                <a href="#">
                <i class="fa fa-globe"></i>
                &nbsp;Bookings
                </a>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar;
