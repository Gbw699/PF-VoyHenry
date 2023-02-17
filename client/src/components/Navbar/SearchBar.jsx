import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getBlogsSearch } from "../../redux/slices/blogSlice/thunk";
import { getPlansSearch } from "../../redux/slices/planSlice/thunk";
import { useEffect, useState } from "react";
import style from "./SearchBar.module.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const location = useLocation();

  const [input, setInput] = useState("");

  useEffect(() => {
    const delayFn = setTimeout(() => {
      if (input) {
        handleSearch(input);
      }
    }, 500);

    return () => {
      clearTimeout(delayFn);
    };
  }, [input]);

  const handleSearch = (input) => {
    if (location.pathname === "/blog") dispatch(getBlogsSearch(input));
    if (location.pathname === "/plans") dispatch(getPlansSearch(input));
  };

  return (
    <div className={style.searchCont}>
      <input
        type="search"
        onChange={(event) => {
          setInput(event.target.value);
        }}
        className={style.searchInput}
      />
      <button
        type="submit"
        className={style.searchBtn}
      >
        Search
      </button>
    </div>
  );
}
