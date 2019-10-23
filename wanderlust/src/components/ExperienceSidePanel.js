import React from 'react';
import { Link } from 'react-router-dom';

const ExperienceSidePanel = (props) => {

  return (
    <div className="panel panel-default">
      <div className="panel-body">
        <ul className="nav nav-tabs">
          <li class="nav-item">
            <Link className="nav-link active" href="#map">About</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" href="#map">Map</Link>
          </li>
        </ul>
        <div className="tab-content">
          <div className="tab-pane fade active in" id="about">
            <div className="row">
              <div className="col-md-12">
                <p>
                  Cameron Highlands a hill resort, at 1,500 metres, is in the State of 
                  Pahang, with Temperatures 10 – 25 degrees C. It was discovered by
                  Sir William Cameron in 1885, a British Surveyor.
                </p>

                <p>
                  It has 3 districts Ringlet, Tanah Rata and Ulu Telom with a mixed 
                  population of 40,000 comprising of entrepreneurs, farm workers,
                  service industry workers and government servants. 
                </p>
              </div>
            </div>
            <hr/>
            <a class="btn-custom btn-red btn-lg btn-block" style={{color: '#fff'}}>BOOK NOW!</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExperienceSidePanel;
