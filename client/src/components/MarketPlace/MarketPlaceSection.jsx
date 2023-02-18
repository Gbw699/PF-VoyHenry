import React from "react";
import style from "./MarketPlaceSection.module.css";
import { Link } from "react-router-dom";
import MarketCard from "./MarketCard";
import productMarketPlace from "../../marketPlace.json";
import Filters from "./Filters";

export default function MarketPlaceSection() {
  return (
    <div className={style.container}>
      <div className={style.marketCont}>
        <Filters />
        <div className={style.cardsCont}>
          {productMarketPlace.data.map((element) =>
            element.products.map((element2) => (
              <Link
                to={`marketplace/${element2.id}`}
                key={element2.id}
              >
                <MarketCard
                  title={element2.title}
                  image={element2.image}
                  price={element2.price}
                />
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
