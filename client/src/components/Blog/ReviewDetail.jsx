import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ReviewDetail({ blog }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const { id } = useParams();
  const dispatch = useDispatch();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments();
  });

  const getComments = async () => {
    try {
      const response = await axios.get(`/api/v1/blogs/${id}/comment`);
      setComments(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  async function handleClick() {
    const text = document.querySelector("#reseña").value;
    const obj = {
      userNickName: user.nickName,
      comment: text,
    };
    try {
      await axios.post(`/api/v1/blogs/${id}/comment`, obj);
      getComments();
      document.querySelector("#reseña").value = "";
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <img
        src={blog.userimage}
        alt="img"
      />
      <h3>{blog.userNickName}</h3>
      <p>{blog.createdAt?.slice(0, 10)}</p>
      <img
        src={blog.image}
        alt=""
      />
      <h4>{blog.title}</h4>
      <p>{blog.content}</p>
      <p>{blog.rating}</p>
      <button onClick={() => history.back()}>Volver</button>
      <div>
        <textarea
          placeholder="Dejar reseña"
          name="reseña"
          id="reseña"
          cols="30"
          rows="10"
        ></textarea>
        <button onClick={handleClick}>Dejar reseña</button>
      </div>
      <div>
        <h1>Comentarios</h1>
        <hr
          width="100%"
          color="#F1E100"
        />
        {comments?.map((comment) => (
          <div key={comment.id}>
            <h3 key={comment.id++}>{comment.users[0].nickName}</h3>
            <p key={comment.id++}>{comment.content}</p>
            <hr
              width="100%"
              color="#F1E100"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
