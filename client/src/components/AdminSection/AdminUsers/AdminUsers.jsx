import { useState } from "react";
import AxiosUsers from "../../Users/AxiosUsers";
import UsersGrid from "./UsersGrid";
import CreateUserForm from "./CreateUserForm";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [createRecord, setCreateRecord] = useState(false);
  const [editRecord, setEditRecord] = useState(false);
  const [reRender, setReRender] = useState(false);

  return (
    <>
      <AxiosUsers
        setUsers={setUsers}
        reRender={reRender}
      />
      {!createRecord && (
        <UsersGrid
          users={users}
          reRender={reRender}
          setReRender={setReRender}
          setCreateRecord={setCreateRecord}
        />
      )}
      {createRecord && (
        <CreateUserForm
          reRender={reRender}
          setReRender={setReRender}
          setCreateRecord={setCreateRecord}
        />
      )}
    </>
  );
}
