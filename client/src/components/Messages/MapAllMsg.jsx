import style from "./MapAllMsg.module.css";

export default function MapAllMsg({ allMessage, setMessageSelect, setTo, messageSelect }) {
  const userInfo = JSON.parse(localStorage.getItem("user"));

  const handlerOnClick = (chatId, to) => {
    setMessageSelect(chatId);
    setTo(to);
  };

  return (
    <>
      {
        allMessage.map((element) => {

          if (element.usersInfo[0].nickName === userInfo.nickName){
            let to = {
              nickName: element.usersInfo[1].nickName,
              fullName: `${element.usersInfo[1].firstName} ${element.usersInfo[1].lastName}`,
              image: element.usersInfo[1].image
            };
            let lastMessage = null;
            if (element?.lastMessage.from === userInfo.nickName){
              lastMessage = `You: ${element.lastMessage.message}`;
            } else {
              lastMessage = `${element.usersInfo[1].firstName} ${element.usersInfo[1].lastName}: ${element.lastMessage.message}`;
            };

            return(
              <div 
                className={messageSelect === element.chat.id ? style.chatSelectContainer : style.chatContainer}
                key={element.chat.id}
                onClick={() => handlerOnClick(element.chat.id, to)}
              >
                <img
                  className={style.perfileImage}
                  src={element.usersInfo[1].image}
                />
                <div
                  className={style.textContainer}
                >
                  <h3>
                    {element.usersInfo[1].firstName + " " + element.usersInfo[1].lastName}
                  </h3>
                  <p>
                    {lastMessage}
                  </p>
                </div>
              </div>
            );

          } else {

            let to = {
              nickName: element.usersInfo[0].nickName,
              fullName: `${element.usersInfo[0].firstName} ${element.usersInfo[0].lastName}`,
              image: element.usersInfo[0].image
            };
            let lastMessage = null;
            if (element?.lastMessage.from === userInfo.nickName){
              lastMessage = `You: ${element.lastMessage.message}`;
            } else {
              lastMessage = `${element.usersInfo[0].firstName} ${element.usersInfo[0].lastName}: ${element.lastMessage.message}`;
            };
            return(
              <div 
              className={messageSelect === element.chat.id ? style.chatSelectContainer : style.chatContainer}
                key={element.chat.id}
                onClick={() => handlerOnClick(element.chat.id, to)}
              >
                <img
                  className={style.perfileImage}
                  src={element.usersInfo[0].image}
                />
                <div
                  className={style.textContainer}
                >
                  <h3>
                    {element.usersInfo[0].firstName + " " + element.usersInfo[0].lastName}
                  </h3>
                  <p>
                    {lastMessage}
                  </p>
                </div>
              </div>
            );
          }
        })
      }
    </>
  );

}