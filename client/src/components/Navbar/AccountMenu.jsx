import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
//remplazar la imagen por la del usuario
import img from "../../assets/voyHENRY_logo.png";
import { NavLink } from "react-router-dom";
import style from "./AccountMenu.module.css";

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleLogOut = () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar
            srcSet={img}
            sx={{ width: 32, height: 32 }}
          >
            I
          </Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 0.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "& .MuiButtonBase-root": {
              pt: 0.3,
              pb: 0.3,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem sx={{ justifyContent: "center" }}>
          Nombre del usuario
        </MenuItem>
        <Divider />
        <NavLink
          to={"/marketplace/shoppingcart"}
          style={{ color: "#707070" }}
        >
          <MenuItem className={style.menuLinks}>Carrito</MenuItem>
        </NavLink>
        <Divider />
        <NavLink
          to={"/profile"}
          style={{ color: "#707070" }}
        >
          <MenuItem className={style.menuLinks}>Mi perfil</MenuItem>
        </NavLink>
        <Divider />
        <NavLink
          to={"/profile/edit"}
          style={{ color: "#707070" }}
        >
          <MenuItem className={style.menuLinks}>Editar perfil</MenuItem>
        </NavLink>
        <NavLink
          to={"/configuration"}
          style={{ color: "#707070" }}
        >
          <MenuItem className={style.menuLinks}>Configuración</MenuItem>
        </NavLink>
        <MenuItem className={style.menuLinks}> Modo oscuro</MenuItem>
        <Divider />
        <NavLink
          to={"/"}
          style={{ color: "#707070" }}
        >
          <MenuItem
            onClick={handleLogOut}
            className={style.menuLinks}
          >
            Cerrar sesión
          </MenuItem>
        </NavLink>
      </Menu>
    </React.Fragment>
  );
}
