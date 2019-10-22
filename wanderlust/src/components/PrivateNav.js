import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateNav = ({isAuthenticated, username}) => {
  const logout = () => {}
  return (
    <header  style={{top:'0px', position: 'sticky'}}>
		<div className="header-desktop hidden-xs container">
		  <div class="logo-v2">
		      <span>
		        Wanderlust
		      </span>
		  </div>
		  <nav class="menu-v2">
		  	<ul class="main-menu">
		  		<li>
		  			<Link>
		  			  Experiences
		  			</Link>
		  		</li>
		  		<li>
		  			<Link>
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
		  </nav>
		</div>
	</header>
  )
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.authState.isAuthenticated,
  username: state.authState.username,
})
export default connect(mapStateToProps)(PrivateNav);
