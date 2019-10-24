import React from 'react';
import SideBar from './SideBar';


const Home = (props) => {

  return (
    <div class="container">
      <div className="row">
        <div className="col-md-3">
          <SideBar />
        </div>
        <div className="col-md-9"></div>
      </div>
    </div>
  )
}

export default Home;
