import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/slices/userSlice/thunks";

export default function ProfileCard() {
  //const nickname = localStorage.getItem("login");
  const nickname = "juancito";

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (!user.nickName) {
      dispatch(getUser(nickname));
    }
  }, [user]);

  return <div>
    <img src={user.image} alt="img" />
    <h1>{user.nickName}</h1>
    <h4>Nacionalidad</h4>
    <p>Siguiendo</p><span>300</span>
    <p>Seguidores</p><span>123</span>

  </div>;
}
