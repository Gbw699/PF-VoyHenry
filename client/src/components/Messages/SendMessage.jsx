import { useState } from "react";
import { socket } from "../SocketIo/Connect";

export default function SendMessage({ to }) {
  const [ message, setMessage ] = useState("");
  const userInfo = JSON.parse(localStorage.getItem("user"));

  const handlerOnChange = (event) => {
    setMessage(event.target.value);
  };

  const handlerOnClick = () => {
    if(message !== ""){
      socket.emit("mensaje", {
        from: userInfo.nickName,
        to: to,
        message: message
      });
      setMessage("");
    }
  };

  return (
    <>
      <input
        value={message}
        onChange={handlerOnChange}
      >
      </input>
      <button
        onClick={handlerOnClick}
      >
        Enviar
      </button>
    </>
  );

}