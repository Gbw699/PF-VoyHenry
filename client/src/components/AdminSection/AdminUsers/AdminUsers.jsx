import { useState } from "react";
import AxiosUsers from "../../Users/AxiosUsers";
import UsersGrid from "./UsersGrid";
import CreateUserForm from "./CreateUserForm";
import EditUserForm from "./EditUserForm";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  // const [user, setUser] = useState({});
  const [userInfo, setUserInfo] = useState({});
  const [createRecord, setCreateRecord] = useState(false);
  const [editRecord, setEditRecord] = useState(false);
  const [reRender, setReRender] = useState(false);

  return (
    <>
      <AxiosUsers
        setUsers={setUsers}
        // id={id}
        // setUser={setUser}
        reRender={reRender}
      />
      {!createRecord && !editRecord && (
        <UsersGrid
          users={users}
          reRender={reRender}
          setUserInfo={setUserInfo}
          setReRender={setReRender}
          setCreateRecord={setCreateRecord}
          setEditRecord={setEditRecord}
        />
      )}
      {createRecord && (
        <CreateUserForm
          reRender={reRender}
          setReRender={setReRender}
          setCreateRecord={setCreateRecord}
        />
      )}
      {editRecord && (
        <EditUserForm
          // user={user}
          // setUser={setUser}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          reRender={reRender}
          setReRender={setReRender}
          setEditRecord={setEditRecord}
        />
      )}
    </>
  );
}
