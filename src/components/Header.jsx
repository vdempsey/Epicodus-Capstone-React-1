import React from 'react';
import WebFont from 'webfontloader';
import LogIn from './LogIn';
import { Link } from 'react-router-dom';

WebFont.load({
  google: {
    families: ['Open Sans :300,400,700', 'sans-serif']
  }
});

function Header(){
  let headerComponentStyles = {
    backgroundColor: '#404040',
    fontFamily: '"Open Sans", sans-serif',
    paddingTop: '50px',
    color: '#fff',
  };
  let linkColorStyles = {
    color: '#fff',
    textDecoration: 'none'
  };
  return (
    <div style={headerComponentStyles}>
      <div><Link style={linkColorStyles} to='/'>Home</Link> | <Link style={linkColorStyles} to='/AboutUs'>Blog</Link> | <Link style={linkColorStyles} to='/Contact'>Contact</Link></div>
      <div><Link to='/Register'><div><LogIn /></div></Link></div>
    </div>
  );
}

export default Header;
