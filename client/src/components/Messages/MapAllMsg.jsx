export default function MapAllMsg({ allMessage, setMessageSelect, setTo }) {
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
            let to = element.usersInfo[1].nickName;
            let lastMessage = null;
            if (element?.lastMessage.from === userInfo.nickName){
              lastMessage = `You: ${element.lastMessage.message}`;
            } else {
              lastMessage = `${element.usersInfo[1].firstName} ${element.usersInfo[1].lastName}: ${element.lastMessage.message}`;
            };

            return(
              <div 
                key={element.chat.id}
                onClick={() => handlerOnClick(element.chat.id, to)}
              >
                <img
                  src={element.usersInfo[1].image}
                />
                <h3>
                  {element.usersInfo[1].firstName + " " + element.usersInfo[1].lastName}
                </h3>
                <p>
                  {lastMessage}
                </p>
              </div>
            );

          } else {

            let to = element.usersInfo[0].nickName;
            let lastMessage = null;
            if (element?.lastMessage.from === userInfo.nickName){
              lastMessage = `You: ${element.lastMessage.message}`;
            } else {
              lastMessage = `${element.usersInfo[0].firstName} ${element.usersInfo[0].lastName}: ${element.lastMessage.message}`;
            };
            return(
              <div 
                key={element.chat.id}
                onClick={handlerOnClick(element.chat.id, to)}
              >
                <img
                  src={element.usersInfo[0].image}
                />
                <h3>
                  {element.usersInfo[0].firstName + " " + element.usersInfo[0].lastName}
                </h3>
                <p>
                  {lastMessage}
                </p>
              </div>
            );
          }
        })
      }
    </>
  );

}