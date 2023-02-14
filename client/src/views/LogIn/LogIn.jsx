import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function LogIn() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <Button
      variant="contained"
      onClick={handleClick}
    >
      Volver
    </Button>
  );
}
