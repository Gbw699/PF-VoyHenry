import { useState } from "react";
import { socket } from "../SocketIo/Connect";
import axios from "axios";

export default function SendMessage({ to, messageSelect, setMessageSelect }) {
  const [ message, setMessage ] = useState("");
  const userInfo = JSON.parse(localStorage.getItem("user"));

  const handlerOnChange = (event) => {
    setMessage(event.target.value);
  };

  const handlerOnClick = async () => {
    if(message !== ""){
      if(messageSelect !== "nuevoMensaje"){
        socket.emit("mensaje", {
          from: userInfo.nickName,
          to: to.nickName,
          message: message
        });
        setMessage("");
      } else {
        const messageData = ({
          from: userInfo.nickName,
          to: to.nickName,
          message: message
        });
        let axiosRespuesta = null;
        try {
          const response = await axios.post("/api/v1/messages", messageData);
          axiosRespuesta = response.data;
        } catch (error) {
          console.error(error);
        }
        setMessageSelect(axiosRespuesta.id);
      }
    }
  };

  return (
    <>
      <input
        value={message}
        onChange={handlerOnChange}
        onKeyDown={(event) => event.key === "Enter" && handlerOnClick()}
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