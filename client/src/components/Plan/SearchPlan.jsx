import React from "react";
import { useDispatch } from "react-redux";
import { getPlansbyOrder } from "../../redux/slices/planSlice/thunk";

function SearchPlan() {
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch(getPlansbyOrder("contains", event.target.value));
    };

    return (
        <div>
            <input placeholder="Buscar" type="text" name="search" id="search" onChange={handleChange} />
        </div>
    );
}

export default SearchPlan;
