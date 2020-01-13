import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import logo from '../images/Logo-Black.jpg';


const PrivateNav = (props) => {
  const username = props.username || localStorage.getItem('username');
  const user  = JSON.parse(localStorage.getItem('user'));
  const id = user.org? user.org.id: user.user.id;
  let dropDown = [
    {name: 'Home', url: '/experiences'},
    {name: 'Profile', url: '/experiences'},
  ]

  let orgDropDown = [
    {name: 'Your Experiences', url: `/experiences/${id}/all`},
    {name: 'Add Experience', url: '/experiences/new'},
    {name: 'Messages', url: '/experiences'},
  ]

  dropDown = user.org? dropDown.concat(orgDropDown): dropDown;

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    props.history.push('/auth/login');
  }

  return (
    <header className="pt-1 pb-1">
		<nav className="header-desktop hidden-xs container">
		  <div class="logo-v2">
		      <img src={logo} alt='logo' />
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
		  			<Link to="#">
		            { username }
		  				<span class="caret"></span>
		  			</Link>
		  			<ul class="sub-menu">
              {
                dropDown.map(({name, url}) => (
                  <li>
                    <Link to={url}>{name}</Link>
                    </li>
                ))
              }
		  				<li>
		              <a onClick={logout} href='/'>Logout</a>
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
