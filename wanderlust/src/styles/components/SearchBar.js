import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = (props) => {
  return (
    <div className="home-search-bar">
      <div className="container">
        <form className="search-form">
          <input className="form-control form-control-md" type="text" placeholder="Search" />
          <FaSearch size="1.4em"/>
        </form>
      </div>
    </div>
  )
}

export default SearchBar;
