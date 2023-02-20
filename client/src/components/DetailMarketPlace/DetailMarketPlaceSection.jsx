import React from "react";
import DetailMarketPlaceDescription from "./DetailMarketPlaceDescription";
import DetailMarketPlaceImgPrice from "./DetailMarketPlaceImgPrice";
// import style from "./DetailMarketPlaceSection.module.css";
import detailProductMarketPlace from "../../marketPlace.json";
import { useParams } from "react-router-dom";

export default function DetailMarketPlaceSection() {
  const { id } = useParams();
  return (
    <div>
      <div>
        {detailProductMarketPlace.data.map((element) => (
          <DetailMarketPlaceImgPrice
            key={element.id}
            image={element.image}
            imageExtra={element.imageExtra}
            stock={element.stock}
            title={element.title}
            price={element.price}
          />
        ))}
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
