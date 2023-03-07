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
  const [isEditable, setIsEditable] = useState(false);
  const [editedBlog, setEditedBlog] = useState();

  useEffect(() => {
    if (user && blog && user.nickName === blog.userNickName) {
      setIsEditable(true);
    } else {
      setIsEditable(false);
    }
  }, [user, blog]);

  useEffect(() => {
    getComments();
  },[]);

  const handleEdit = async () => {
    try {
      const response = await axios.patch(`/api/v1/blogs/${id}`, editedBlog);
      setEditedBlog(response.data); // update state with edited data
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

  console.log(blog);

  return (
    <div className={style.container}>
      {isEditable && <button onClick={handleDelete}>Borrar Blog</button>}
      <div className={style.detailCont}>
        <div className={style.profile}>
          <img
            className={style.imgProfile}
            src={blog.userimage}
            alt="img"
            height="80px"
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
              {isEditable && <button onClick={handleEdit}>Editar Blog</button>}
                <p className={style.title}>{blog.title}</p>
                {isEditable && <input name="title" onChange={handleInputChange}/>}
                <p className={style.blogContent}>{blog.content}</p>
                {isEditable && <input name="content" onChange={handleInputChange}/>}
                <p>{blog.average}</p>
                {isEditable && <input name="stars" onChange={handleInputChange}/>}
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
