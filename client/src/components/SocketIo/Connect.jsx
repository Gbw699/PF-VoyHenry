import { useEffect } from "react";
import { io } from "socket.io-client";

const userInfo = JSON.parse(localStorage.getItem("user"));

let socket;

export default function Connect() {
  useEffect(() => {
    if (localStorage.getItem("user") && document.cookie !== "") {
      socket = io("http://localhost:3001", {
        auth: {
          nickName: userInfo.nickName,
          completeName: `${userInfo.firstName} ${userInfo.lastName}`,
        },
      });
      
      socket.on("connect", () => {
        console.log("Conectado al servidor");
      });

      socket.on("disconnect", () => {
        console.log("Desconectado del servidor");
      });

      return () => {
        socket.disconnect();
      };
    }
  }, [localStorage.getItem("user"), document.cookie]);

  return <></>;
}

export { socket };
