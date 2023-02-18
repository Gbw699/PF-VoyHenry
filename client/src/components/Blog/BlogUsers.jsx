//Componente que renderiza las cards de los usuarios en la sección blog

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllUsers } from "../../redux/slices/userSlice/thunks";
import UserCard from "../../recycle/UserCard/UserCard";
import style from "./BlogUsers.module.css";

export default function BlogUsers() {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.userStore.allUsers);

  useEffect(() => {
    if (!allUsers.length) {
      dispatch(getAllUsers());
    }
  }, []);

  return (
    <div className={style.container}>
      <h3 className={style.usersTitle}>Usuarios</h3>
      <hr
        width="100%"
        color="#F1E100"
      />
      {allUsers.users?.map((user) => {
        return (
          <UserCard
            nickName={user.nickName}
            image={user.image}
            key={user.nickName}
          />
        );
      })}
      <button className={style.searchBtn}>Buscar usuario</button>
    </div>
  );
}
