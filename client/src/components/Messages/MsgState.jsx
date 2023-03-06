import MsgSocketIo from "./MsgSocketIo";
import AllMessages from "./AllMessages";
import { useState } from "react";

export default function MsgState() {
  const [ newMenssage, setNewMenssage ] = useState(false);
  const [ allMessage, setAllMessage ] = useState([]);

  return (
    <>
      <MsgSocketIo
        newMenssage={newMenssage}
        setNewMenssage={setNewMenssage}
      />
      <AllMessages
        allMessage={allMessage}
        setAllMessage={setAllMessage}
      />
    </>
  );

}