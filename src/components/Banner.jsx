import React from 'react';
import banner from '../assets/images/index-logo.gif';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Open Sans :300,400,700', 'sans-serif']
  }
});

function Banner(props){

  const styles = {
    parentStyles: {
      width: '100%',
      textAlign: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundColor: '#414142',
      paddingTop: '40px',
      height: '330px'
    },
    childStyles: {
      fontSize: '20px',
      textAlign: 'center',
      fontFamily: '"Open Sans", sans-serif',
      fontWeight: '300',
      color: 'rgba(255, 255, 255, 0.8)',
    }
  };


  return(
    <div style={styles.parentStyles}>
      <style jsx>{`

        img {
          width: 250px;
        }

      `}</style>
      <img src={banner} />
      <p style={styles.childStyles}>{props.bannerText}</p>
    </div>
  );
}

export default Banner;
