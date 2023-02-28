import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MarketCard from "./MarketCard";
import Filters from "./Filters";
import marketBgImg from "../../assets/marketBg.png";
import style from "./MarketPlaceSection.module.css";
import { getProductsbyOrder } from "../../redux/slices/marketPlaceSlice/thunk";

export default function MarketPlaceSection() {
  const [backgroundImage, setBackgroundImage] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsbyOrder("order","nuevos"));
    setBackgroundImage(`url(${marketBgImg})`);
  },[]);

  const {products, pageNumber, pages} = useSelector(
    (state) => state.marketPlaceStore.filteredProducts
  );

  if(!products){
    return <div>Loading Product...</div>;
  }
  if(products.lenght === 0){
    return <div>Loading Product...</div>;
  }
  
  return (
    <div className={style.container}>
      <div
        className={style.marketBg}
        style={{ backgroundImage: backgroundImage }}
      />
      <div className={style.marketCont}>
        <Filters />
        <div className={style.cardsCont}>
          {products?.map((element) => (
            <Link
              to={`/marketplace/${element.id}`}
              key={element.id}
            >
              <MarketCard
                title={element.title}
                image={element.mainImage}
                price={element.price}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
