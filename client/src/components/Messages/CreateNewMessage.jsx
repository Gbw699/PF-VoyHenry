import style from "./CreateNewMessage.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CreateNewMessage({ allMessage, setTo, setMessageSelect, setConversation }) {
  const [ users, setUsers ] = useState([]);
  const myUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    axios.get("/api/v1/users")
    .then(response => setUsers(response.data))
    .catch(error => console.error(error));
  }, []);

  const handleSelectChange = (event) => {
    setConversation([]);
    const userInfo = (users.users.filter((e) => e.nickName === event.target.value));
    const to = {
      nickName: userInfo[0].nickName,
      fullName: `${userInfo[0].firstName} ${userInfo[0].lastName}`,
      image: userInfo[0].image
    };
    setTo(to);
    let myChat= null;
    if(allMessage.length > 0){
       myChat = allMessage.filter((e) => (e.chat.firstUser === event.target.value || e.chat.secondUser === event.target.value ));
    }
    if(myChat?.[0]){
      setMessageSelect(myChat[0].chat.id);
    }else{
      setMessageSelect("nuevoMensaje");
    }
  };

  return (
    <div
    className={style.inputContainer}
    >
      <select 
        placeholder="Busca un chat o inicia uno nuevo"
        className={style.input}
        list="users"
        onChange={handleSelectChange}
        value={null}
      >
         <option value={null}>--Inicia o busca un chat--</option>
         {
          users.users?.map((e) => {
            if(e.nickName !== myUser.nickName){
              return <option
              key={e.nickName}
              value={e.nickName}
              >
                {`${e.firstName} ${e.lastName}`}
              </option>;
            }
          })
        }
        </select>
    </div>
  );

}