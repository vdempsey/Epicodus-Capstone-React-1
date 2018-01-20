import React from 'react';
import BannerTwo from './BannerTwo';
import WebFont from 'webfontloader';
import { Link } from 'react-router-dom';


WebFont.load({
  google: {
    families: ['Open Sans :300,400,700', 'sans-serif']
  }
});

function Contact(){
  let mainLayoutComponentStyles = {
    margin: '0 auto',
    paddingTop: '50px',
    width: '100%',
    fontFamily: '"Open Sans", sans-serif',
  };
  return (
    <div style={mainLayoutComponentStyles}>
      <BannerTwo bannerText='Activate your 8 to 5' />
      <h2>Some tagline goes here</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
  );
}

export default Contact;
