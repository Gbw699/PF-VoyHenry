import axios from "axios";
import React, { useState } from "react";
import style from "./Comments.module.css";

export default function GetComments(props) {
  const user = JSON.parse(localStorage.getItem("user"));

  const [commentStates, setCommentStates] = useState({});
  const [text, setText] = useState("");

  async function handleDelete(commentId) {
    try {
      await axios.delete(`/api/v1/plans/comment/${commentId}`);
      props.getComments();
    } catch (error) {
      console.error(error);
    }
  }

  function handleText(event) {
    const textArea = event.target;
    const text = textArea.value;
    setText(text);
  }

  async function handleEdit(commentId, text) {
    const body = {
      content: text,
    };
    try {
      await axios.patch(`/api/v1/plans/comment/${commentId}`, body);
      props.getComments();
      setCommentStates({ ...commentStates, [commentId]: false });
    } catch (error) {
      console.error(error);
    }
  }

  function toggleTextEdit(commentId) {
    setCommentStates({
      ...commentStates,
      [commentId]: !commentStates[commentId],
    });
  }

  return (
    <div>
      {props.comments?.map((comment) => (
        <div
          key={comment.id}
          className={style.getComment}
        >
          <img
            className={style.imgComment}
            src={comment.users[0].image}
            alt={`${comment.users[0].firstName} ${comment.users[0].lastName}`}
            title={`${comment.users[0].firstName} ${comment.users[0].lastName}`}
            loading="lazy"
          />
          <div className={style.commentInfo}>
            <div className={style.infoCont}>
              <p className={style.infoName}>
                {comment.users[0].firstName} {comment.users[0].lastName}
              </p>
              <p>
                {comment.createdAt.slice(5, 10)}&nbsp;
                {comment.createdAt.slice(11, 16)}
              </p>
            </div>
            <hr
              color="#b1b1b1"
              width="100%"
            />
            <p>{comment.content}</p>
            {commentStates[comment.id] && (
              <div className={style.editCont}>
                <textarea
                  id={comment.id}
                  onChange={handleText}
                  placeholder="Edita tu comentario"
                  className={style.editInput}
                />
                <button
                  onClick={() => handleEdit(comment.id, text)}
                  className={style.saveBtn}
                >
                  Guardar
                </button>
              </div>
            )}
            {comment.users[0].nickName === user.nickName && (
              <div className={style.buttons}>
                {!commentStates[comment.id] && (
                  <button
                    onClick={() => toggleTextEdit(comment.id)}
                    className={style.editBtn}
                  >
                    Editar
                  </button>
                )}
                <button
                  onClick={() => handleDelete(comment.id)}
                  className={style.deleteBtn}
                >
                  Borrar
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
