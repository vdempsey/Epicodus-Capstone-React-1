import React from 'react';
import WebFont from 'webfontloader';
import LogIn from './LogIn';
import Register from './Register';
import { Link } from 'react-router-dom';

WebFont.load({
  google: {
    families: ['Open Sans :300,400,700', 'sans-serif']
  }
});

function Menu(){
  let menuContainerStyles = {
    textAlign: 'center',
    width: '100%',
    backgroundColor: '#f2f2f2'
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
    padding: '20px',
    fontFamily: '"Open Sans", sans-serif',
    color: '#404040',
    fontSize: '18px',
    lineHeight: '20px',
    margin: '0'
  };
  let activeLiStyles = {
    color: '#fff',
    textDecoration: 'none',
    backgroundColor: '#0090AA',
    width: '300px',
    padding: '20px'
  };
  return (
    <div style={menuContainerStyles}>
      <div style={menuUlStyles}>
        <div style={menuLiStyles}><Link style={linkColorStyles} to='/'>WHY</Link></div>
        <div style={menuLiStyles}><Link style={linkColorStyles} to='/Register'>HOW</Link></div>
        <div style={menuLiStyles}><Link style={activeLiStyles} to='/Register'>REGISTER</Link></div>
      </div>
    </div>
  );
}

export default Menu;
