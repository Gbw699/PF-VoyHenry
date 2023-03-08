import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import EditIcon from "@mui/icons-material/Edit";
import DeleteRecord from "../recycleAdmin/DeleteRecord";
import CustomToolbar from "../recycleAdmin/CustomToolbar";

export default function PlansGrid({
  blogs,
  reRender,
  setBlogsInfo,
  setReRender,
  setCreateRecord,
  setEditRecord,
}) {
  const location = useLocation();

  const handleDeleteClick = (id) => {
    DeleteRecord(id, location.pathname, reRender, setReRender);
  };

  const handleEditClick = (row) => {
    setBlogsInfo(row);
    setEditRecord(true);
  };

  const rows = useMemo(
    () =>
      blogs?.map((blog) => {
        return {
          id: blog.id,
          col1: blog.userNickName,
          col2: blog.title,
          col3: blog.content,
          col4: blog.date,
          col5: blog.votes,
          col6: blog.stars,
          col7: blog.image,
        };
      }),
    [blogs]
  );

  const columns = [
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 150,
      cellClassName: "actions",
      getActions: ({ row }) => {
        return [
          <GridActionsCellItem
            key={row.col1 + 1}
            icon={<DeleteIcon />}
            label="Delete"
            onClick={() => handleDeleteClick(row.id)}
            color="inherit"
          />,
          <GridActionsCellItem
            key={row.col1 + 0}
            icon={<EditIcon />}
            label="Edit"
            onClick={() => handleEditClick(row)}
            color="inherit"
          />,
        ];
      },
    },
    { field: "id", headerName: "Id", width: 75 },
    { field: "col1", headerName: "Nickname", width: 150 },
    { field: "col2", headerName: "Título", width: 150 },
    { field: "col3", headerName: "Descripción", width: 400 },
    {
      field: "col4",
      headerName: "Fecha de creación",
      type: "date",
      width: 150,
    },
    {
      field: "col5",
      headerName: "Cantidad de votos",
      type: "number",
      width: 150,
    },
    {
      field: "col6",
      headerName: "Estrellas",
      type: "number",
      width: 100,
    },
    {
      field: "col7",
      headerName: "Imagen de la reseña",
      width: 250,
    },
  ];

  return (
    <Box sx={{ height: "auto", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        components={{
          Toolbar: () => CustomToolbar(setCreateRecord),
        }}
      />
    </Box>
  );
}
