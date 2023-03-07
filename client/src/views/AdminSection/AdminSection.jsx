import { ProSidebarProvider } from "react-pro-sidebar";
import Sidebar from "./AdminGlobals/Sidebar";
import { Route, Routes } from "react-router-dom";
import AdminUsers from "../../components/AdminSection/AdminUsers/AdminUsers";
import AdminPlans from "../../components/AdminSection/AdminPlans/AdminPlans";
import AdminBlogs from "../../components/AdminSection/AdminBlogs/AdminBlogs";

export default function AdminSection() {
  return (
    <ProSidebarProvider>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Routes>
          <Route
            path="/users"
            element={<AdminUsers />}
          />
          <Route
            path="/plans"
            element={<AdminPlans />}
          />
          <Route
            path="/blogs"
            element={<AdminBlogs />}
          />
        </Routes>
      </div>
    </ProSidebarProvider>
  );
}
