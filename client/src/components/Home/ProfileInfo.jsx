import * as React from "react";
import usersData from "../../users.json"

export default function ProfileInfo() {
  const user = usersData.data[0]
  return (
    <div>
      <img src={user.image} alt={user.image} />
      <p>{user.nickName}</p>
    </div>
  );
}

