import React from 'react';
import PropTypes from 'prop-types';

function Testimonial(props){
  let testimonialComponentStyles = {
    fontFamily: '"Open Sans", sans-serif',
    fontWeight: '400',
    display: 'flex',
    displayWrap: 'wrap',
    flexDirection: 'row',
    color: '#404040',
    margin: '20px 20px 20px 0',
    width: '30%'
  };
  let imgTestimonialStyle = {
    width: '90px',
    paddingRight: '20px'
  };
  return(
    <div style={testimonialComponentStyles}>
      <div>
        <img style={imgTestimonialStyle} src={props.image} />
      </div>
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
