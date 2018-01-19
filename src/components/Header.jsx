import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <Link to='/'>Home</Link> | <Link to='/AboutUs'>Blog</Link> | <Link to='/Contact'>Contact</Link>

    </div>
  );
}

export default Header;
