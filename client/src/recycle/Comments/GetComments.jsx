import React from "react";
import style from "./DetailPlan.module.css";

function GetComments(props) {
  return (
    <div className={style.comments}>
    <h1>Comentarios</h1>
    <hr
      width="100%"
      color="#F1E100"
    />
    {props.comments?.map((comment) => (
      <div key={comment.id}>
        <div className={style.comment}>
          <div>
            <img
              className={style.imgComment}
              src={comment.users[0].image}
              alt=""
            />
          </div>
          <div>
            <h3 key={comment.id++}>{comment.users[0].nickName}</h3>
            <p key={comment.id++}>{comment.content}</p>
          </div>
        </div>
        <div>
          <hr
            width="100%"
            color="#F1E100"
          />
        </div>
      </div>
    ))}
  </div>
  );
}

export default GetComments;
