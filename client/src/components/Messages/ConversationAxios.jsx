import { useEffect } from "react";
import axios from "axios";

export default function ConversationAxios({ messageSelect, setConversation, newMenssage }) {

  useEffect(() => {
    (async () => {
      const chats = await axios.get(`/api/v1/messages/${messageSelect}`);
      await setConversation(chats.data);
      
    })();
  }, [messageSelect, newMenssage]);

  return (
    <>
      
    </>
  );

}