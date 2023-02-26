import React from "react";
// import style from "UserSearch.module.css";
import imgSearch from "../../assets/search.png";

export default function UserSearch() {
  return (
    <form>
      <input
        type="text"
        placeholder="Buscar"
      />
      <button>
        <img
          src={imgSearch}
          alt="Search"
        />
      </button>
    </form>
  );
}
