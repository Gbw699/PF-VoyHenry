import React, { useEffect } from "react";
import PlanCard from "../../recycle/PlanCard/PlanCard";
import style from "./PlansCardList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getLimitPlans } from "../../redux/slices/planSlice/thunk";

export default function PlanCardListHome() {

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getLimitPlans());
    },[]);

    const plans = useSelector(state => state.planStore.renderPlans);

    console.log(plans);

    return (
        <div className={style.container}>
            <div className={style.cardCont}>
                {plans?.map((plan) => (
                    <PlanCard
                        key={plan.id}
                        mainImage={plan.mainImage}
                        title={plan.title}
                    />
                ))}
            </div>
        </div>
    );
}
