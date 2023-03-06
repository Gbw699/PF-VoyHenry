import AllMsgAxios from "./AllMsgAxios";
import MapAllMsg from "./MapAllMsg";

export default function AllMessages({ allMessage, setAllMessage, setMessageSelect }) {

  return (
    <>
      <AllMsgAxios
        allMessage={allMessage}
        setAllMessage={setAllMessage}
      />
      <MapAllMsg
        setMessageSelect={setMessageSelect}
        allMessage={allMessage}
      >

      </MapAllMsg>
    </>
  );

}