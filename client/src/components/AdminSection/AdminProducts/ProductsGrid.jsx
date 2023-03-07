import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import EditIcon from "@mui/icons-material/Edit";
import DeleteRecord from "../recycleAdmin/DeleteRecord";
import CustomToolbar from "../recycleAdmin/CustomToolbar";

export default function PlansGrid({
  products,
  reRender,
  setProductsInfo,
  setReRender,
  setCreateRecord,
  setEditRecord,
}) {
  const location = useLocation();

  const handleDeleteClick = (id) => {
    DeleteRecord(id, location.pathname, reRender, setReRender);
  };

  const handleEditClick = (row) => {
    setProductsInfo(row);
    setEditRecord(true);
  };

  const currencyFormatter = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "ARS",
  });

  const rows = useMemo(
    () =>
      products?.map((product) => {
        return {
          id: product.id,
          col1: product.title,
          col2: product.availability,
          col3: product.stock,
          col4: product.category,
          col5: product.price,
          col6: product.detail,
          col7: product.mainImage,
        };
      }),
    [products]
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
    { field: "col1", headerName: "Título", width: 150 },
    {
      field: "col2",
      headerName: "Disponibilidad",
      type: "boolean",
      width: 100,
    },
    { field: "col3", headerName: "Stock", type: "number", width: 100 },
    {
      field: "col4",
      headerName: "Categoría",
      width: 150,
    },
    {
      field: "col5",
      headerName: "Precio",
      type: "number",
      width: 200,
      valueFormatter: ({ value }) => currencyFormatter.format(value),
      cellClassName: "font-tabular-nums",
    },
    {
      field: "col6",
      headerName: "Detalle",
      width: 350,
    },
    {
      field: "col7",
      headerName: "Imagen del producto",
      width: 250,
    },
  ];

  return (
    <Box
      sx={{
        height: "auto",
        width: "100%",
        "& .font-tabular-nums": {
          fontVariantNumeric: "tabular-nums",
        },
      }}
    >
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
