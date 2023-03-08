import MsgSocketIo from "./MsgSocketIo";
import AllMessages from "./AllMessages";
import Conversation from "./Conversation";
import SendMessage from "./SendMessage";
import { useState } from "react";
import style from "./MsgState.module.css";

export default function MsgState() {
  const [ newMenssage, setNewMenssage ] = useState("cambio");
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
      <div
        className={style.messagesContainer}
      >
        <AllMessages
          allMessage={allMessage}
          setMessageSelect={setMessageSelect}
          setAllMessage={setAllMessage}
          setConversation={setConversation}
          setTo={setTo}
          newMenssage={newMenssage}
        />
        <div
          className={style.conversationContainer}
        >
          <Conversation
            setConversation={setConversation}
            conversation={conversation}
            messageSelect={messageSelect}
            to={to}
            newMenssage={newMenssage}
          />
          { 
            messageSelect !== null
            && <SendMessage
            to={to}
            />
          }
        </div>
      </div>
    </>
  );

}