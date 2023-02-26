import React from "react";
// import style from "EditProfileInput.module.css";

export default function EditProfileInput({ name, placeholder, setState }) {
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
      />
    </div>
  );
}
