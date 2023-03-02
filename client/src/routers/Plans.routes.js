import { Route, Routes } from "react-router-dom";
import DetailPlan from "../components/Plan/DetailPlan";
import Plans from "../views/Plan/Plans";

export default function PlansRouter() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Plans />}
        />
        <Route
          path="/:id"
          element={<DetailPlan />}
        />
      </Routes>
    </>
  );
}
