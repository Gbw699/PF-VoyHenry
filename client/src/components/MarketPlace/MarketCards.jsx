import React from "react";
import { Link } from "react-router-dom";
import MarketCard from "./MarketCard";

export default function MarketCards() {
  return (
    <div>
      {/* //TODO Soy un map */}
      <Link
        to=""
        key="element.id"
      >
        <MarketCard
          title="element.id"
          image="element.image"
          price="element.price"
        />
      </Link>
      {/* //TODO Termina el map */}
    </div>
  );
}
