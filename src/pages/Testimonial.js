import React from 'react';
import СlientСomments from '../components/СlientСomments';

function testimonial() {
  return (
    <div className="testimonial testimonialBackgound mt-7 flex flex-wrap flex-col justify-center items-center">
      <СlientСomments />
      <div className="testimonialBottom flex flex-row justify-center items-center">
        <div className="testimonial-circle flex flex-col items-center justify-center hover:border-6 ml-4 mr-4">
          <h5>100%</h5>
          <p>Organic</p>
        </div>
        <div className="testimonial-circle flex flex-col items-center justify-center hover:border-6 ml-4 mr-4">
          <h5>285</h5>
          <p>Active Product</p>
        </div>
        <div className="testimonial-circle flex flex-col items-center justify-center hover:border-6 ml-4 mr-4">
          <h5>385+</h5>
          <p>Organic Orchads</p>
        </div>
        <div className="testimonial-circle flex flex-col items-center justify-center hover:border-6 ml-4 mr-4">
          <h5>25+</h5>
          <p>Years of Farming</p>
        </div>
      </div>
    </div>
  );
}

export default testimonial;