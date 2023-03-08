import React, { useState } from "react";
import style from "./UserSearch.module.css";
import axios from "axios";
// import imgSearch from "../../assets/search.png";

export default function UserSearch({ setUsers }) {
  const [input, setInput] = useState();

  async function search() {
    try {
      const response = await axios.get(`/api/v1/users?&name=${input}`);
      setUsers(response.data.users);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={style.searchCont}>
      <input
        className={style.searchInput}
        type="text"
        placeholder="Buscar"
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(event) => event.key === "Enter" && search()}
      />
      <button
        type="button"
        className={style.searchBtn}
        onClick={search}
      >
        Buscar
      </button>
    </div>
  );
}
