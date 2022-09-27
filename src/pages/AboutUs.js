import React from "react";


function AboutUs() {

  return (

    <div className="aboutUs flex justify-center items-center ">
      <div className="aboutUsImg-block w-2/4 ml-5">
        <img src='./img/aboutUs.jpg' alt="img"/>
      </div>
      <div className="content-block w-2/4 mr-5">
        <h3 className="styleTitle">About Us</h3>
        <h3 className="chiefTitle">We Believe in Organic Foods For Strong Health</h3>
        <p className="chiefText">
          Welcome to the world of natural and organic. Here you can discover the bounty of nature. 
          We have grown on the principles of health, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition.</p>
        <div className="minor">
          <div className="minorBlock flex items-center">
            <img src="./img/svg/OrganicFoods.svg" alt="svg" />
            <div>
              <h4 className="minorTitle">Organic Foods Only</h4>
              <p className="minorText">The Product that you ordered will be verified that we have or not if have we will start to move on with the next step.</p>
            </div>
          </div>
          <div className="minorBlock flex items-center">
            <img src="./img/svg/QualityStandards.svg" alt="svg" />
            <div>
              <h4 className="minorTitle">Quality Standards</h4>
              <p className="minorText">Once your product is packed it will be delivered to your nearby locality you can directly visit the to buy the product.</p>
            </div>
          </div>
        </div>
        <button className="aboutUsBtn">Shop Now
        <span>
          <svg width="38" height="34" viewBox="0 0 38 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 34C29.4934 34 38 26.3888 38 17C38 7.61116 29.4934 0 19 0C8.50659 0 0 7.61116 0 17C0 26.3888 8.50659 34 19 34Z" fill="#335B6B"/>
            <path d="M25.0384 16.5H11M19.0769 11L26 16.5L19.0769 22V11Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </span>
        </button>
      </div>
    </div>

  );

}
export default AboutUs;