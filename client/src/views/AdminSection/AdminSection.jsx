import { ProSidebarProvider } from "react-pro-sidebar";
import Sidebar from "./AdminGlobals/Sidebar";
import { Route, Routes, useLocation } from "react-router-dom";
import AdminUsers from "../../components/AdminSection/AdminUsers";

export default function AdminSection() {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <ProSidebarProvider>
      <div style={{display: "flex"}}>
        <Sidebar/>
        <Routes>
          <Route
            path="/users"
            element={<AdminUsers />}
          />
        </Routes>
      </div>
    </ProSidebarProvider>
  );
}
