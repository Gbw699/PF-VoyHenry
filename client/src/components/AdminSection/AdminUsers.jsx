import { useState } from "react";
import AxiosUsers from "../Users/AxiosUsers";
import UsersGrid from "./UsersGrid";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [reRender, setReRender] = useState(false);

  return (
    <>
      <AxiosUsers
        setUsers={setUsers}
        reRender={reRender}
      />
      <UsersGrid
        users={users}
        reRender={reRender}
        setReRender={setReRender}
      />
    </>
  );
}
