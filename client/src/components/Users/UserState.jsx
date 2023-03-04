import { useState } from "react";
import AxiosUsers from "./AxiosUsers";
import UsersSection from "./UsersSection";

export default function UserState() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [users, setUsers] = useState([]);
  const [following, setFollowing] = useState([]);

  return (
    <>
      <AxiosUsers 
      setFollowing={setFollowing}
      user={user.nickName}
      setUsers={setUsers} />
      <UsersSection
        {...{
          following,
          users,
        }}
      />
    </>
  );
}
