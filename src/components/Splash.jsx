import React from 'react';
import Banner from './Banner';
import banner from '../assets/images/banner-home.jpg';
import TestimonialList from './TestimonialList';
import Menu from './Menu';


function Splash(){

  const styles = {
    fontSize: '10px',
    pStyle: {
      color: 'red'
    },
    h2Style: {
      color: 'blue',
      fontSize: '80px'
    }
  };
  let mainLayoutComponentStyles = {
    margin: '0 auto',
    paddingTop: '50px',
    width: '100%'
  };
  return (
    <div style={mainLayoutComponentStyles}>
      <Banner bannerText='Activate your 8 to 5' />
      <Menu />
      <TestimonialList />
    </div>
  );
}

export default Splash;
