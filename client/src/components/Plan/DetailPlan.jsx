import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getPlanById } from "../../redux/slices/planSlice/thunk";
import style from "./DetailPlan.module.css";
import axios from "axios";
import { Rating } from "@mui/material";

export default function DetailPlan() {
  const [value, setValue] = useState();
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const plan = useSelector((state) => state.planStore.planById);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    dispatch(getPlanById(id));
    getComments();
  }, []);

  const getComments = async () => {
    try {
      const response = await axios.get(`/api/v1/plans/${id}/comment`);
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
      await axios.post(`/api/v1/plans/${id}/comment`, obj);
      getComments();
      document.querySelector("#reseña").value = "";
    } catch (error) {
      console.error(error);
    }
  }

  async function handleStarClick(event, value) {
    const obj = {
      votes: 1,
      stars: value,
      userNickName: user.nickName
    };
    try {
      await axios.patch(`/api/v1/plans/${id}/votes`, obj);
      setValue(value);
    } catch (error) {
      console.error(error);
    }
  }

  if (!plan) {
    return <div>Loading... </div>;
  }

  return (
    <div className={style.container}>
      <div className={style.plan}>
        <div
          style={{ backgroundImage: `url(${plan.mainImage})` }}
          className={style.imgCont}
        >
          <h1>{plan.title}</h1>
          <h3>{plan.country}</h3>
          <h3>{plan.province}</h3>
          <h3>{plan.eventDate}</h3>
          {plan.average && <Rating
            size="large"
            name="average"
            value={plan.average}
            readOnly
          />}
        </div>
      </div>

      <div className={style.name}>
        <h1>{plan.userNickName}</h1>
        <p>Descripción del evento</p>
        <hr
          width="100%"
          color="#F1E100"
        />
        <p>
          {plan.description}
        </p>
      </div>
      <div className={style.galeria}>
        <h1>Galería</h1>
        <hr
          width="100%"
          color="#F1E100"
        />
        <img
          className={style.img}
          src={plan.images}
          alt={plan.title}
        />
        <img
          className={style.img}
          src={plan.images}
          alt={plan.title}
        />
      </div>
      <div className={style.buttons}>
        <div className={style.button}>
          <button className={style.submitBtn}>Unirse</button>
            <Rating
              size="large"
              name="rating"
              value={value}
              onChange={handleStarClick}
            />

          <button className={style.AgregarBtn}>Agregar a favoritos</button>
        </div>
        <button
          onClick={() => navigate("/home")}
          className={style.submitBtn}
        >
          Volver
        </button>
      </div>
      <div>
        <textarea
          placeholder="Dejar reseña"
          name="reseña"
          id="reseña"
          cols="30"
          rows="10"
        ></textarea>
        <button
          className={style.submitBtn}
          onClick={handleClick}
        >
          Dejar reseña
        </button>
      </div>
      <div className={style.comments}>
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
