import React from 'react';
import PrivateNav from './PrivateNav';
import Footer from './Footer';


const PageContainer = (props) => {
  return (
    <div className="main" style={{minHeight: '100vh'}}>
      <div className="wrapper">
        <PrivateNav />
        { props.children }
        <Footer />
      </div>
    </div>
  )
}

export default PageContainer;
