import { Route, Routes } from "react-router-dom";
import DetailMarketPlace from "../views/DetailMarketPlace/DetailMarketPlace";
import AdminMarketPlace from "../views/MarketPlace/Admin/AdminMarketPlace";
import MarketPlace from "../views/MarketPlace/MarketPlace";
import ShoppingCart from "../views/ShoppingCart/ShoppingCart";

export default function MarketPlaceRouter({ role }) {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<MarketPlace />}
        />
        <Route
          path="/:id"
          element={<DetailMarketPlace />}
        />
        <Route
          path="/shoppingCart"
          element={<ShoppingCart />}
        />
        {/* {role === "admin" && (
          <Route
            path="/admin"
            element={<AdminMarketPlace />}
          />
        )} */}
      </Routes>
    </>
  );
}
