import React from "react";
import { Link } from "react-router-dom";
import voyHenryImage from "../../assets/voyHENRY_title.png";

export default function FooterImg() {
  return (
    <div>
      <Link to="/home">
        <img
          src={voyHenryImage}
          alt="voyHenry"
        />
      </Link>
    </div>
  );
}
