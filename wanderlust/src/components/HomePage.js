import React from 'react';
import PrivateNav from './PrivateNav';
import SearchBar from './SearchBar';
import Footer from './Footer';


const HomePage = (props) => {
  return (
    <div className="main">
      <PrivateNav />
      <SearchBar />
      { props.children }
      <Footer />
    </div>
  )
}

export default HomePage;
