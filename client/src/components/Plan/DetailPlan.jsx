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
import MapPlan from "./MapPlan";

export default function DetailPlan() {
  const [value, setValue] = useState();
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const plan = useSelector((state) => state.planStore.planById);
  const [favorites, setFavorites] = useState();
  const [comments, setComments] = useState([]);
  const [isEditable, setIsEditable] = useState(false);
  const [showEditInputs, setShowEditInputs] = useState(false);
  const [inputsValue, setInputsValue] = useState({});
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    dispatch(getPlanById(id));
    getFavorites();
    getComments();
  }, []);

  useEffect(() => {
    if (user && plan && user.nickName === plan.userNickName) {
      setIsEditable(true);
    } else {
      setIsEditable(false);
    }
  }, [user, plan]);

  useEffect(() => {
    checkFav();
  }, [favorites, isFav]);

  async function getComments() {
    try {
      const response = await axios.get(`/api/v1/plans/${id}/comment`);
      setComments(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleClick() {
    const text = document.querySelector("#reseña").value;
    const obj = {
      userNickName: user.nickName,
      comment: text,
    };
    try {
      await axios.post(`/api/v1/plans/${id}/comment`, obj);
      document.querySelector("#reseña").value = "";
      getComments();
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

  function handleEditClick() {
    setShowEditInputs(!showEditInputs);
  }

  function handleLabel(event) {
    setInputsValue({
      [event.target.name]: event.target.value,
    });
  }

  async function handleSave() {
    const updatedPlan = inputsValue;
    try {
      await axios.patch(`/api/v1/plans/${id}`, updatedPlan);
      dispatch(getPlanById(id));
    } catch (error) {
      console.error(error);
    }
    setShowEditInputs(false);
  }

  async function handleDeleteClick() {
    try {
      await axios.delete(`/api/v1/plans/${id}`);
      navigate("/plans");
    } catch (error) {
      console.error(error);
    }
  }

  async function addFavorite() {
    const body = {
      userNickName: user.nickName,
    };
    try {
      await axios.post(`/api/v1/plans/${id}/favorite`, body);
      setIsFav(true);
      alert("Agregado a favoritos");
    } catch (error) {
      console.error(error.response);
    }
  }

  async function deleteFavorite() {
    const body = {
      userNickName: user.nickName,
    };
    try {
      await axios.delete(`/api/v1/plans/${id}/favorite`, { data: body });
      setIsFav(false);
      alert("Eliminado de favoritos");
    } catch (error) {
      console.error(error.response.data.message);
    }
  }

  async function getFavorites() {
    const response = await axios.get(
      `http://localhost:3001/api/v1/plans/${user.nickName}/Plansfavorite`
    );
    setFavorites(response.data);
  }

  async function checkFav() {
    if (favorites?.find((fav) => fav.id === plan.id)) {
      setIsFav(true);
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
          <div className={style.editCont}>
            {isEditable && !showEditInputs && (
              <>
                <button
                  className={style.editBtn}
                  onClick={handleEditClick}
                >
                  Editar Plan
                </button>
              </>
            )}
            {showEditInputs && (
              <>
                <button
                  className={style.saveBtn}
                  onClick={handleSave}
                >
                  Guardar cambios
                </button>
                <button
                  className={style.deleteBtn}
                  onClick={handleDeleteClick}
                >
                  Borrar Plan
                </button>
              </>
            )}
          </div>
          <div className={style.infoCont}>
            <h1 className={style.infoTitle}>{plan.title}</h1>
            {showEditInputs && (
              <input
                onChange={handleLabel}
                name="title"
                className={style.editInput}
                placeholder="Ingresa el nuevo título"
              />
            )}
            <hr
              color="white"
              width="60%"
            />
            <h3 className={style.infoCountry}>{plan.country}</h3>
            {showEditInputs && (
              <input
                onChange={handleLabel}
                name="country"
                className={style.editInput}
                placeholder="Ingresa el nuevo país"
              />
            )}
            <h3 className={style.infoProvince}>{plan.province}</h3>
            {showEditInputs && (
              <input
                onChange={handleLabel}
                name="province"
                className={style.editInput}
                placeholder="Ingresa la nueva provincia"
              />
            )}
            <h3 className={style.infoDate}>{plan.eventDate}</h3>
            {showEditInputs && (
              <input
                onChange={handleLabel}
                name="eventDate"
                className={style.editInput}
                placeholder="Ingresa la nueva fecha"
              />
            )}
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
      </div>
      <div className={style.planData}>
        <MapPlan
          country={plan.country}
          province={plan.province}
          city={plan.city}
          address={plan.address}
        />
        <div className={style.creator}>
          <div className={style.creatorInfo}>
            <p>Creador del plan: </p>
            <h1 className={style.creatorName}>{plan.userNickName}</h1>
          </div>
          <hr
            width="100%"
            color="#F1E100"
          />
        </div>
        <div className={style.description}>
          <p className={style.descTitle}>Descripción del evento</p>
          <p className={style.descInfo}>{plan.description}</p>
          {showEditInputs && (
            <input
              onChange={handleLabel}
              name="description"
              className={style.editInput}
              placeholder="Escribe la nueva descripción de tu plan aquí"
            />
          )}
          <div className={style.descValoration}>
            <label
              name="rating"
              className={style.descValTitle}
            >
              Valoración:
            </label>
            <Rating
              size="large"
              name="rating"
              value={value}
              onChange={handleStarClick}
            />
          </div>
        </div>
      </div>
      <div className={style.buttons}>
        <button className={style.submitBtn}>Unirse</button>
        {!isFav && (
          <button
            onClick={addFavorite}
            className={style.addBtn}
          >
            Agregar a favoritos
          </button>
        )}
        {isFav && (
          <button
            onClick={deleteFavorite}
            className={style.addBtn}
          >
            Eliminar de favoritos
          </button>
        )}
        <ButtonShare
          text={`¡Mira este plan que encontré en voyHENRY! ${plan.title}`}
        />
        {/* <button className={style.submitBtn}>Unirse</button> */}
        {!isFav && (
          <button
            onClick={addFavorite}
            className={style.addBtn}
          >
            Agregar a favoritos
          </button>
        )}
        {isFav && (
          <button
            onClick={deleteFavorite}
            className={style.addBtn}
          >
            Eliminar de favoritos
          </button>
        )}
        <ButtonShare
          text={`¡Mira este plan que encontré en voyHENRY! ${plan.title}`}
        />
      </div>
      <div className={style.commentsCont}>
        <h2 className={style.commentsTitle}>Comentarios</h2>
        <hr
          color="#F1E100"
          width="100%"
        />
        <div className={style.commentsSection}>
          {/* <h2>Comentarios</h2> */}
          {user && (
            <PostComment
              handleClick={handleClick}
              placeholder="Agrega un comentario"
            />
          )}
          {comments.length > 0 ? (
            <GetComments
              getComments={getComments}
              comments={comments}
            />
          ) : (
            <p className={style.emptyComments}>Aún no hay comentarios</p>
          )}
        </div>
      </div>
      <button
        onClick={() => navigate("/plans")}
        className={style.backBtn}
      >
        Volver
      </button>
    </div>
  );
}
