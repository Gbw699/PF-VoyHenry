import AllMsgAxios from "./AllMsgAxios";
import MapAllMsg from "./MapAllMsg";

export default function AllMessages({ allMessage, setAllMessage, setMessageSelect, setTo}) {

  return (
    <>
      <AllMsgAxios
        allMessage={allMessage}
        setAllMessage={setAllMessage}
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