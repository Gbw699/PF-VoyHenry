import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getPlanById } from "../../redux/slices/planSlice/thunk";
import style from "./DetailPlan.module.css";

export default function DetailPlan() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const plan = useSelector((state) => state.planStore.planById);

  useEffect(() => {
    dispatch(getPlanById(id));
  }, []);

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
          <button className={style.closeBtn}>Dejar reseña</button>
        </div>
        <button
          onClick={() => navigate("/home")}
          className={style.submitBtn}
        >
          Volver
        </button>
      </div>
    </div>
  );
}
