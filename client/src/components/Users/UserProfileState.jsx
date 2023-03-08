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

  const favorites = useSelector((state) => state.userStore.usersFavorites);
  const following = useSelector((state) => state.userStore.userFollowing);
  const followed = useSelector((state) => state.userStore.userFollowed);
  console.log(following);
  console.log(followed);

  return (
    <>
      <AxiosUsers
        {...{
          id,
          setUser,
          setPlans,
          setBlogs,
        }}
      />
      <UsersProfileSection
        favorites={favorites}
        following={following}
        followed={followed}
        user={user}
        plans={plans}
        blogs={blogs}
      />
    </>
  );
}
