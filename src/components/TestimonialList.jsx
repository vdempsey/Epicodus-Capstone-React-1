import React from 'react';
import Testimonial from './Testimonial';
import user1 from '../assets/images/user1.png';
import user2 from '../assets/images/user2.png';
import user3 from '../assets/images/user3.png';
import { Link } from 'react-router-dom';

const masterTestimonialList = [
  {
    image: user1,
    name: 'User 1 name',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed lacus vel dui vehicula molestie. Proin tincidunt rhoncus condimentum. Phasellus elit magna, imperdiet sit amet lacus ac, porta gravida erat.'
  },
  {
    image: user2,
    name: 'User 2 name',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed lacus vel dui vehicula molestie. Proin tincidunt rhoncus condimentum. Phasellus elit magna, imperdiet sit amet lacus ac, porta gravida erat.'
  },
  {
    image: user3,
    name: 'User 1 name',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed lacus vel dui vehicula molestie. Proin tincidunt rhoncus condimentum. Phasellus elit magna, imperdiet sit amet lacus ac, porta gravida erat.'
  }
];

function TestimonialList(){
  let testimonialListComponentStyles = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: '0 auto',
    justifyContent: 'center',
    width: '1000px'
  };
  return (
    <div style={testimonialListComponentStyles}>
      {masterTestimonialList.map((testimonial, index) =>
        <Testimonial image={testimonial.image}
          quote={testimonial.quote}
          name={testimonial.name}
          key={index}/>
      )}
    </div>
  );
}

export default TestimonialList;
