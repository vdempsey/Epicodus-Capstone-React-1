import React from 'react';
import WebFont from 'webfontloader';
import LogIn from './LogIn';
import { Link } from 'react-router-dom';

WebFont.load({
  google: {
    families: ['Open Sans :300,400,700', 'sans-serif']
  }
});

function Menu(){
  let menuContainerStyles = {
    fontFamily: '"Open Sans", sans-serif',
    paddingTop: '20px',
    color: '#404040',
    paddingBottom: '20px',
    fontSize: '25px',
    textAlign: 'center',
    width: '100%'
  };
  let linkColorStyles = {
    color: '#404040',
    textDecoration: 'none',
    width: '300px'
  };
  let menuUlStyles = {
    display: 'flex',
    listStyle: 'none',
    justifyContent: 'center'
  };
  let menuLiStyles = {
    width: '20%',
  }
  return (
    <div style={menuContainerStyles}>
      <div style={menuUlStyles}>
        <div style={menuLiStyles}><Link style={linkColorStyles} to='/'>WHY</Link></div>
        <div style={menuLiStyles}><Link style={linkColorStyles} to='/TestimonialList'>HOW</Link></div>
        <div style={menuLiStyles}><Link style={linkColorStyles} to='/Contact'>REGISTER</Link></div>
      </div>
    </div>
  );
}

export default Menu;
