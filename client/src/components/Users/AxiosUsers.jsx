import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getFavoritesUser,
  getFollowed,
  getFollowing,
} from "../../redux/slices/userSlice/thunks";

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
}) {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      if (!id) {
        try {
          const response = await axios.get(`/api/v1/users/${user}/following`);
          setFollowing(response.data.data.data);
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchData();
  }, [following?.length]);

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
          try {
            dispatch(getFavoritesUser(id));
          } catch (error) {
            console.log(error.message);
          }
          try {
            dispatch(getFollowing(id));
          } catch (error) {
            console.log(error.message);
          }
          try {
            dispatch(getFollowed(id));
          } catch (error) {
            console.log(error.message);
          }
        } else {
          setUsers(data.users);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [setUsers, reRender, setUser, setPlans, setBlogs, id]);
}
