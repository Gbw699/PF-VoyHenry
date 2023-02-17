import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/slices/userSlice/thunks";
import style from "./ProfileCard.module.css";

// BORRAR ESTE IMPORT CUANDO HAYA IMAGEN DE PERFIL PARA CARGAR
import fakeImg from "../../assets/voyHENRY_logo.png";

export default function ProfileCard() {
  //const nickname = localStorage.getItem("login");
  const nickname = "juancito";

  const dispatch = useDispatch();
  const user = useSelector((state) => state.userStore.user);

  useEffect(() => {
    if (!user.nickName) {
      dispatch(getUser(nickname));
    }
  }, []);

  return (
    <div className={style.container}>
      <div className={style.profileCont}>
        <img
          // src={user.image}
          src={fakeImg} // BORRAR CUANDO HAYA IMAGEN DE PERFIL
          alt="img"
          className={style.profileImg}
        />
        <hr width="80%" color="#F1E100" />
        {/* <h1 className={style.profileName}>{user.nickName}</h1> */}
        <h1 className={style.profileName}>Nombre</h1> {/* BORRAR CUANDO HAYA NOMBRE DE PERFIL */}
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
      <button type="submit" className={style.createBtn}>Crea tu evento</button>
    </div>
  );
}
