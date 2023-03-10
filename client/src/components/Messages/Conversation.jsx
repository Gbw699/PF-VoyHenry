import ConversationAxios from "./ConversationAxios";
import MapConversation from "./MapConversation";

export default function Conversation({ messageSelect, setConversation, conversation, newMenssage, allMessage }) {

  return (
    <>
      <ConversationAxios
        setConversation={setConversation}
        messageSelect={messageSelect}
        newMenssage={newMenssage}
        allMessage={allMessage}
      />
      <MapConversation
        conversation={conversation}
      />
    </>
  );

}