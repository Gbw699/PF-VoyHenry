import axios from "axios";
import React, { useEffect, useState } from "react";
import PlanCard from "../../recycle/PlanCard/PlanCard";

export default function Favorite() {
    const user = JSON.parse(localStorage.getItem("user"));
    const [favorites, setFavorites] = useState();

    useEffect(() => {
        getFavorites();
    }, []);

    const getFavorites = async () => {
        const response = await axios.get(`http://localhost:3001/api/v1/plans/${user.nickName}/Plansfavorite`);
        setFavorites(response.data);
    };

    if(!favorites){
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div>
                {favorites?.map((plan) => (
                    <PlanCard
                        key={plan.id}
                        id={plan.id}
                        country={plan.country}
                        province={plan.province}
                        mainImage={plan.mainImage}
                        title={plan.title}
                        summary={plan.summary}
                        eventDate={plan.eventDate}
                        average={plan.average}
                    />
                ))}
            </div>
        </div>
    );
}
