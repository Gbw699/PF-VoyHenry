import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getPlanById, postComment } from "../../redux/slices/planSlice/thunk";
import style from "./DetailPlan.module.css";

export default function DetailPlan() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const plan = useSelector((state) => state.planStore.planById);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    dispatch(getPlanById(id));
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await fetch(`/api/vq/plans/${id}/comment`);
      const comments = await response.json();
      setComments(comments);
    } catch (error) {
      console.error(error);
    }
  };

  async function handleClick() {
    const text = document.querySelector("#reseña").value;
    const obj = {
      userNickName: user.userNickName,
      comment: text
    };
    dispatch(postComment(obj));
  }

  return (
    <div className={style.container}>
      <div className={style.plan}>
        <div
          style={{ backgroundImage: `url(${plan.mainImage})` }}
          className={style.imgCont}
        >
          <h1>{plan.title}</h1>
          <h3>Localidad</h3>
          <h3>{plan.eventDate}</h3>
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
          {plan.description} FacuCapo FacuCapo FacuCapo FacuCapo FacuCapo
          FacuCapo FacuCapo FacuCapo FacuCapo FacuCapo FacuCapo FacuCapo
          FacuCapo
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
        <textarea placeholder="Dejar reseña" name="reseña" id="reseña" cols="30" rows="10"></textarea>
        <button className={style.submitBtn} onClick={handleClick}>
          Dejar reseña
        </button>
      </div>
      <div className={style.comments}>
        <h1>Comentarios</h1>
        <hr width="100%" color="#F1E100" />
        {comments?.map((comment) => (
          <div key={comment.id}>
            <p>{comment.text}</p>
            <p>{comment.userNickname}</p>
            <hr width="100%" color="#F1E100" />
          </div>
        ))}
      </div>
    </div>
  );
}
