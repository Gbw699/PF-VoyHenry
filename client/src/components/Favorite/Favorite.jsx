import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PlanCard from "../../recycle/PlanCard/PlanCard";
import style from "./Favorite.module.css";

export default function Favorite() {
    const navigate = useNavigate();
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
        return <div className={style.container}>Aún no has agregado nada a favoritos</div>;
    }

    return (
        <div className={style.container}>
            <div className={style.favoriteCont}>
                <p className={style.title}>Mis favoritos</p>
                <hr color="#f1e100" width="100%" />
                <div className={style.plansCont}>
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
                <button
                    onClick={() => navigate("/profile")}
                    className={style.backBtn}
                >
                    Volver
                </button>
            </div>
        </div>
    );
}
