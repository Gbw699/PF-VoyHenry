import React from "react";
import blogsData from "../../blogs";


export default function BlogReview() {

  const blog = blogsData.data[0];

  return (
    <>
    <div>
      <p>
        Reseñas destacadas
      </p>
        <p>
          {blog?.userName}
        </p>
        <p>
          {blog?.title}
        </p>
        <p>
          {blog?.content}
        </p>
    </div>
    </>
  );
}
