import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PostComment from "../../recycle/Comments/PostComment";
import GetComments from "../../recycle/Comments/GetComments";
import style from "./ReviewDetail.module.css";
import { Rating } from "@mui/material";

export default function ReviewDetail({ setReRender, blog }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [isEditable, setIsEditable] = useState(false);
  const [editedBlog, setEditedBlog] = useState();
  const [showEdit, setShowEdit] = useState(false);

  useEffect(() => {
    if (user && blog && user.nickName === blog.userNickName) {
      setIsEditable(true);
    } else {
      setIsEditable(false);
    }
  }, [user, blog]);

  useEffect(() => {}, []);

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

  if (!blog.average) {
    return <div></div>;
  }

  const average = blog.average;

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
                alt="Review image"
                height="120px"
              />
              <div className={style.reviewInfo}>
                {!showEdit && <h3 className={style.title}>{blog.title}</h3>}
                {!showEdit && (
                  <p className={style.blogContent}>{blog.content}</p>
                )}
                <Rating
                  name="read-only"
                  value={average}
                />
                {isEditable && showEdit && (
                  <input
                    className={style.inputTitle}
                    placeholder="Editar Título..."
                    name="title"
                    onChange={handleInputChange}
                  />
                )}
                {isEditable && showEdit && (
                  <textarea
                    className={style.textareaBlog}
                    rows="7"
                    placeholder="Editar Contenido..."
                    name="content"
                    onChange={handleInputChange}
                  />
                )}
                {isEditable && showEdit && (
                  <Rating
                    name="stars"
                    onClick={handleInputChange}
                  />
                )}
                <div className={style.divButtons}>
                  {isEditable && showEdit && (
                    <button
                      className={style.backBtn}
                      onClick={handleEdit}
                    >
                      Guardar
                    </button>
                  )}
                  {isEditable && (
                    <button
                      className={style.backBtn}
                      onClick={() => setShowEdit(!showEdit)}
                    >
                      {!showEdit ? "Editar" : "Cancelar"}
                    </button>
                  )}
                  {isEditable && showEdit && (
                    <button
                      className={style.backBtn}
                      onClick={handleDelete}
                    >
                      Borrar Blog
                    </button>
                  )}
                </div>
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
