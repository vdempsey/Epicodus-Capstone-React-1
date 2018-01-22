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
    height: '35px',

  };
  let linkColorStyles = {
    color: '#fff',
    textDecoration: 'none',
    paddingRight: '20px'
  };
  let linkButtonStyles = {
    textDecoration: 'none',
    paddingRight: '10px'
  };
  let test = {
    display: 'flex',
    alignItems: 'center'
  };
  let containerStyle = {
    width: '1000px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  };
  return (
    <div style={headerComponentStyles}>
      <div style={containerStyle}>
        <div>
          <Link style={linkColorStyles} to='/'>HOME</Link>
          <Link style={linkColorStyles} to='/Register'>BLOG</Link>
          <Link style={linkColorStyles} to='/Contact'>CONTACT</Link>
        </div>
        <div style={test}><Link style={linkButtonStyles} to='/'><LogIn /></Link>
          <div>
            <style jsx>{`
            @import url('.././fonts/BebasNeue Bold.ttf');

            button {
              font-family: 'BebasNeue';
              padding: 8px 20px;
              font-size: 17px;
              letter-spacing: 0.5px;
              color: #fff;
              background-color: #0090AA;
              border: none;
              outline: none;
              width: 100px;
            }

            ::-webkit-input-placeholder {
              color: #b5b5b5;
            }

          `}</style>
            <Link to='/Register'><button>Register</button></Link></div></div>
      </div>
    </div>
  );
}

export default Header;
