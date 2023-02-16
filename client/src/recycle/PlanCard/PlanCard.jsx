import { ImageListItem, Typography } from "@mui/material";

export default function PlanCard(props) {

  return (
    <ImageListItem style={{ height: "200px", width: "100%" }} key={props.id}>
      <img
        src={`${props.mainImage}`}
        alt={props.title}
        loading="lazy"
      />
      <Typography>{props.title}</Typography>
      <Typography>{props.eventDate}</Typography>
      <Typography>Location?</Typography>
      <Typography>{props.title}</Typography>
      <Typography>{props.summary}</Typography>
      <Typography>{props.eventDate}</Typography>
      <Typography>Detail</Typography>
    </ImageListItem>
  );
}
