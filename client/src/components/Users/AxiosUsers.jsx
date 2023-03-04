import axios from "axios";
import { useEffect } from "react";
import { getFollowing } from "../../redux/slices/userSlice/thunks";

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
  isFollowing,
  setFollowing,
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
            const response = await getFollowing(user);
            setFollowing(response);
          } catch (error) {
            console.error(error);
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [setUsers, setUser, setPlans, setBlogs, id, setFollowing, isFollowing]);
}

