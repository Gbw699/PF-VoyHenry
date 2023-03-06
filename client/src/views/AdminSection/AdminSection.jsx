import { ProSidebarProvider } from "react-pro-sidebar";
import Sidebar from "./AdminGlobals/Sidebar";
import { Route, Routes} from "react-router-dom";
import AdminUsers from "../../components/AdminSection/AdminUsers/AdminUsers";

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
        </Routes>
      </div>
    </ProSidebarProvider>
  );
}
