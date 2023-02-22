import { useState } from "react";
import AxiosUsers from "./AxiosUsers";
import UsersSection from "./UsersSection";

export default function UserState() {
  const [users, setUsers] = useState([]);

  return (
    <>
      <AxiosUsers setUsers={setUsers} />
      <UsersSection users={users} />
    </>
  );
}
