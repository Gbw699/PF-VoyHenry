import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import blogsData from "../../blogs";


export default function BlogReview() {

  const blog = blogsData.data[0];

  return (
    <Card>
    <CardContent>
      <Typography>
        Reseñas destacadas
      </Typography>
        <Typography>
          Nombre: {blog?.userName}
        </Typography>
        <Typography>
          Título: {blog?.title}
        </Typography>
        <Typography>
          Contenido: {blog?.content}
        </Typography>
    </CardContent>
    </Card>
  );
}
