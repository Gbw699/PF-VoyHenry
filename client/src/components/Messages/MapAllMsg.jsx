export default function MapAllMsg({ allMessage }) {
  const userInfo = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      {
        allMessage.map((element) => {
          if (element.usersInfo[0].nickName === userInfo.nickName){
            return(
              <div 
                key={element.chat.id}
              >
                <img
                  src={element.usersInfo[1].image}
                />
                <p>
                  {element.usersInfo[1].firstName + " " + element.usersInfo[1].lastName}
                </p>
              </div>
            );
          } else {
            return(
              <div 
                key={element.chat.id}
              >
                <img
                  src={element.usersInfo[0].image}
                />
                <p>
                  {element.usersInfo[0].firstName + " " + element.usersInfo[0].lastName}
                </p>
              </div>
            );
          }
        })
      }
    </>
  );

}