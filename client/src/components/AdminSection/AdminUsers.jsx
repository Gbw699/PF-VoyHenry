import { useState } from "react";
import AxiosUsers from "../Users/AxiosUsers";
import UsersGrid from "./UsersGrid";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);

  return (
    <>
      <AxiosUsers setUsers={setUsers} />
      <UsersGrid users={users} />
    </>
  );
}
