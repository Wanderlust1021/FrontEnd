import React from 'react';
import { Switch, Link, NavLink, useRouteMatch, Route } from 'react-router-dom';


const ExperienceSidePanel = (props) => {
  const { experience_title, experience_desc } = props.experience;
  let { path, url } = useRouteMatch();

  return (
    <div className="panel panel-default">
      <div className="panel-body">
        <ul className="nav nav-tabs">
          <li class="nav-item">
            <NavLink
              className="nav-link" 
              to={`${url}/about`}
              activeClassName="active in"
              isActive={(match, location) => {
                return location.pathname == url || match;
              }}
            >
              About
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink 
              className="nav-link" 
              activeClassName="active in"
              to={`${url}/map`}
            >
              Map
            </NavLink>
          </li>
        </ul>
        <div className="tab-content">
          <Switch>
            <Route exact path={path}>
              <div className="tab-pane fade active in mt-3" id="about">
                <div className="row">
                  <div className="col-md-12">
                    {experience_desc}
                  </div>
                </div>
                <hr/>
                <Link 
                  to="/add-experience" 
                  className="btn-custom btn-red btn-lg btn-block"
                  style={{color: '#fff'}}>
                  BOOK NOW!
                </Link>
              </div>
            </Route>
            <Route path={`${path}/about`}>
              <div className="tab-pane fade active in mt-3" id="about">
                <div className="row">
                  <div className="col-md-12">
                    <h5>{experience_title}</h5>
              
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                      enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                      in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                      nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                      sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>
              
                  </div>
                </div>
              </div>
            </Route>
            <Route path={`${path}/map`}>
              <div className="tab-pane fade" id="map">
                <div className="row">
                  <div className="col-md-12">
                    Map
                  </div>
                </div>
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default ExperienceSidePanel;
