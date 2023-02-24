import axios from "axios";

export default function Submit({data}) {

  const handlerOnClick = () => {
    axios.post("/api/v1/auth/recovery", data);
  };

  return (
    <>
      <button
        onClick={handlerOnClick}
      >
        handlerOnClick
      </button>
    </>
  );

}