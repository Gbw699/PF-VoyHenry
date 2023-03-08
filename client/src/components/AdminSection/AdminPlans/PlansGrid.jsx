import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteRecord from "../recycleAdmin/DeleteRecord";
import CustomToolbar from "../recycleAdmin/CustomToolbar";

export default function PlansGrid({
  plans,
  reRender,
  setPlansInfo,
  setReRender,
  setCreateRecord,
  setEditRecord,
}) {
  const location = useLocation();

  const handleDeleteClick = (id) => {
    DeleteRecord(id, location.pathname, reRender, setReRender);
  };

  const handleEditClick = (row) => {
    setPlansInfo(row);
    setEditRecord(true);
  };

  const rows = useMemo(
    () =>
      plans?.map((plan) => {
        return {
          id: plan.id,
          col1: plan.userNickName,
          col2: plan.title,
          col3: plan.summary,
          col4: plan.state,
          col5: plan.eventDate,
          col6: plan.votes,
          col7: plan.stars,
          col8: plan.country,
          col9: plan.province,
          col10: plan.city,
          col11: plan.address,
          col12: plan.description,
          col13: plan.mainImage,
        };
      }),
    [plans]
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
    { field: "col3", headerName: "Breve descripción", width: 150 },
    { field: "col4", headerName: "Estado", width: 150 },
    {
      field: "col5",
      headerName: "Fecha del evento",
      type: "date",
      width: 150,
    },
    {
      field: "col6",
      headerName: "Cantidad de votos",
      type: "number",
      width: 150,
    },
    {
      field: "col7",
      headerName: "Estrellas",
      type: "number",
      width: 100,
    },
    { field: "col8", headerName: "País", width: 200 },
    { field: "col9", headerName: "Provincia", width: 200 },
    { field: "col10", headerName: "Ciudad", width: 200 },
    { field: "col11", headerName: "Dirección", width: 200 },
    { field: "col12", headerName: "Descripción", width: 200 },
    {
      field: "col13",
      headerName: "Imagen del plan",
      width: 150,
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
