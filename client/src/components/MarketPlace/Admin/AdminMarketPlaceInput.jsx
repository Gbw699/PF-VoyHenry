import React, { useCallback } from "react";

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
    <div>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={handleInputChange}
        value={value}
        disabled={disabled}
      />
    </div>
  );
}
