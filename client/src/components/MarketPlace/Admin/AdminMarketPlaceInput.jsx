import React, { useCallback } from "react";
import style from "./AdminMarketPlaceInput.module.css";

export default function AdminMarketPlaceInput({
  name,
  placeholder,
  setState,
  value,
  disabled,
}) {
  const handleInputChange = useCallback(
    (event) => {
      const newValue = event.target.value;
      setState(newValue);
    },
    [setState]
  );

  return (
    <div className={style.inputCont}>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={handleInputChange}
        value={value}
        disabled={disabled}
        className={style.input}
      />
    </div>
  );
}
