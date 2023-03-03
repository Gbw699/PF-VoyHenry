import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";

export default function SidebarComponent() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar>
        <Menu>
          <MenuItem component={<Link to={"/admin/users"} />}>USERS</MenuItem>
          <MenuItem component={<Link to={"/admin/plans"} />}>PLANS</MenuItem>
          <MenuItem component={<Link to={"/admin/blogs"} />}>BLOGS</MenuItem>
          <MenuItem component={<Link to={"/admin/products"} />}>
            PRODUCTS
          </MenuItem>
          <MenuItem component={<Link to={"/admin/comments"} />}>
            COMMENTS
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}
