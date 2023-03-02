import React from "react";

export default function AdminMarketPlaceInput({
  name,
  placeholder,
  setState,
  value,
  disabled,
}) {
  const handleChange = (event) => {
    setState(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        value={value && value}
        disabled={disabled && disabled}
      />
    </div>
  );
}
