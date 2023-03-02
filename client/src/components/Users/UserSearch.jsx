import React from "react";
import style from "./UserSearch.module.css";
// import imgSearch from "../../assets/search.png";

export default function UserSearch() {
  return (
    <div className={style.searchCont}>
      <input
        className={style.searchInput}
        type="text"
        placeholder="Buscar"
      />
      <button
        type="button"
        className={style.searchBtn}
      >
        Buscar
      </button>
    </div>
  );
}
