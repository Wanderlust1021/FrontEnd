import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import logo from '../images/Logo-Black.jpg';


const PrivateNav = (props) => {
  const username = props.username || localStorage.getItem('username');
  const user  = JSON.parse(localStorage.getItem('user'));
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    props.history.push('/auth/login');
  }

  return (
    <header className="pt-1 pb-1" style={{fontFamily:"ABeeZee"}}>
		<nav className="header-desktop hidden-xs container">
		  <div className="logo-v2">
		      <img src={logo} />
		  </div>
		  <div className="menu-v2">
		  	<ul className="main-menu">
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
		  		<li className="about">
		  			<Link to="#">
		            { username }
		  				<span className="caret"></span>
		  			</Link>
		  			<ul className="sub-menu">
		  				<li>
                <Link to="/experiences">Home</Link>
		  				</li>
		  				<li>
		  					<Link to="#">Profile</Link>
		  				</li>
		  				<li>
		              <a onClick={logout}>Logout</a>
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
