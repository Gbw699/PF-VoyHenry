import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import PostComment from "../../recycle/Comments/PostComment";
import GetComments from "../../recycle/Comments/GetComments";
import style from "./ReviewDetail.module.css";

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
    <div className={style.container}>
      <div className={style.profile}>
        <img
          className={style.imgProfile}
          src={blog.userimage}
          alt="img"
        />
        <h3 className={style.titleName}>{blog.userNickName}</h3>
      </div>
      <hr
        width="100%"
        color="#f1e100"
      />
      <p className={style.fecha}>{blog.createdAt?.slice(0, 10)}</p>
      <img
        className={style.img}
        src={blog.image}
        alt=""
      />
      <h3 className={style.title}>{blog.title}</h3>
      <p className={style.blogContent}>{blog.content}</p>
      <p>{blog.rating}</p>
      <button
        className={style.button}
        onClick={() => history.back()}
      >
        Volver
      </button>
      <div className={style.containerComments}>
        <PostComment handleClick={handleClick} />
        <GetComments comments={comments} />
      </div>
    </div>
  );
}
