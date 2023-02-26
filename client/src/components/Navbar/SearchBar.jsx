import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getBlogsSearch } from "../../redux/slices/blogSlice/thunk";
import { getPlansSearch } from "../../redux/slices/planSlice/thunk";
import { useState } from "react";
import style from "./SearchBar.module.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const location = useLocation();

  const [input, setInput] = useState("");

  const handleSearch = (input) => {
    if (location.pathname === "/blog") dispatch(getBlogsSearch(input));
    if (location.pathname === "/plans") dispatch(getPlansSearch(input));
  };

  return (
    <div className={style.searchCont}>
      <input
        className={style.searchInput}
        type="search"
        onChange={(event) => {
          setInput(event.target.value);
        }}
        onKeyDown={(event) => event.key === "Enter" && handleSearch(input)}
      />
      <button
        type="button"
        className={style.searchBtn}
        onClick={() => handleSearch(input)}
      >
        Buscar
      </button>
    </div>
  );
}
