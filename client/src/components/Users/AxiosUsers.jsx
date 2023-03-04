import axios from "axios";
import { useEffect } from "react";

const getEndpoint = (id) => {
  return id ? `/api/v1/users/${id}` : "/api/v1/users";
};

export default function AxiosUsers({
  setUsers,
  setUser,
  setPlans,
  setBlogs,
  id,
  user,
  setFollowing
}) {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(getEndpoint(id));
        if (id) {
          const { data: userData } = await axios.get(`/api/v1/users/${id}`);
          setUser(userData);
          try {
            const { data: plansData } = await axios.get(
              `/api/v1/users/${id}/plans`
            );
            setPlans(plansData);
          } catch (error) {
            console.log("Error getting plans: ", error.message);
          }
          try {
            const { data: blogsData } = await axios.get(
              `/api/v1/users/${id}/blogs`
            );
            setBlogs(blogsData.blogs.blogs);
          } catch (error) {
            console.log("Error getting blogs: ", error.message);
          }

        } else {
          setUsers(data.users);
          try {
            const response = await axios.get(`http://localhost:3001/api/v1/users/${user}/Following`);
            setFollowing(response.data);
          } catch (error) {
            console.error(error);
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [setUsers, setUser, setPlans, setBlogs, id, setFollowing]);
}

