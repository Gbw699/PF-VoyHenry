import { ProSidebarProvider } from "react-pro-sidebar";
import Sidebar from "./AdminGlobals/Sidebar";
import { Route, Routes} from "react-router-dom";
import AdminUsers from "../../components/AdminSection/AdminUsers/AdminUsers";
import AdminPlans from "../../components/AdminSection/AdminPlans/AdminPlans";

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
        </Routes>
      </div>
    </ProSidebarProvider>
  );
}
