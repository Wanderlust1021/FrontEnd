import React from 'react';
import PrivateNav from './PrivateNav';
import SearchBar from './SearchBar';

const HomePage = (props) => {
  return (
    <div>
      <PrivateNav />
      <SearchBar />
    </div>
  )
}

export default HomePage;
