import { ReceiveUserByName } from "@app/Hooks/ReceiveUserByName";

import "./User.scss";

export function User() {
  const storedUser = localStorage.getItem("user");
  const { user } = ReceiveUserByName(storedUser as string);

  return (
    <figure className="user">
      <img src={user.userImage} alt="Person Image" />
      <div className="user-name">
        <figcaption>{user.username}</figcaption>
        <figcaption>Typing...</figcaption>
      </div>
      <div className="online-dot"></div>
    </figure>
  );
}

export default User;
