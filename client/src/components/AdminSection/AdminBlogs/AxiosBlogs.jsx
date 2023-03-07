import axios from "axios";
import { useEffect } from "react";

export default function AxiosBlogs({
  setBlogs,
  reRender,
  dataDashboard,
  setDataDashboard,
}) {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("/api/v1/blogs?limit=100");
        setBlogs(data.blogs.blogs);
        setDataDashboard({ ...dataDashboard, blogs: data.blogs.blogsInFilter });
      } catch (error) {
        console.error(error.response);
      }
    };
    fetchData();
  }, [reRender]);
}
