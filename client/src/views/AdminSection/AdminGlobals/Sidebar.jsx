import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { NavLink } from "react-router-dom";
import style from "./Sidebar.module.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";

export default function SidebarComponent() {
  const { collapseSidebar } = useProSidebar();

  return (
    <div
      id="app"
      className={style.container}
    >
      <Sidebar style={{ height: "100vh" }}>
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center" }}
          >
            <h2>Admin</h2>
          </MenuItem>

          <MenuItem
            component={<NavLink to={"/admin"} />}
            icon={<HomeOutlinedIcon />}
            className={style.pro_sidebar_content}
          >
            DASHBOARD
          </MenuItem>

          <MenuItem
            component={<NavLink to={"/admin/users"} />}
            icon={<PeopleOutlinedIcon />}
            className={style.pro_sidebar_content}
          >
            USUARIOS
          </MenuItem>

          <MenuItem
            component={<NavLink to={"/admin/plans"} />}
            icon={<PublicOutlinedIcon />}
            className={style.pro_sidebar_content}
          >
            PLANES
          </MenuItem>

          <MenuItem
            component={<NavLink to={"/admin/blogs"} />}
            icon={<RateReviewOutlinedIcon />}
            className={style.pro_sidebar_content}
          >
            RESEÑAS
          </MenuItem>

          <MenuItem
            component={<NavLink to={"/admin/products"} />}
            icon={<LocalOfferOutlinedIcon />}
            className={style.pro_sidebar_content}
          >
            PRODUCTOS
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}
