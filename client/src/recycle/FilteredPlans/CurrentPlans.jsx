import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import currentPlansData from "../../currentPlans.json";

export default function CurrentPlans() {
    const plans = currentPlansData.data;
    return (
        <Card>
            <CardContent>
                <Typography>
                    Eventos en proceso
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

