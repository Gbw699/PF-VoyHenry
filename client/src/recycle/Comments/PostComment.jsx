import React from "react";
import style from "./Comments.module.css";

export default function PostComment(props) {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className={style.container}>
      <div className={style.postComment}>
        <img
          className={style.imgComment}
          src={user.image}
          alt=""
        />
        <textarea
          className={style.inputComment}
          style={{ resize: "none", borderRadius: "5px" }}
          placeholder={props.placeholder}
          name="reseña"
          id="reseña"
          cols="70"
          rows="3"
        ></textarea>
      </div>
      <button
        className={style.submitBtn}
        onClick={props.handleClick}
      >
        Dejar reseña
      </button>
    </div>
  );
}
