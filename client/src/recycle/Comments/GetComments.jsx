import axios from "axios";
import React, { useState } from "react";
import style from "./DetailPlan.module.css";

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
  };

  function handleText(event) {
    const textArea = event.target;
    const text = textArea.value;
    setText(text);
  }

  async function handleEdit(commentId, text) {
    const body = {
      content: text
    };
    try {
      await axios.patch(`/api/v1/plans/comment/${commentId}`, body);
      props.getComments();
      setCommentStates({...commentStates, [commentId]: false});
    } catch (error) {
      console.error(error);
    }
  };

  function toggleTextEdit(commentId) {
    setCommentStates({...commentStates, [commentId]: !commentStates[commentId]});
  }

  return (
    <div className={style.comments}>
      <h1>Comentarios</h1>
      <hr width="100%" color="#F1E100" />
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
              <h3>
                {comment.createdAt.slice(5, 10)}&nbsp;
                {comment.createdAt.slice(11, 16)}
              </h3>
              <h3>{comment.users[0].nickName}</h3>
              <p>{comment.content}</p>
              {comment.users[0].nickName === user.nickName && (
                <>
                  <button onClick={() => handleDelete(comment.id)}>Borrar</button>
                  {!commentStates[comment.id] && <button onClick={() => toggleTextEdit(comment.id)}>Editar</button>}
                  {commentStates[comment.id] && (
                    <>
                      <textarea id={comment.id} onChange={handleText}></textarea>
                      <button onClick={() => handleEdit(comment.id, text)}>Guardar</button>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
          <div>
            <hr width="100%" color="#F1E100" />
          </div>
        </div>
      ))}
    </div>
  );
}