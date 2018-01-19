import React from 'react';
import LogIn from './LogIn';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <div><Link to='/'>Home</Link> | <Link to='/AboutUs'>Blog</Link> | <Link to='/Contact'>Contact</Link></div>
      <div><Link to='/Register'><div><LogIn /></div></Link></div>
    </div>
  );
}

export default Header;
