import React from "react";
import DetailMarketPlaceDescription from "./DetailMarketPlaceDescription";
import DetailMarketPlaceImgPrice from "./DetailMarketPlaceImgPrice";
// import style from "./DetailMarketPlaceSection.module.css";

export default function DetailMarketPlaceSection() {
  return (
    <div>
      <div>
        {/* //!! Comienza map */}
        <DetailMarketPlaceImgPrice
        // image={element.image}
        // imageExtra={element.imageExtra}
        // stock={element.stock}
        // title={element.title}
        // price={element.price}
        />
        {/* //!! Termina map */}
      </div>
      <div>
        <h6>Descripción del producto:</h6>
        <hr />
        {/* //!! Comienza map */}
        {/* <DetailMarketPlaceDescription material={element.material} /> */}
        {/* //!! Termina map */}
      </div>
    </div>
  );
}
