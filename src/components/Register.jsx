import React from 'react';
import BannerTwo from './BannerTwo';
import RegisterForm from './RegisterForm';
import Menu from './Menu';


function Register(){

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
      <BannerTwo bannerText='Activate your 8 to 5' />
      <Menu />
      <RegisterForm />
    </div>
  );
}

export default Register;
