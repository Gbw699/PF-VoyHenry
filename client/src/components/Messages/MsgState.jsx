import MsgSocketIo from "./MsgSocketIo";
import AllMessages from "./AllMessages";
import Conversation from "./Conversation";
import SendMessage from "./SendMessage";
import { useState } from "react";

export default function MsgState() {
  const [ newMenssage, setNewMenssage ] = useState(false);
  const [ allMessage, setAllMessage ] = useState([]);
  const [ messageSelect, setMessageSelect ] = useState(null);
  const [ conversation, setConversation ] = useState([]);
  const [ to, setTo ] = useState(null);
  
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
        setTo={setTo}
      />
      <hr></hr>
      <Conversation
        setConversation={setConversation}
        conversation={conversation}
        messageSelect={messageSelect}
        to={to}
      />
      <hr></hr>
      { 
        messageSelect !== null
        && <SendMessage
          to={to}
        />
      }
    </>
  );

}