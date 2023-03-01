import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getPlanById } from "../../redux/slices/planSlice/thunk";
import style from "./DetailPlan.module.css";
import axios from "axios";
import { Rating } from "@mui/material";
import PostComment from "../../recycle/Comments/PostComment";
import GetComments from "../../recycle/Comments/GetComments";
import ButtonShare from "../../recycle/ButtonShare/ButtonShare";

export default function DetailPlan() {
  const [value, setValue] = useState();
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const plan = useSelector((state) => state.planStore.planById);
  const [comments, setComments] = useState([]);
  const [isEditable, setIsEditable] = useState(false);
  const [showEditInputs, setShowEditInputs] = useState(false);
  const [inputsValue, setInputsValue] = useState({});

  useEffect(() => {
    dispatch(getPlanById(id));
    getComments();
  }, []);

  useEffect(() => {
    if (user && plan && user.nickName === plan.userNickName) {
      setIsEditable(true);
    } else {
      setIsEditable(false);
    }
  }, [user, plan]);

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
      userNickName: user.nickName,
    };
    try {
      await axios.patch(`/api/v1/plans/${id}/votes`, obj);
      setValue(value);
    } catch (error) {
      console.error(error);
    }
  }

  const handleEditClick = () => {
    setShowEditInputs(!showEditInputs);
  };

  const handleLabel = (event) => {
    setInputsValue(
      {
        [event.target.name]: event.target.value
      });
  };

  const handleSave = async () => {
    const updatedPlan = inputsValue;
    try {
      await axios.patch(`/api/v1/plans/${id}`, updatedPlan);
      dispatch(getPlanById(id));
    } catch (error) {
      console.error(error);
    }
    setShowEditInputs(false);
  };

  const handleDeleteClick = async () => {
    try {
      await axios.delete(`/api/v1/plans/${id}`);
      navigate("/plans");
    } catch (error) {
      console.error(error);
    }
  };

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
          {isEditable && (
            <>
              <button className={style.editButton} onClick={handleEditClick}>
                Editar Plan
              </button>
            </>
          )}
          {showEditInputs && <>
            <button className={style.deleteButton} onClick={handleDeleteClick}>
              Borrar Plan
            </button>
            <button className={style.saveButton} onClick={handleSave}>
              Guardar cambios
            </button>
          </>}
          <h1>{plan.title}</h1>{showEditInputs && <input onChange={handleLabel} name="title" />}
          <h3>{plan.country}</h3>{showEditInputs && <input onChange={handleLabel} name="country" />}
          <h3>{plan.province}</h3>{showEditInputs && <input onChange={handleLabel} name="province" />}
          <h3>{plan.eventDate}</h3>{showEditInputs && <input onChange={handleLabel} name="eventDate" />}
          {plan.average && (
            <Rating
              size="large"
              name="average"
              value={plan.average}
              readOnly
            />
          )}
        </div>
      </div>
      <div className={style.name}>
        <h1>{plan.userNickName}</h1>
        <hr
          width="100%"
          color="#F1E100"
        />
        <p>Descripción del evento</p>
        <p>{plan.description}</p>{showEditInputs && <input onChange={handleLabel} name="description" />}
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
          <label name="rating">Puntaje!</label>
          <button className={style.AgregarBtn}>Agregar a favoritos</button>
          <ButtonShare
            text={`¡Mira este plan que encontré en Example! ${plan.title}`}
          />
        </div>
        <button
          onClick={() => navigate("/plans")}
          className={style.submitBtn}
        >
          Volver
        </button>
      </div>
      <div className={style.comment}>
        <h2>Comentarios</h2>
      </div>
      <div className={style.commentSection}>
        <h2>Comentarios</h2>
        {user && (
          <div className={style.postComment}>
            <PostComment
              handleClick={handleClick}
              label="Escribe tu comentario"
              placeholder="Agrega un comentario"
            />
            <Rating
              size="large"
              name="simple-controlled"
              value={value}
              onChange={handleStarClick}
            />
          </div>)}
        {comments.length > 0 ? (
          <GetComments comments={comments} />
        ) : (
          <p>Aún no hay comentarios</p>
        )}
      </div>
    </div >
  );
}
