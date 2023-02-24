import axios from "axios";
import { useEffect } from "react";

const getEndpoint = (nickName) => {
  return nickName ? `/api/v1/users/${nickName}` : "/api/v1/users";
};

export default function AxiosUsers({
  setUsers,
  setUser,
  setPlans,
  setBlogs,
  nickName,
}) {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(getEndpoint(nickName));
        if (nickName) {
          const { data: userData } = await axios.get(
            `/api/v1/users/${nickName}`
          );
          const { data: plansData } = await axios.get(
            `/api/v1/users/${nickName}/plans`
          );
          const { data: blogsData } = await axios.get(
            `/api/v1/users/${nickName}/blogs`
          );
          setUser(userData);
          setPlans(plansData);
          setBlogs(blogsData);
        } else {
          setUsers(data.users);
        }
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [setUsers, nickName]);
}
