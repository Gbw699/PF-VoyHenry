//Componente que renderiza las cards de los usuarios en la sección blog

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllUsers } from "../../redux/slices/userSlice/thunks";
import UserCard from "../../recycle/UserCard/UserCard";
import style from "./BlogUsers.module.css";
import { Link } from "react-router-dom";

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
      {allUsers.users.slice(0, 6)?.map((user) => {
        return (
          <Link
            key={user.nickName}
            to={`/users/${user.nickName}`}
          >
            <UserCard
              nickName={user.nickName}
              image={user.image}
            />
          </Link>
        );
      })}
      <Link to="/users">
        <button className={style.searchBtn}>Buscar más usuarios</button>
      </Link>
    </div>
  );
}
