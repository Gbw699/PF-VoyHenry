import { useState } from "react";
import { useParams } from "react-router-dom";
import AxiosUsers from "./AxiosUsers";
import UsersProfileSection from "./UsersProfileSection";

export default function UserProfileState() {
  const [user, setUser] = useState([]);
  const [plans, setPlans] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const { id } = useParams();
  const [following, setFollowing] = useState({});
  const [followed, setFollowed] = useState({});

  return (
    <>
      <AxiosUsers {...{ id, setUser, setPlans, setBlogs, followed, setFollowed, following, setFollowing }} />
      <UsersProfileSection
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
