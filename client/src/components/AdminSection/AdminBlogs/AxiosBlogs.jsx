import axios from "axios";
import { useEffect } from "react";

export default function AxiosPlans({ setBlogs, reRender }) {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("/api/v1/blogs?limit=100");
        setBlogs(data.blogs.blogs);
      } catch (error) {
        console.error(error.response);
      }
    };
    fetchData();
  }, [reRender]);
}
