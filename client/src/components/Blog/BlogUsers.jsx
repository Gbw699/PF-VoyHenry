//Componente que renderiza las cards de los usuarios en la sección blog

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllUsers } from "../../redux/slices/userSlice/thunks";
import UserCard from "../../recycle/UserCard/UserCard";

export default function BlogUsers() {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.userStore.allUsers);

  console.log(allUsers);

  useEffect(() => {
    if (!allUsers.length) {
      dispatch(getAllUsers());
    }
  }, []);

  return (
    <div>
      <h3>Usuarios</h3>
      {allUsers.users?.map((user) => {
        return (
          <UserCard
            nickName={user.nickName}
            image={user.image}
            key={user.nickName}
          />
        );
      })}
      <button>Buscar usuario</button>
    </div>
  );
}
