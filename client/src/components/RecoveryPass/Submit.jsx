import axios from "axios";

export default function Submit({ data, isValidEmail }) {
  const handlerOnClick = () => {
    if (isValidEmail) {
      axios.post("/api/v1/auth/recovery", data);
    }
  };

  return (
    <>
      <button onClick={handlerOnClick}>Get Mail</button>
    </>
  );
}
