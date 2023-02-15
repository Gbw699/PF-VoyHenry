import React from "react";
// import style from "./MarketPlace.module.css";
import Filters from "../../components/MarketPlace/Filters";
import MarketCards from "../../components/MarketPlace/MarketCards";
export default function MarketPlace() {
  return (
    <>
      <Filters />
      <MarketCards />
    </>
  );
}
