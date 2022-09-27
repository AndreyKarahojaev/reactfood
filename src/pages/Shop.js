import React from 'react';
import Card from '../components/Card';
import base from '../base.json'


function Shop() {

  return (
    <div className="shop">
      <h3 className="styleTitle items-center justify-center">Organic</h3>
      <h3 className="shopTitle">Our Products</h3>
      <div className="shopGrid grid gap-5">
      {
        base.map((obj) => (
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
  );
}

export default Shop;
