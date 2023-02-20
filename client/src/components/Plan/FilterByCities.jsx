import React, { useState } from "react";
import countriesData from "../../countries.json";
import style from "./GeolocationForm.module.css";

export default function FilterByCities() {

  const countries = countriesData.data;
  const [provinces, setProvinces] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("");

  function handleCountryChange(event) {
    setSelectedCountry(event.target.value);
    const provincesData = countries.find(country => country.country === event.target.value);
    setProvinces(provincesData.province);
    console.log(event.target.value);
  }

  function handleProvinceChange(event) {
    setSelectedProvince(event.target.value);
    // Acá tengo que dispatchar la action para que renderPlans (estado global) sea por provincias
    console.log(event.target.value);
  }

  return (
    <div>
      <label htmlFor="country-select" className={style.filterTitle}>Filtrar por País:</label>
      <select className={style.inputs} id="country-select" value={selectedCountry} onChange={handleCountryChange}>
        <option value="">Selecciona un país</option>
        {countries.map(country => (
          <option key={country.country} value={country.country}>{country.country}</option>
        ))}
      </select>
      {provinces.length > 0 && (
        <select className={style.inputs} id="province-select" value={selectedProvince} onChange={handleProvinceChange}>
          <option value="">Selecciona una provincia</option>
          {provinces.map(province => (
            <option key={province} value={province}>{province}</option>
          ))}
        </select>
      )}
    </div>
  );
}