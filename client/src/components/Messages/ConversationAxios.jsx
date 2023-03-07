import { useEffect } from "react";
import axios from "axios";

export default function ConversationAxios({ messageSelect, setConversation }) {

  useEffect(() => {
    (async () => {
      const chats = await axios.get(`/api/v1/messages/${messageSelect}`);
      await setConversation(chats.data);
      
    })();
  }, [messageSelect]);

  return (
    <>
      
    </>
  );

}