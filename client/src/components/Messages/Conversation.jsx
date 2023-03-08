import ConversationAxios from "./ConversationAxios";
import MapConversation from "./MapConversation";

export default function Conversation({ messageSelect, setConversation, conversation, newMenssage }) {

  return (
    <>
      <ConversationAxios
        setConversation={setConversation}
        messageSelect={messageSelect}
        newMenssage={newMenssage}
      />
      <MapConversation
        conversation={conversation}
      />
    </>
  );

}