import axios from "axios";
import { useEffect } from "react";

export default function AxiosUsers({
  setUsers,
  setUser,
  setPlans,
  setBlogs,
  nickName,
}) {
  useEffect(() => {
    const fetchData = async () => {
      if (nickName) {
        try {
          const response = await axios.get(`/api/v1/users/${nickName}`);
          const responsePlans = await axios.get(
            `/api/v1/users/${nickName}/plans`
          );
          const responseBlogs = await axios.get(
            `/api/v1/users/${nickName}/blogs`
          );
          setBlogs(responseBlogs.data);
          setPlans(responsePlans.data);
          setUser(response.data.data.user);
        } catch (error) {
          console.log(error.response);
        }
      } else {
        try {
          const response = await axios.get("/api/v1/users");
          setUsers(response.data.users);
        } catch (error) {
          console.log(error.response);
        }
      }
    };
    fetchData();
  }, [setUsers, nickName]);
}
