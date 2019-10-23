import React from 'react';
import PrivateNav from './PrivateNav';
import SearchBar from './SearchBar';
import Experiences from './Experiences';

const HomePage = (props) => {
  return (
    <div>
      <PrivateNav />
      <SearchBar />
      { props.children }
    </div>
  )
}

export default HomePage;
