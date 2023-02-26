import { useState } from "react";
import { useParams } from "react-router-dom";
import AxiosUsers from "./AxiosUsers";
import UsersProfileSection from "./UsersProfileSection";

export default function UserProfileState() {
  const [user, setUser] = useState([]);
  const [plans, setPlans] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const { nickName } = useParams();

  return (
    <>
      <AxiosUsers {...{ nickName, setUser, setPlans, setBlogs }} />
      <UsersProfileSection
        user={user}
        plans={plans}
        blogs={blogs}
      />
    </>
  );
}
