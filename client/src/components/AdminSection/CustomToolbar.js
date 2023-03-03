import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import {
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import { useLocation } from "react-router-dom";

export default function CustomToolbar() {
  const location = useLocation();

  const handleCreateClick = () => {
    console.log(location.pathname === "/admin/users");
  };

  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <Button
        color="primary"
        startIcon={<AddIcon />}
        onClick={() => handleCreateClick()}
      >
        ADD RECORD
      </Button>
    </GridToolbarContainer>
  );
}
