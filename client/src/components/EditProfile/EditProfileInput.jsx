import React from "react";
import style from "./EditProfileInput.module.css";

export default function EditProfileInput({ name, placeholder, setState }) {
  const handleChange = (event) => {
    setState(event.target.value);
  };

  return (
    <div className={style.container}>
      <input
        className={style.input}
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
}
