import axios from "axios";
import { useEffect } from "react";

export default function AxiosBlogs({ setBlogs, reRender, setDataBlogs }) {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("/api/v1/blogs?limit=100");
        setBlogs(data.blogs.blogs);
      } catch (error) {
        console.error(error.response);
      }

      try {
        const { data } = await axios.get("/api/v1/blogs?limit=100");
        setDataBlogs(data.blogs);
      } catch (error) {
        console.error(error.response);
      }
    };
    fetchData();
  }, [reRender]);
}
