import { Route, Routes } from "react-router-dom";
import Blog from "../views/Blog/Blog";
import BlogDetail from "../views/Blog/BlogDetail";

export default function BlogRouter() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Blog />}
        />
        <Route
          path="/:id"
          element={<BlogDetail />}
        />
      </Routes>
    </>
  );
}
