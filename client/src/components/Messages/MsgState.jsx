import MsgSocketIo from "./MsgSocketIo";
import AllMessages from "./AllMessages";
import Conversation from "./Conversation";
import { useState } from "react";

export default function MsgState() {
  const [ newMenssage, setNewMenssage ] = useState(false);
  const [ allMessage, setAllMessage ] = useState([]);
  const [ messageSelect, setMessageSelect ] = useState(null);
  const [ conversation, setConversation ] = useState([]);
  return (
    <>
      <MsgSocketIo
        newMenssage={newMenssage}
        setNewMenssage={setNewMenssage}
      />
      <AllMessages
        allMessage={allMessage}
        setMessageSelect={setMessageSelect}
        setAllMessage={setAllMessage}
        setConversation={setConversation}
      />
      <Conversation
        setConversation={setConversation}
        conversation={conversation}
        messageSelect={messageSelect}
      />
    </>
  );

}