import React from "react";
import style from "./GeolocationForm.module.css";
import { useDispatch } from "react-redux";
import { getPlansByDate } from "../../redux/slices/planSlice/thunk";

export default function FilterByDate() {
    const dispatch = useDispatch();
    const handleInputChange = (event) => {
        const selectedDate = event.target.value;
        dispatch(getPlansByDate(selectedDate));
    };
    return (
        <div>
            <h3 className={style.filterTitle}>Fecha</h3>
            <input type="date" id="dateInput" name="dateInput" placeholder="Seleccionar fecha" className={style.inputs} onChange={handleInputChange} />
        </div>
    );
}
