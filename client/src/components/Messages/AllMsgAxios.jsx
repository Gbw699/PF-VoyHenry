import { useEffect } from "react";
import axios from "axios";

export default function AllMsgAxios( { setAllMessage, newMenssage, messageSelect }) {
  const userInfo = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {

    (async () => {
      let chats = await axios.get(`/api/v1/messages/${userInfo.nickName}/chats`);

      chats = chats.data;
      chats = chats.sort((a ,b) => new Date(a.lastMessage.updatedAt) - new Date(b.lastMessage.updatedAt)).reverse();
      console.log(chats);
      await setAllMessage(chats);
    })();

  }, [newMenssage, messageSelect]);

  return (
    <>
      
    </>
  );

}