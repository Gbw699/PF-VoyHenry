import { socket } from "../SocketIo/Connect";

export default function SendMessage({ to }) {
  const userInfo = JSON.parse(localStorage.getItem("user"));

  const handlerOnClick = () => {
    socket.emit("mensaje", {
      from: userInfo.nickName,
      to: to,
      mensaje: "Funciono"
    });
  };

  return (
    <>
      <input
        type="textArea"
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