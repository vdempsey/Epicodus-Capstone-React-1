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
      height: '220px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    childStyles: {
      fontSize: '20px',
      textAlign: 'left',
      fontFamily: '"Open Sans", sans-serif',
      fontWeight: '300',
      color: 'rgba(255, 255, 255, 0.8)',
      marginTop: '-5px'

    },
    imgStyles: {
      paddingTop: '20px',
      width: '120px',
      marginRight: '20px'
    },
    logoTypeStyles: {
      width: '300px',
      paddingTop: '20px'
    }
  };


  return(
    <div>
      <div style={styles.parentStyles}>
        <div>
          <img style={styles.imgStyles} src={logoSm} />
        </div>
        <div>
          <img style={styles.logoTypeStyles} src={logoType} />
          <p style={styles.childStyles}>{props.bannerText}</p>
        </div>
      </div>
    </div>
  );
}

export default BannerTwo;
