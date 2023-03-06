import { io } from "socket.io-client";

export default function MsgSocketIo({ newMenssage, setNewMenssage }) {
  const userInfo = JSON.parse(localStorage.getItem("user"));

  const handlerOnClick = () => {
    const socket = io("http://localhost:3001", {
      auth: {
        nickName: userInfo.nickName,
        completeName: `${userInfo.firstName} ${userInfo.lastName}`,
      },
    });

    socket.emit("mensaje", "El botó anda");
    
  };

  return (
    <>
      <button
        onClick={handlerOnClick}
      >
        Soy un botón
      </button>
    </>
  );

}