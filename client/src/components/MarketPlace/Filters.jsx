import React from "react";
import style from "./Filters.module.css";
import productMarketPlace from "../../marketPlace.json";

export default function Filters() {
  return (
    <div className={style.filters}>
      <h5 className={style.title}>Categorías</h5>
      <hr color="#F1E100" width="100%" />
      {productMarketPlace.data.map((element) =>
        element.categories.map((element2) => (
          <p key={element2.id} className={style.option}>{element2.category}</p>
        ))
      )}
      <h5 className={style.title}>Precio</h5>
      <hr color="#F1E100" width="100%" />
      <input type="range" />
      <h5 className={style.title}>Ordenar por</h5>
      <hr color="#F1E100" width="100%" />
      <p className={style.option}>A ~ Z</p>
      <p className={style.option}>Z ~ A</p>
    </div>
  );
}
