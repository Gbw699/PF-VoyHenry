import React from "react";
import style from "./EditProfileSection.module.css";
import countriesData from "../../countries.json";

export default function EditProfileSelectCountry({
  selectedCountry,
  setSelectedCountry,
}) {
  const countries = countriesData.data;

  const handleCountryChange = ({ target: { value } }) => {
    console.log(value);
    setSelectedCountry(value);
  };

  return (
    <>
      <p className={style.title}>Tu nacionalidad</p>
      <select
        id="country-select"
        value={selectedCountry}
        onChange={handleCountryChange}
        className={style.selectInput}
      >
        <option>Selecciona un país</option>
        {console.log(countries)}
        {countries.map((country) => (
          <option
            key={country.country}
            value={country.country}
          >
            {country.country}
          </option>
        ))}
      </select>
    </>
  );
}
