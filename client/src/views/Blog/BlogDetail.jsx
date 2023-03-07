import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ReviewDetail from "../../components/Blog/ReviewDetail";
import { getBlogById } from "../../redux/slices/blogSlice/thunk";
import { resetBlogById } from "../../redux/slices/blogSlice/blogSlice";

export default function BlogDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [reRender, setReRender] = useState(false);

  const blog = useSelector((state) => state.blogStore.blog);

  useEffect(() => {
    dispatch(getBlogById(id));

    return () => resetBlogById();
  }, [reRender]);

  return (
    <div>
      <ReviewDetail setReRender={setReRender} blog={blog} />
    </div>
  );
}
