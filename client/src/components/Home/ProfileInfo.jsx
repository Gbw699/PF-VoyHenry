import * as React from "react";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ProfileInfo() {
  const user = useSelector((state) => state.user.user);
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={user?.image}
          alt={user?.nickName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {user?.nickName}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

