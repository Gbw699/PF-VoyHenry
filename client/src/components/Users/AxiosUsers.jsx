import axios from "axios";
import { useEffect } from "react";
import { getFollowed, getFollowing } from "../../redux/slices/userSlice/thunks";

const getEndpoint = (id) => {
  return id ? `/api/v1/users/${id}` : "/api/v1/users";
};

export default function AxiosUsers({
  setUsers,
  reRender,
  setUser,
  setPlans,
  setBlogs,
  id,
  user,
  following,
  setFollowing,
  followed,
  setFollowed,
}) {
  useEffect(() => {
    const fetchData = async () => {
      if (!id) {
        try {
          const response = await axios.get(
            `http://localhost:3001/api/v1/users/${user}/Following`
          );
          setFollowing(response.data.data.followingUsers);
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchData();
  }, [following.length]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(getEndpoint(id));
        if (id) {
          const { data: userData } = await axios.get(`/api/v1/users/${id}`);
          setUser(userData);
          try {
            const responseFollowing = await getFollowing(id);
            setFollowing(responseFollowing);
            const responseFollowed = await getFollowed(id);
            setFollowed(responseFollowed);
          } catch (error) {
            console.error(error);
          }
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
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
    console.log(following);
  }, [setUsers, reRender, setUser, setPlans, setBlogs, id]);
}
