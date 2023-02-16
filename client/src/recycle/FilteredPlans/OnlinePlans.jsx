import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import plansData from "../../onlinePlans.json";

export default function OnlinePlans() {
    const plans = plansData.data;
    return (
        <Card>
            <CardContent>
                <Typography>
                    Eventos On-line
                </Typography>
            </CardContent>
            {plans.map((plan) => (
                <img key={plan.id}
                    height="110px"
                    src={plan.mainImage}
                    title={plan.title}
                />)
            )}
            <CardActions>
                <Button size="small">Unirse Ahora</Button>
            </CardActions>
        </Card>
    );
}