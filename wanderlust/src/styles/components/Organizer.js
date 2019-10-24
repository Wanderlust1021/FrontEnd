import React, { useState } from 'react';
import { 
  NavLink, 
  Link, 
  useRouteMatch, 
  Switch, 
  Route,
} 
from 'react-router-dom';
import PrivateNav from './PrivateNav';
import Footer from './Footer';
import ExperienceCard from './ExperienceCard';


// Displays info for a specific organizer
const Organizer = (props) => {

  let { path, url } = useRouteMatch();
  const [experiences, setExperiences] = useState([])

  const fetchOrganizerExperiences = () => {

  }

  return (
      <div>
        <PrivateNav />
      
        <section className="experience-item">
          <div className="container">
            <div className="hero mb-2"></div>
            <div className="row mb-2">
              <div className="col-md-12">
                <NavLink to="/" className="btn-custom btn-red btn-lg btn-block">BOOK NOW!</NavLink>
              </div>
           </div>          
      
      
          <div className="panel panel-default">
            <div className="panel-body">
              <ul className="nav nav-tabs">
                <li class="nav-item">
                  <NavLink 
                    className="nav-link" 
                    activeClassName="active in" 
                    to={`${url}/about`}
                    isActive={(match, location) => {
                      return location.path == url || match;
                    }}
                  >
                    About
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className="nav-link" activeClassName="active in" to={`${url}/experiences`}>Experiences</NavLink>
                </li>
              </ul>
              <div className="tab-content pt-4">
                <Switch>
                  <Route exact path={path}>
                    <div className="tab-pane fade active in" id="about">
                      <div className="row">
                        <div className="col-md-3">
                          <label> Gender</label>
                        </div>
                        <div className="col-md-3">Male</div>
                        <div className="col-md-3">
                          <label>Experience</label>
                        </div>
                        <div className="col-md-3">
                          Professional
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3">
                          <label>Residence</label>
                        </div>
                        <div className="col-md-3">Kenyan</div>
                        <div className="col-md-3">
                          <label>Country</label>
                        </div>
                        <div className="col-md-3">
                          Kenya
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3">
                          <label>Language</label>
                        </div>
                        <div className="col-md-3">English</div>
                        <div className="col-md-3">
                          <label>Rate</label>
                        </div>
                        <div className="col-md-3">
                          USD 22.00
                        </div>
                      </div>
                      <hr/>
                      <div className="row">
                        <div className="col-md-12">
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
                  <Route path={`${path}/about`}>
                    <div className="tab-pane fade active in" id="about">
                      <div className="row">
                        <div className="col-md-3">
                          <label> Gender</label>
                        </div>
                        <div className="col-md-3">Male</div>
                        <div className="col-md-3">
                          <label>Experience</label>
                        </div>
                        <div className="col-md-3">
                          Professional
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3">
                          <label>Residence</label>
                        </div>
                        <div className="col-md-3">Kenyan</div>
                        <div className="col-md-3">
                          <label>Country</label>
                        </div>
                        <div className="col-md-3">
                          Kenya
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3">
                          <label>Language</label>
                        </div>
                        <div className="col-md-3">English</div>
                        <div className="col-md-3">
                          <label>Rate</label>
                        </div>
                        <div className="col-md-3">
                          USD 22.00
                        </div>
                      </div>
                      <hr/>
                      <div className="row">
                        <div className="col-md-12">
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
                  <Route path={`${path}/experiences`}>
                    <div className="tab-pane fade" id="experiences">
                      <div className="row">
                          {
                            experiences && experiences.map((experience, id) => (
                            <div className="col-md-4" key={id}>
                              <ExperienceCard />
                            </div>
                            ))
                          }
                      </div>
                    </div>
                  </Route>
                </Switch>
              </div>
            </div>
          </div>
      
          <div className="row">
            <div className="col-md-12">
              <Link 
                to="#"
                className="btn-custom btn-red btn-lg btn-block" 
                style={{color: '#fff'}}>
                BOOK NOW!
              </Link>
            </div>
          </div>
      
          </div>
        </section>
      
        <Footer />
      
      </div>
  )
}

export default Organizer;