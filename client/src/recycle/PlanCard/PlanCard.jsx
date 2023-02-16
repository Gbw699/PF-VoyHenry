import { CardMedia, Typography } from "@mui/material";
import React from "react";
import { CardContent } from "semantic-ui-react";
export default function PlanCard(props) {
  return (
    <CardContent>
      <CardMedia
        component="img"
        alt={props.title}
        src={props.mainImage}
      />
      <Typography>{props.title}</Typography>
      <Typography>{props.eventDate}</Typography>
      <Typography>Location?</Typography>
      <Typography>{props.title}</Typography>
      <Typography>{props.summary}</Typography>
      <Typography>{props.eventDate}</Typography>
      <Typography>Detail</Typography>
    </CardContent>
  );
}