import React from "react";
// import style from "./Filters.module.css";
import productMarketPlace from "../../marketPlace.json";

export default function Filters() {
  return (
    <>
      <div>
        <h5>Categorías</h5>
        {productMarketPlace.data.map((element) =>
          element.categories.map((element2) => (
            <p key={element2.id}>{element2.category}</p>
          ))
        )}
      </div>
      <hr />
      <div>
        <h5>Precio</h5>
        <input type="range" />
      </div>
      <div>
        <h5>Ordenar por</h5>
        <p>A ~ Z</p>
        <p>Z ~ A</p>
      </div>
    </>
  );
}
