import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function PlansSections(props) {
    return (
        <Card>
            <CardContent>
                <Typography>
                    {props.title}
                </Typography>
            </CardContent>
            <CardMedia
                component="img"
                height="140"
                image={props.mainImage}
                alt={props.title}
            />
            <Typography>
                {props.title}
            </Typography>
        </Card>
    );
}

