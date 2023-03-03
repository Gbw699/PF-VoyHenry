import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteRecord from "./recycleAdmin/DeleteRecord";
import CustomToolbar from "./recycleAdmin/CustomToolbar";
import { useLocation } from "react-router-dom";
import EditRecord from "./recycleAdmin/EditRecord";

export default function UsersGrid({ users, reRender, setReRender }) {
  const location = useLocation();

  const handleEditClick = (nickName) => {
    console.log("edit");
    EditRecord(nickName, location.pathname, reRender, setReRender);
  };

  const handleDeleteClick = (nickName) => {
    DeleteRecord(nickName, location.pathname, reRender, setReRender);
  };

  const rows = users?.map((user, index) => {
    return {
      id: index,
      col1: user.nickName,
      col2: user.firstName,
      col3: user.lastName,
      col4: user.email,
      col5: user.dateOfBirth,
      col6: user.genre,
      col7: user.role,
      col8: user.about,
      col9: user.image,
    };
  });

  const columns = [
    { field: "id", headerName: "Id", width: 75 },
    { field: "col1", headerName: "Nickname", width: 150 },
    { field: "col2", headerName: "Nombre", width: 150 },
    { field: "col3", headerName: "Apellido", width: 150 },
    { field: "col4", headerName: "Mail", width: 150 },
    { field: "col5", headerName: "Fecha de nacimiento", width: 150 },
    { field: "col6", headerName: "Género", width: 150 },
    { field: "col7", headerName: "Rol", width: 100 },
    { field: "col8", headerName: "Descripción", width: 200 },
    { field: "col9", headerName: "Imagen de perfil", width: 150 },
    {
      field: "col10",
      headerName: "Acciones",
      type: "actions",
      width: 150,
      cellClassName: "actions",
      getActions: (nickName) => {
        return [
          <GridActionsCellItem
            key={1}
            icon={<EditIcon />}
            label="Editar"
            onClick={() => handleEditClick(nickName.row.col1)}
          ></GridActionsCellItem>,
          <GridActionsCellItem
            key={2}
            icon={<DeleteIcon />}
            label="Delete"
            onClick={() => handleDeleteClick(nickName.row.col1)}
            color="inherit"
          ></GridActionsCellItem>,
        ];
      },
    },
  ];

  return (
    <Box sx={{ height: "auto", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        components={{
          Toolbar: CustomToolbar,
        }}
      />
    </Box>
  );
}
