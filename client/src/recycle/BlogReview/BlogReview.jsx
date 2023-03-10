import axios from "axios";
import { Rating, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import style from "./BlogReview.module.css";
import getMediaQuery from "../MediaQuerys/mediaQuerys.mjs";

export default function BlogReview({ blog }) {
  const isMobile = useMediaQuery(getMediaQuery("xs"));
  const [name, setName] = useState({});

  useEffect(()=>{
    getNames(blog.id);
  },[]);

  const getNames = async (id) => {
    const response = await axios.get(`/api/v1/blogs/${id}`);
    const {firstName, lastName } = response.data.data.users;
    setName({firstName: firstName, lastName: lastName});
  };


  return (
    <div className={style.container}>
      <div className={style.reviewCont}>
        <Link
          aria-label="Ver más detalles de esta reseña"
          to={`/users/${blog.userNickName}`}
        >
          {!isMobile && <div
            className={style.userImg}
            style={{ backgroundImage: `url(${blog.userimage})` }}
          />}
        </Link>
        <div className={style.userCont}>
          <div className={style.nameDate}>
            <h3 className={style.name}>{name?.firstName} {name?.lastName}</h3>
            <p>{blog.date}</p>
          </div>
          <hr
            color="#707070"
            width="100%"
          />
          <NavLink
            to={`/blog/${blog.id}`}
            className={style.review}
          >
            <div
              className={style.reviewImg}
              style={{ backgroundImage: `url(${blog.image})` }}
            />
            <div className={style.reviewInfo}>
              <h4 className={style.infoName}>{blog.title}</h4>
              <p className={style.infoDescription}>{blog.content}</p>
              <p className={style.infoValoration}>
                Valoración:{" "}
                <span className={style.infoValNum}><Rating defaultValue={blog?.average} value={blog?.average}/></span>
              </p>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
