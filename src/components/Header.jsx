import React from 'react';
import WebFont from 'webfontloader';
import LogIn from './LogIn';
import Register from './Register';
import Error404 from './Error404';
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
    color: '#fff',
    borderBottom: '1px solid #f2f2f2',
    padding: '20px',
    position: 'fixed',
    width: '100%',
    display: 'flex',
    height: '35px',
    justifyContent: 'space-around',
    alignItems: 'center',
  };
  let linkColorStyles = {
    color: '#fff',
    textDecoration: 'none',
    paddingRight: '20px'
  };
  return (
    <div style={headerComponentStyles}>
      <div>
        <Link style={linkColorStyles} to='/'>Home</Link>
        <Link style={linkColorStyles} to='/TestimonialList'>Testimonials</Link>
        <Link style={linkColorStyles} to='/Contact'>Contact</Link>
      </div>
      <div><Link to='/Register'><LogIn /></Link></div>
    </div>
  );
}

export default Header;
