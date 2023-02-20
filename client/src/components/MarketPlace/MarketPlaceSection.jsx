import React, { useEffect, useState } from "react";
import style from "./MarketPlaceSection.module.css";
import { Link } from "react-router-dom";
import MarketCard from "./MarketCard";
import Filters from "./Filters";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/slices/marketPlaceSlice/thunk";
import marketBgImg from "../../assets/marketBg.png";

export default function MarketPlaceSection() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const products = useSelector(
    (state) => state.marketPlaceStore.allProducts.products
  );

  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    setBackgroundImage(`url(${marketBgImg})`);
  });

  return (
    <div className={style.container}>
      <div className={style.marketBg} style={{ backgroundImage: backgroundImage }} />
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
