import { ProSidebarProvider } from "react-pro-sidebar";
import Sidebar from "./AdminGlobals/Sidebar";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "../../components/AdminSection/AdminDashboard/AdminDashboard";
import AdminUsers from "../../components/AdminSection/AdminUsers/AdminUsers";
import AdminPlans from "../../components/AdminSection/AdminPlans/AdminPlans";
import AdminBlogs from "../../components/AdminSection/AdminBlogs/AdminBlogs";
import AdminProducts from "../../components/AdminSection/AdminProducts/AdminProducts";

export default function AdminSection() {
  return (
    <ProSidebarProvider>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Routes>
          <Route
            index
            element={<AdminDashboard />}
          />
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
          <Route
            path="/products"
            element={<AdminProducts />}
          />
        </Routes>
      </div>
    </ProSidebarProvider>
  );
}
