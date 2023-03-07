import ConversationAxios from "./ConversationAxios";
import MapConversation from "./MapConversation";

export default function Conversation({ messageSelect, setConversation, conversation }) {

  return (
    <>
      <ConversationAxios
        setConversation={setConversation}
        messageSelect={messageSelect}
      />
      <MapConversation
        conversation={conversation}
      />
    </>
  );

}