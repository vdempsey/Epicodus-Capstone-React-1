import React from 'react';
import PropTypes from 'prop-types';

function Testimonial(props){
  let testimonialComponentStyles = {
    fontFamily: '"Open Sans", sans-serif',
    display: 'flex',
    displayWrap: 'wrap',
    flexDirection: 'row',
    color: '#404040',
    width: '30%',
    margin: '20px',
  };
  let imgTestimonialStyle = {
    width: '90px',
    height: '100px',
    paddingRight: '20px'
  };
  return(
    <div style={testimonialComponentStyles}>
      <img style={imgTestimonialStyle} src={props.image} />
      <div>
        <p>{props.quote}</p>
        <p>{props.name}</p>
      </div>
    </div>
  );
}

Testimonial.propTypes = {
  image: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Testimonial;
