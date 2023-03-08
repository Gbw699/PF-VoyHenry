import { useEffect, useRef } from "react";
import style from "./MapConversation.module.css";

export default function MapConversation({ conversation }) {
  const conversationContainerRef = useRef(null);

  useEffect(() => {
    const conversationContainer = conversationContainerRef.current;
    conversationContainer.scrollTop = conversationContainer.scrollHeight - conversationContainer.clientHeight;
  }, [conversation]);
  
  return (
    <div
      className={style.conversationContainer}
      ref={conversationContainerRef}
    >
      {
        conversation.map((element) => {

          let messageFrom = null;
          let fullNameUserFrom = null;

          if(element.chat.from === element.usersInfo[0].nickName){
            fullNameUserFrom = `${element.usersInfo[0].firstName} ${element.usersInfo[0].lastName}`;
            messageFrom = element.usersInfo[0].nickName;
          } else {
            fullNameUserFrom = `${element.usersInfo[1].firstName} ${element.usersInfo[1].lastName}`;
            messageFrom = element.usersInfo[1].nickName;
          }

          const user = element.usersInfo.find(u => u.nickName === messageFrom);
          const userImage = user.image;

          return (
            <div
              key={element.chat.id}
            >
              <img 
                className={style.perfileImage}
                src={userImage}
              />
              <h4>
                {fullNameUserFrom}
              </h4>
              <p>
                {element.chat.message}
              </p>
            </div>
          );
        })
      }
    </div>
  );

}