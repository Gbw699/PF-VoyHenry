import React from "react";
import blogsData from "../../blogs";
import style from "./BlogReview.module.css";

export default function BlogReview() {
  const blog = blogsData.data[0];

  return (
    <div className={style.container}>
      <div>
        <h3 className={style.title}>Reseñas destacadas</h3>
        <hr width="100%" color="#F1E100" />
        <div className={style.reviewHeader}>
          <p className={style.headerTitle}>Título:&emsp;</p>
          <p className={style.headerContent}>{blog?.title}</p>
        </div>
        <div className={style.reviewHeader}>
          <p className={style.headerTitle}>Autor:&emsp;</p>
          <p className={style.headerContent}>{blog?.userName}</p>
        </div>
        <p className={style.reviewContent}>Contenido: {blog?.content}</p>
      </div>
    </div>
  );
}
