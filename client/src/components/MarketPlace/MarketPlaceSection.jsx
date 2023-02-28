import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MarketCard from "./MarketCard";
import Filters from "./Filters";
import marketBgImg from "../../assets/marketBg.png";
import style from "./MarketPlaceSection.module.css";

export default function MarketPlaceSection() {
  const products = useSelector(
    (state) => state.marketPlaceStore.allProducts.products
  );

  console.log(products);

  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    setBackgroundImage(`url(${marketBgImg})`);
  });

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
