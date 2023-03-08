import { useState } from "react";
import AxiosBlogs from "./AxiosBlogs";
import BlogsGrid from "./BlogsGrid";
import CreateBlogForm from "./CreateBlogForm";
import EditBlogForm from "./EditBlogForm";

export default function AdminBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [blogsInfo, setBlogsInfo] = useState({});
  const [createRecord, setCreateRecord] = useState(false);
  const [editRecord, setEditRecord] = useState(false);
  const [reRender, setReRender] = useState(false);

  return (
    <>
      <AxiosBlogs
        setBlogs={setBlogs}
        reRender={reRender}
      />
      {!createRecord && !editRecord && (
        <BlogsGrid
          blogs={blogs}
          reRender={reRender}
          setBlogsInfo={setBlogsInfo}
          setReRender={setReRender}
          setCreateRecord={setCreateRecord}
          setEditRecord={setEditRecord}
        />
      )}
      {createRecord && (
        <CreateBlogForm
          reRender={reRender}
          setReRender={setReRender}
          setCreateRecord={setCreateRecord}
        />
      )}
      {editRecord && (
        <EditBlogForm
          blogsInfo={blogsInfo}
          setBlogsInfo={setBlogsInfo}
          reRender={reRender}
          setReRender={setReRender}
          setEditRecord={setEditRecord}
        />
      )}
    </>
  );
}
