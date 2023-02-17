import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import blogsData from "../../blogs";

export default function BlogReview() {
  const blog = blogsData.data[0];

  return (
    <div>
      <div>
        <h3>Reseñas destacadas</h3>
        <hr
          width="100%"
          color="#F1E100"
        />
        <p>Nombre: {blog?.userName}</p>
        <p>Título: {blog?.title}</p>
        <p>Contenido: {blog?.content}</p>
      </div>
    </div>
  );
}
