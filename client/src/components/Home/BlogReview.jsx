import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/material/Star";
// import { useSelector } from "react-redux";
import { blog } from "../../../blogs.json";

export default function BlogReview() {
  // const blog = useSelector((state) => state.blog.blog);

  return (
    <Card>
      <Typography>
        Reseñas destacadas
      </Typography>
      <CardContent>
        <Typography>
          {blog?.userName}
        </Typography>
        <Typography>
          {blog?.title}
        </Typography>
        <Typography>
          {blog?.contentent}
        </Typography>
        <Rating
          name="text-feedback"
          value={blog?.rating}
          readOnly
          precision={0.5}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
      </CardContent>
    </Card>
  );
}
