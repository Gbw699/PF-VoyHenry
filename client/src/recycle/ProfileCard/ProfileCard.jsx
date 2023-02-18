import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/slices/userSlice/thunks";
import style from "./ProfileCard.module.css";

// BORRAR ESTE IMPORT Y LA VARIABLE CUANDO HAYA IMAGEN DE PERFIL PARA CARGAR
// import fakeImg from "../../assets/voyHENRY_logo.png";
const fakeImg =
  "https://www.clarin.com/img/2021/10/07/dPmbdeT7x_1200x630__1.jpg";

export default function ProfileCard() {
  //const nickname = localStorage.getItem("login");
  const nickname = "juancito";

  const dispatch = useDispatch();
  const user = useSelector((state) => state.userStore.user);
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    if (!user.nickName) {
      dispatch(getUser(nickname));
    }
  }, []);

  // USE EFFECT PARA PODER USAR LA IMAGEN DE PERFIL COMO BG
  // ARREGLAR PARA CUANDO HAYA IMAGEN DEL BACK
  useEffect(() => {
    if (user.image) {
      setBackgroundImage(`url(${user.image})`);
    } else {
      setBackgroundImage(`url(${fakeImg})`);
    }
  }, [user]);

  return (
    <div className={style.container}>
      <div className={style.profileCont}>
        <div
          className={style.imgCont}
          style={{ backgroundImage: backgroundImage }}
        />
        <hr
          width="80%"
          color="#F1E100"
        />
        {/* <h1 className={style.profileName}>{user.nickName}</h1> */}
        <h1 className={style.profileName}>{user.nickName}</h1>{" "}
        {/* BORRAR CUANDO HAYA NOMBRE DE PERFIL */}
        <h4 className={style.profileCountry}>Nacionalidad</h4>
        <div className={style.followersCont}>
          <div className={style.followers}>
            <p className={style.followTitle}>Siguiendo</p>
            <span className={style.followNum}>300</span>
          </div>
          <div className={style.followers}>
            <p className={style.followTitle}>Seguidores</p>
            <span className={style.followNum}>123</span>
          </div>
        </div>
      </div>
    </div>
  );
}
