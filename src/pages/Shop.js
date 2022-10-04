import React from 'react';
import Card from '../components/Card';
import OtherProduct from './OtherProduct';
import base from '../base.json';
import Skeleton from '../components/Skeleton';

function Shop() {

  const [isLoading, setIsLoading] = React.useState(true);

  //https://6331b2413ea4956cfb652835.mockapi.io/items


  React.useEffect(() => {
    setTimeout(() => { 
      setIsLoading(false);
    }, 1400);
  }, []);

  return (
    <div className="shop">
      <h3 className="styleTitle items-center justify-center">Organic</h3>
      <h3 className="shopTitle">Our Products</h3>
      <div className="shopGrid grid gap-5">
      {
       isLoading 
       ? [...new Array(6)].map((_,i) => <Skeleton key={i} /> ) 
       : base.map((obj) => (
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
      <OtherProduct/>
    </div>
  );
}

export default Shop;
