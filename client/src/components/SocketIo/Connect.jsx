import { useEffect } from "react";
import { io } from "socket.io-client";

export default function Connect() {

  useEffect(() => {
    if (localStorage.getItem("user")){
      const socket = io("http://localhost:3001");
  
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
  }, []);

  return (
    <>
      
    </>
  );

}