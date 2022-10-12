import React from 'react';
import Card from '../components/Card';
import OtherProduct from './OtherProduct';
import base from '../base.json';
import Skeleton from '../components/Sceleton';
import Search from '../components/Search';
import Pagination from '../components/Pagination';

function Shop() {

  const [isLoading, setIsLoading] = React.useState(true);
  const [searchValue, setSearchValue] = React.useState('');
  const [currentPage, setCurrentPage] = React.useState(1);


  
  const arraySkeleton = [...new Array(6)].map((_, i) => <Skeleton key={i} />);
  const itemsBase = base.filter((obj) => {
    if (obj.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
     return true;
    }
    return false;
    }).map((obj) => (
    <Card
      title={obj.title}
      imageUrl={obj.imageUrl}
      price={obj.price}
      priceOld={obj.priceOld}
      rating={obj.rating}
    />
  ));
   
  //https://6331b2413ea4956cfb652835.mockapi.io/items

  React.useEffect(() => {
    setTimeout(() => { 
      setIsLoading(false);
    }, 1400);
  }, [searchValue,currentPage]);

  return (
    <div className="shop">
      <h3 className="styleTitle items-center justify-center">Organic</h3>
      <h3 className="shopTitle">Our Products</h3>
      <Search className="search" searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="shopGrid grid gap-5">
      {
       isLoading 
       ? arraySkeleton
       : itemsBase
      }
      </div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
      <OtherProduct/>
    </div>
  );
}

export default Shop;
