import React from "react";
// import style from './MarketCards.module.css'
import { Link } from "react-router-dom";
import MarketCard from "./MarketCard";
import productCart from "../../plans.json";

export default function MarketCards() {
  return (
    <div>
      {productCart.data.map((element) => (
        <Link
          to={`marketplace/${element.id}`}
          key={element.id}
        >
          <MarketCard
            title={element.title}
            image={element.image}
            price="5"
          />
        </Link>
      ))}
    </div>
  );
}
