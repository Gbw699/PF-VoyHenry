import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PostComment from "../../recycle/Comments/PostComment";
import GetComments from "../../recycle/Comments/GetComments";
import style from "./ReviewDetail.module.css";

export default function ReviewDetail({ blog }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const { id } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments();
  }, []);

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
      <div className={style.detailCont}>
        <div className={style.profile}>
          <img
            className={style.imgProfile}
            src={blog.userimage}
            alt={blog.title}
            title={blog.title}
            height="80px"
            loading="lazy"
          />
          <div className={style.review}>
            <div className={style.nameCont}>
              <p className={style.name}>{blog.userNickName}</p>
              <p className={style.date}>{blog.createdAt?.slice(0, 10)}</p>
            </div>
            <hr
              width="100%"
              color="#f1e100"
            />
            <div className={style.reviewCont}>
              <img
                className={style.img}
                src={blog.image}
                alt={blog.title}
                title={blog.title}
                height="120px"
                loading="lazy"
              />
              <div className={style.reviewInfo}>
                <p className={style.title}>{blog.title}</p>
                <p className={style.blogContent}>{blog.content}</p>
                <p>{blog.rating}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={style.commentsCont}>
          <p className={style.commentsTitle}>Comentarios</p>
          <PostComment handleClick={handleClick} />
          <GetComments comments={comments} />
        </div>
        <button
          className={style.backBtn}
          onClick={() => history.back()}
        >
          Volver
        </button>
      </div>
    </div>
  );
}
