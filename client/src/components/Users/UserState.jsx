import { useState } from "react";
import AxiosUsers from "./AxiosUsers";
import UsersSection from "./UsersSection";

export default function UserState() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [users, setUsers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [followed, setFollowed] = useState([]);
  const [userFollowed, setUserFollowed] = useState([]);

  return (
    <>
      <AxiosUsers
        following={following}
        setFollowing={setFollowing}
        followed={followed}
        setFollowed={setFollowed}
        user={user.nickName}
        setUsers={setUsers}
      />
      <UsersSection
        {...{
          setUsers,
          following,
          setFollowing,
          followed,
          setFollowed,
          users,
          userFollowed,
          setUserFollowed,
        }}
      />
    </>
  );
}
