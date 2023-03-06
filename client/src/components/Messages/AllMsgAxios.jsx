import { useEffect } from "react";
import axios from "axios";

export default function AllMsgAxios( { setAllMessage }) {
  const userInfo = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {

    (async () => {
      const chats = await axios.get(`/api/v1/messages/${userInfo.nickName}/chats`);
      await setAllMessage(chats.data);
    })();

  }, []);

  return (
    <>
      
    </>
  );

}