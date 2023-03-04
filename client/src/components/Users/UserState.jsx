import { useState } from "react";
import AxiosUsers from "./AxiosUsers";
import UsersSection from "./UsersSection";

export default function UserState() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [users, setUsers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <>
      <AxiosUsers 
      following={following}
      setFollowing={setFollowing}
      user={user.nickName}
      setUsers={setUsers} 
      isFollowing={isFollowing}
      />
      <UsersSection
        {...{
          setUsers,
          isFollowing,
          setIsFollowing,
          following,
          setFollowing,
          users,
        }}
      />
    </>
  );
}
