import React, {useState} from "react";
import {FaStar} from "react-icons/fa"

function StarRating() {
  const [rating,setRating] = useState(null)
  const [ratingHover,setRatingHover] = useState(null)
  return (
    <div className="flex flex-row">
      {[...Array(5)].map((star,i) => {
        const ratingValue = i + 1;

        return (
        <label>
          <input 
          type="radio" 
          name="rating" 
          value={ratingValue}  
          onClick={() => setRating(ratingValue)}

          /> 
          <FaStar 
          className="star" 
          color={ratingValue <= (ratingHover || rating) ? "#FFA858" : "#274C5B" } 
          size={15} 
          onMouseEnter = {() => setRatingHover(ratingValue)}
          onMouseLeave = {() => setRatingHover(null)}
          />
        </label>
        );
      })}
      
    </div>
  )
};

export default StarRating;