import { useSelector } from "react-redux";

export default function ProfileInfo() {
  const user = useSelector((state)=>state.user.user);
  return (
    <div>
      <img
        src={user?.image}
        alt={user?.nickName}
      />
      <p>{user?.nickName}</p>
    </div>
  );
}
