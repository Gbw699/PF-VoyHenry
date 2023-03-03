import React, { useState } from "react";
import { useDispatch } from "react-redux";
import countriesData from "../../countries.json";
import { getPlansbyOrder } from "../../redux/slices/planSlice/thunk";
import style from "./GeolocationForm.module.css";

export default function FilterByCountry() {
  const dispatch = useDispatch();
  const countries = countriesData.data;
  const [provinces, setProvinces] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("");

  function handleCountryChange(event) {
    dispatch(getPlansbyOrder("country", event.target.value));
    setSelectedCountry(event.target.value);
    const provincesData = countries.find(
      (country) => country.country === event.target.value
    );
    setProvinces(provincesData.province);
  }

  function handleProvinceChange(event) {
    setSelectedProvince(event.target.value);
    dispatch(getPlansbyOrder("province", event.target.value));
  }

  return (
    <div className={style.FilterByCountry}>
      <h3 className={style.filterTitle}>Filtrar por País:</h3>
      <hr
        width="100%"
        color="#b1b1b1"
      />
      <select
        className={style.inputs}
        id="country-select"
        value={selectedCountry}
        onChange={handleCountryChange}
      >
        <option value="">Selecciona un país</option>
        {countries.map((country) => (
          <option
            key={country.country}
            value={country.country}
          >
            {country.country}
          </option>
        ))}
      </select>
      {provinces.length > 0 && (
        <select
          className={style.inputs}
          id="province-select"
          value={selectedProvince}
          onChange={handleProvinceChange}
        >
          <option value="">Selecciona una provincia</option>
          {provinces.map((province) => (
            <option
              key={province}
              value={province}
            >
              {province}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
