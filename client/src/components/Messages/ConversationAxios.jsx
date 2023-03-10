import { useEffect } from "react";
import axios from "axios";

export default function ConversationAxios({ messageSelect, setConversation, newMenssage, allMessage }) {

  useEffect(() => {
    if (messageSelect !== null){
      (async () => {
        const chats = await axios.get(`/api/v1/messages/${messageSelect}`);
        await setConversation(chats.data);
        
      })();
    }

  }, [messageSelect, newMenssage, allMessage]);

  return (
    <>
      
    </>
  );

}