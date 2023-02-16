import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import plansData from "../../nextPlans.json";

export default function NextPlans() {
    const plans = plansData.data;
    return (
        <Card>
            <CardContent>
                <Typography>
                    Próximos Planes
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