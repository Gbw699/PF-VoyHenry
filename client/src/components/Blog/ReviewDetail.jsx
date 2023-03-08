import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PostComment from "../../recycle/Comments/PostComment";
import GetComments from "../../recycle/Comments/GetComments";
import style from "./ReviewDetail.module.css";
import { Rating } from "@mui/material";

export default function ReviewDetail({ setReRender, blog, user }) {
  const userSession = JSON.parse(localStorage.getItem("user"));
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [isEditable, setIsEditable] = useState(false);
  const [editedBlog, setEditedBlog] = useState();
  const [showEdit, setShowEdit] = useState(false);

  useEffect(() => {
    if (userSession && blog && userSession.nickName === blog.userNickName) {
      setIsEditable(true);
    } else {
      setIsEditable(false);
    }
  }, []);

  useEffect(() => {
    getComments();
  });

  const handleEdit = async () => {
    try {
      const response = await axios.patch(`/api/v1/blogs/${id}`, editedBlog);
      setEditedBlog(response.data); // update state with edited data
      setReRender(true);
      setShowEdit(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/v1/blogs/${id}`, { data: blog.userNickName });
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedBlog({ ...editedBlog, [name]: value });
  };

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
      userNickName: userSession.nickName,
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

  // if (!blog.average) {
  //   return <div></div>;
  // }

  // const average = blog.average;

  return (
    <div className={style.container}>
      <div className={style.detailCont}>
        <div className={style.profile}>
          <img
            className={style.imgProfile}
            src={user?.image}
            alt={blog?.title}
            title={blog?.title}
            height="80px"
            loading="lazy"
          />
          <div className={style.review}>
            <div className={style.nameCont}>
              <p className={style.name}>{user?.firstName} {user?.lastName}</p>
              <p className={style.date}>{blog?.createdAt?.slice(0, 10)}</p>
            </div>
            <hr
              width="100%"
              color="#f1e100"
            />
            <div className={style.reviewCont}>
              <div className={style.imgCont}>
                <img
                  className={style.img}
                  src={blog?.image}
                  title={blog?.title}
                  alt={blog?.title}
                  loading="lazy"
                  height="120px"
                />
              </div>
              <div className={style.reviewInfo}>
                {!showEdit && <h3 className={style.title}>{blog?.title}</h3>}
                <hr color="#b1b1b1" width="100%" />
                {!showEdit && (
                  <p className={style.blogContent}>{blog?.content}</p>
                )}
                {!showEdit && <Rating
                  name="read-only"
                  value={blog?.average}
                />}
                {isEditable && showEdit && (
                  <input
                    className={style.input}
                    placeholder="Editar título..."
                    name="title"
                    onChange={handleInputChange}
                  />
                )}
                {isEditable && showEdit && (
                  <textarea
                    className={style.input}
                    rows="7"
                    placeholder="Editar contenido..."
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
                <div className={style.buttonsCont}>
                  {isEditable && showEdit && (
                    <button
                      className={style.editBtn}
                      onClick={handleEdit}
                    >
                      Guardar
                    </button>
                  )}
                  {isEditable && (
                    <button
                      className={style.editBtn}
                      onClick={() => setShowEdit(!showEdit)}
                    >
                      {!showEdit ? "Editar" : "Cancelar"}
                    </button>
                  )}
                  {isEditable && showEdit && (
                    <button
                      className={style.deleteBtn}
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
