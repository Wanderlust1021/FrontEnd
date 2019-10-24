import React from 'react';
import PrivateNav from './PrivateNav';
import SearchBar from './SearchBar';
import Footer from './Footer';


const HomePage = (props) => {
  return (
    <div style={{fontFamily:"ABeeZee"}}>
      <PrivateNav />
      <SearchBar />
      { props.children }
      <Footer />
    </div>
  )
}

export default HomePage;
