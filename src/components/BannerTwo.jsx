import React from 'react';
import logoSm from '../assets/images/sit-stand-icon.png';
import logoType from '../assets/images/logotype.png';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Open Sans :300,400,700', 'sans-serif']
  }
});

function BannerTwo(props){

  const styles = {
    parentStyles: {
      width: '100%',
      textAlign: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundColor: '#414142',
      paddingTop: '40px'
    },
    childStyles: {
      fontSize: '25px',
      textAlign: 'center',
      fontFamily: '"Open Sans", sans-serif',
      fontWeight: '300',
      color: 'rgba(255, 255, 255, 0.8)',
      paddingBottom: '20px',
    },
    imgStyles: {
      width: '120px'
    },
    logoTypeStyles: {
      width: '300px'
    }
  };


  return(
    <div style={styles.parentStyles}>
      <img style={styles.imgStyles} src={logoSm} />
      <img style={styles.logoTypeStyles} src={logoType} />
      <p style={styles.childStyles}>{props.bannerText}</p>
    </div>
  );
}

export default BannerTwo;
