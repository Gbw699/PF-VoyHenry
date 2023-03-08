import AllMsgAxios from "./AllMsgAxios";
import MapAllMsg from "./MapAllMsg";
import style from "./AllMessages.module.css";
import CreateNewMessage from "./CreateNewMessage";

export default function AllMessages({ allMessage, setAllMessage, setMessageSelect, setTo, newMenssage, setConversation}) {

  return (
    <>
      <AllMsgAxios
        allMessage={allMessage}
        setAllMessage={setAllMessage}
        newMenssage={newMenssage}
        />
      <div
      className={style.containerAllChats}
      >
        <CreateNewMessage
          setTo={setTo}
          allMessage={allMessage}
          setMessageSelect={setMessageSelect}
          setConversation={setConversation}
        >
        </CreateNewMessage>
        <MapAllMsg
          setTo={setTo}
          setMessageSelect={setMessageSelect}
          allMessage={allMessage}
        >
        </MapAllMsg>
      </div>
    </>
  );

}