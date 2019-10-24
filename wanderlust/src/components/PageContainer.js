import React from 'react';
import PrivateNav from './PrivateNav';
import Footer from './Footer';


const PageContainer = (props) => {
  return (
    <div className="main">
      <PrivateNav />
      { props.children }
      <Footer />
    </div>
  )
}

export default PageContainer;
