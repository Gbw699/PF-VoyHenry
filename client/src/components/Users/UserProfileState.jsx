import { useState } from "react";
import { useParams } from "react-router-dom";
import AxiosUsers from "./AxiosUsers";
import UsersProfileSection from "./UsersProfileSection";
import { useSelector } from "react-redux";

export default function UserProfileState() {
  const [user, setUser] = useState([]);
  const [plans, setPlans] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const { id } = useParams();
  const [following, setFollowing] = useState([]);
  const [followed, setFollowed] = useState([]);
  const favorites = useSelector((state) => state.userStore.usersFavorites);
  console.log(favorites);

  return (
    <>
      <AxiosUsers
        {...{
          id,
          setUser,
          setPlans,
          setBlogs,
          followed,
          setFollowed,
          following,
          setFollowing,
        }}
      />
      <UsersProfileSection
        favorites={favorites}
        following={following}
        setFollowing={setFollowing}
        followed={followed}
        setFollowed={setFollowed}
        user={user}
        plans={plans}
        blogs={blogs}
      />
    </>
  );
}
