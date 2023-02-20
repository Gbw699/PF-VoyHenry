import React, { useEffect } from "react";
import DetailMarketPlaceDescription from "./DetailMarketPlaceDescription";
import DetailMarketPlaceImgPrice from "./DetailMarketPlaceImgPrice";
// import style from "./DetailMarketPlaceSection.module.css";
import detailProductMarketPlace from "../../marketPlace.json";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/slices/marketPlaceSlice/thunk";

export default function DetailMarketPlaceSection() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts(id));
  }, [dispatch]);

  const products = useSelector((state) => state.marketPlaceStore.detailProduct);
  return (
    <div>
      <div>
        {products.map((element) => (
          <DetailMarketPlaceImgPrice
            key={element.id}
            image={element.mainImage}
            // imageExtra={element.imageExtra}
            stock={element.availability}
            title={element.title}
            price={element.price}
          />
        ))}
      </div>
      <div>
        <h6>Descripción del producto:</h6>
        <hr />
        {products.map((element) => (
          <DetailMarketPlaceDescription
            key={element.id}
            material={element.detail}
          />
        ))}
      </div>
    </div>
  );
}
