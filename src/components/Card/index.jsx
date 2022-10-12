import React, {useState}  from "react";
import StarRating from "../StarReiting";
import styles from './Card.module.scss';


function Card({title,imageUrl,price,priceOld,rating}) {

  const [cardCount,setCardCount] = useState(0);
  const onClickAddButton = () => {
    setCardCount(cardCount + 1);
  }

  return(
    <div className="card flex flex-col flex-wrap justify-between">
      <div className="cardGroup">
        <button onClick={onClickAddButton} className="cardGroupText">Byu<i>{cardCount}</i></button>
      </div>
      <img className="cardImg"  src={imageUrl} alt="cartinka" />
      <div className="cardContent flex flex-wrap">
        <p className="cardText">{title}</p>
      <div className={styles.podpiz}>
        <div className="flex flex-row">
          <p className="cardPriceOld p-2">$ {priceOld} USD</p>
          <p className="cardPrice p-2">$ {price} USD</p>
        </div>
        <div className="starBlock flex flex-col justify-end">
          <StarRating />
          <p>this rating {rating}</p>
        </div>
      </div>


      </div>
    </div>
  );
}

export default Card;