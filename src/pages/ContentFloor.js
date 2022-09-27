import React from "react";

function ContentFloor() {
  return (
    <div className="contentFloor mt-16">
      <div className="floorImg">
        <img className="floorImgLeft" src='./img/flor-1.jpg' alt="img" />
        <p className="floorText floorTextLeft">Natural!!</p>
        <h4 className="floorTitle floorTitleLeft">Get Garden Fresh Fruits</h4>
      </div>
      <div className="floorImg">
        <img className="floorImgRight" src='./img/flor-2.jpg' alt="img" />
        <p className="floorText floorTextRight">Offer!!</p>
        <h4 className="floorTitle floorTitleRight">Get 10% off on Vegetables</h4>
      </div>
    </div>
  )
}

export default ContentFloor;