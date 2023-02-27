import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import PostComment from "../../recycle/Comments/PostComment";
import GetComments from "../../recycle/Comments/GetComments";

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
        <PostComment handleClick={handleClick} />
        <GetComments comments={comments} />
      </div>
    </div>
  );
}
