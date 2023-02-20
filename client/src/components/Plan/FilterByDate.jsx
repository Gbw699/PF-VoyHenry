import React from "react";
import style from "./GeolocationForm.module.css";

export default function FilterByDate() {
    const handleInputChange = (event) => {
        const selectedDate = event.target.value;
        // Acá hay que dispachar la actión para que renderice por fecha. Fromato (YYYY-MM-DD)
        console.log(selectedDate);
    };
    return (
        <div>
            <h3 className={style.filterTitle}>Fecha</h3>
            <input type="date" id="dateInput" name="dateInput" placeholder="Seleccionar fecha" className={style.inputs} onChange={handleInputChange} />
        </div>
    );
}
