export default function MapConversation({ conversation }) {

  return (
    <>
      {
        conversation.map((element) => {
          return (
            <div
              key={element.chat.id}
            >
              <h4>
                {element.chat.from}
              </h4>
              <p>
                {element.chat.message}
              </p>
            </div>
          );
        })
      }
    </>
  );

}