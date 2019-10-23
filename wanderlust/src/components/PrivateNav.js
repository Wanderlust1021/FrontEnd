import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

const PrivateNav = ({isAuthenticated, username}) => {
  const logout = () => {}
  return (
    <header clasName="pt-1 pb-1" style={{position: 'sticky', top: '0px'}}>
		<nav className="header-desktop hidden-xs container">
		  <div class="logo-v2">
		      <span>
		        Wanderlust
		      </span>
		  </div>
		  <div class="menu-v2">
		  	<ul class="main-menu">
		  		<li>
            <Link to="/experiences">
		  			  Experiences
		  			</Link>
		  		</li>
		  		<li>
            <Link to="/organizers">
		  			  Organizers
		  			</Link>
		  		</li>
		  		<li class="about">
		  			<Link>
		            { username }
		  				<span class="caret"></span>
		  			</Link>
		  			<ul class="sub-menu">
		  				<li>
		  					<Link to="#">Home</Link>
		  				</li>
		  				<li>
		  					<Link to="#">Profile</Link>
		  				</li>
		  				<li>
		              <Link to="/logout">Logout</Link>
		  				</li>
		  			</ul>
		  
		  		</li>
		  	</ul>
		  </div>
		</nav>
	</header>
  )
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.authState.isAuthenticated,
  username: state.authState.username,
})
export default connect(mapStateToProps)(withRouter(PrivateNav));
