import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import {
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";

export default function CustomToolbar(setCreateRecord) {
  const handleCreateClick = () => {
    setCreateRecord(true);
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
