import { useEffect } from "react";
import { io } from "socket.io-client";

export default function Connect() {
  const userInfo = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (localStorage.getItem("user") && document.cookie !== "") {
      const socket = io("http://localhost:3001", {
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

      socket.on("welcome", (data) => {
        console.log(data);
      });

      return () => {
        socket.disconnect();
      };
    }
  }, [localStorage.getItem("user"), document.cookie]);

  return <></>;
}
