import { socket } from "../SocketIo/Connect";
import { useEffect } from "react";

export default function MsgSocketIo({ newMenssage, setNewMenssage }) {
  
  socket?.on("newMessage", () => {
    if(newMenssage === "cambio"){
      setNewMenssage("Cambio");
    }else {
      setNewMenssage("cambio");
    }
  });

  return (
    <>
    </>
  );

}