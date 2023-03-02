import { Route, Routes } from "react-router-dom";
import ProfileUser from "../views/ProfileUser/ProfileUser";
import Users from "../views/Users/Users";

export default function UsersRouter() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Users />}
        />
        <Route
          path="/:id"
          element={<ProfileUser />}
        />
      </Routes>
    </>
  );
}
