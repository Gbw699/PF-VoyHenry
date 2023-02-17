import React from "react";
import MarcosParella from "./MarcosParella";
// import style from "./AboutUsSection.module.css";

export default function AboutUsSection() {
  return (
    <div>
      <div>
        <h3>Descripción del proyecto</h3>
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, cum in
          similique atque, odio tempora sequi doloremque eos inventore deleniti,
          ad minima temporibus! Magnam, dolorum cumque nulla unde sequi aperiam.
        </p>
      </div>
      <div>
        <h3>Desarrolladores</h3>
        <hr />
        <MarcosParella />
      </div>
    </div>
  );
}
