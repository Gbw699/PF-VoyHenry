import React from "react";
import { useDispatch } from "react-redux";
import { getPlansbyOrder } from "../../redux/slices/planSlice/thunk";

export default function FilterByTitle() {
  const dispatch = useDispatch();
  const handleClick = (event) => {
      const selectedOrder = event.target.value;
      dispatch(getPlansbyOrder("order",selectedOrder));
  };
  return (
    <div>
    <button value="alfabetico" onClick={handleClick}>AZ</button>
    <button value="reverso" onClick={handleClick}>ZA</button>
    <hr />
</div>
  );
}