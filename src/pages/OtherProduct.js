import React from 'react';
import Card from '../components/Card';
import base from '../base.json'

function OtherProduct() {

  const slicedArray = base.slice(0, 3);

  return (
    <div className="otherProduct mt-5">
      <div className="otherProductBackground flex flex-col mb-20">
        <div className="flex items-center justify-between pl-9 pr-9">
          <div className="otherProductTop">
            <h3>Offer Products</h3>
            <h4>We Offer Organic for You</h4>
          </div>
          <button className="btn-other flex justify-center items-start text-center">View All products
            <span>
            <svg width="38" height="34" viewBox="0 0 38 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 34C29.4934 34 38 26.3888 38 17C38 7.61116 29.4934 0 19 0C8.50659 0 0 7.61116 0 17C0 26.3888 8.50659 34 19 34Z" fill="#335B6B"/>
              <path d="M25.0384 16.5H11M19.0769 11L26 16.5L19.0769 22V11Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </span>
          </button>
        </div>
        <div className="productCard shopGrid grid gap-5">
          {
            slicedArray.map((obj) => (
              <Card 
              title = {obj.title}
              imageUrl = {obj.imageUrl}
              price = {obj.price}
              priceOld = {obj.priceOld}
              rating = {obj.rating}
              />
            ))
          }
        </div>
      </div>

      <div className="otherProductButtom">
        <div className="productButtom">
          <img src="./img/other1.jpg" alt="other" />
          <span className="">Fruit Juice</span>
        </div>
        <div className="productButtom">
          <img src="./img/other2.jpg" alt="other" />
          <span className="">Organic Food</span>
        </div>
        <div className="productButtom">
          <img src="./img/other3.jpg" alt="other" />
          <span className="">Nuts Cookies</span>
        </div>
      </div>
    </div>
  );
}

export default OtherProduct;
