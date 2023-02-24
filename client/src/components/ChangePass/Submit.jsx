import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Submit({pass, token}) {
  const navigate = useNavigate()

  const handlerOnClick = () => {
    if (pass.firstPass === pass.secondPass){
      axios.post("/api/v1/auth/change-pass", {
        token: token,
        newPassword: pass.firstPass
      });
      navigate("/logIn");
    }
  };

  return (
    <>
      <button
        onClick={handlerOnClick}
      >
        Change pass!
      </button>
    </>
  );

}