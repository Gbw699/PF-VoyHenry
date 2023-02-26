import React from "react";
import style from "./DetailPlan.module.css";

export default function PostComment(props) {
  const user = JSON.parse(localStorage.getItem("user"));
  
  return (
    <div>
      <div>
        <img
          className={style.imgComment}
          src={user.image}
          alt=""
        />
        <textarea
          style={{ resize: "none", borderRadius: "5px" }}
          placeholder="Dejar reseña"
          name="reseña"
          id="reseña"
          cols="70"
          rows="3"
        ></textarea>
      </div>
      <div className={style.buttonCommentDiv}>
        <button
          className={style.submitBtn}
          onClick={props.handleClick}
        >
          Dejar reseña
        </button>
      </div>
    </div>
  );
};