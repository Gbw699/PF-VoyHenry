import axios from "axios";
import { useEffect } from "react";

export default function AxiosFollowers({
  setFollowed,
  setFollowing,
  nickName,
}) {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/v1/users/${nickName}/following`);
        setFollowing(response.data.data.followingUsers.length);
      } catch (error) {
        console.error(error.response);
      }

      try {
        const response = await axios.get(`/api/v1/users/${nickName}/followed`);
        setFollowed(response.data.data.followedUsers.length);
      } catch (error) {
        console.error(error.response);
      }
    };
    fetchData();
  }, []);
}
