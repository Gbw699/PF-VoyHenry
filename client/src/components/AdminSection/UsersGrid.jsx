import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import {
  DataGrid,
  GridActionsCellItem,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";

export default function UsersGrid({ users }) {
  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector />
        <Button
          color="primary"
          startIcon={<AddIcon />}
          onClick={(e) => console.log(e)}
        >
          ADD RECORD
        </Button>
      </GridToolbarContainer>
    );
  }

  const handleEditClick = (event) => {
    console.log(event);
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
      headerName: "Editar",
      type: "actions",
      width: 150,
      renderCell: (nickName) => {
        return (
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Editar"
            onClick={() => handleEditClick(nickName.row.col1)}
          ></GridActionsCellItem>
        );
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
