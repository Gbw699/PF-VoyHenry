import AllMsgAxios from "./AllMsgAxios";
import MapAllMsg from "./MapAllMsg";

export default function AllMessages({ allMessage, setAllMessage, setMessageSelect, setTo, newMenssage}) {

  return (
    <>
      <AllMsgAxios
        allMessage={allMessage}
        setAllMessage={setAllMessage}
        newMenssage={newMenssage}
        />
      <MapAllMsg
        setTo={setTo}
        setMessageSelect={setMessageSelect}
        allMessage={allMessage}
      >

      </MapAllMsg>
    </>
  );

}