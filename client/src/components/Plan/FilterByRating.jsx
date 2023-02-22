import React from "react";
import { useDispatch } from "react-redux";
import { getPlansbyOrder } from "../../redux/slices/planSlice/thunk";
import style from "./GeolocationForm.module.css";

export default function FilterByRating() {
    const dispatch = useDispatch();
    const handleSelectChange = (event) => {

        const selectedRating = parseFloat(event.target.value);
        dispatch(getPlansbyOrder("rating",selectedRating));
    };
    return (
        <div>
            <h3 className={style.filterTitle}>Valoración</h3>
            <select id="ratingSelect" name="ratingSelect" onChange={handleSelectChange} className={style.inputs}>
                <option value="">Select a rating</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <hr />
        </div>
    );
}