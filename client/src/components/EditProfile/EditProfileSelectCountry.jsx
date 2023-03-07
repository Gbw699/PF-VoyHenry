import React from "react";
import style from "./EditProfileSection.module.css";
import countriesData from "../../countries.json";

export default function EditProfileSelectCountry({
  provinces,
  setProvinces,
  selectedCountry,
  setSelectedCountry,
  selectedProvince,
  setSelectedProvince,
}) {
  const countries = countriesData.data;

  const handleCountryChange = ({ target: { value } }) => {
    setSelectedCountry(value);
    const selectedCountryData = countries.find(
      (country) => country.country === value
    );
    const { province = [] } = selectedCountryData || {};
    setProvinces(province);
  };

  const handleProvinceChange = ({ target: { value } }) => {
    setSelectedProvince(value);
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
          id="province-select"
          value={selectedProvince}
          onChange={handleProvinceChange}
          className={style.selectInput}
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
    </>
  );
}
