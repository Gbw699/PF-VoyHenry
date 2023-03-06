import AllMsgAxios from "./AllMsgAxios";
import MapAllMsg from "./MapAllMsg";

export default function AllMessages({ allMessage, setAllMessage }) {

  return (
    <>
      <AllMsgAxios
        allMessage={allMessage}
        setAllMessage={setAllMessage}
      />
      <MapAllMsg
        allMessage={allMessage}
      >

      </MapAllMsg>
    </>
  );

}