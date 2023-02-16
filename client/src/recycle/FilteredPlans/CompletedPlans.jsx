import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import plansData from "../../completedPlans.json";

export default function CurrentPlans() {
    const plans = plansData.data;
    return (
        <Card>
            <CardContent>
                <Typography>
                    Eventos finalizados
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
                <Button size="small">Deja tu reseña</Button>
            </CardActions>
        </Card>
    );
}