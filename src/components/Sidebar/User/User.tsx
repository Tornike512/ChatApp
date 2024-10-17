import { ReceiveUserByName } from "@app/Hooks/ReceiveUserByName";
import { GlobalContext } from "@app/Providers/GlobalProvider";
import { useContext } from "react";

import "./User.scss";

export function User() {
  const { currentUser } = useContext(GlobalContext);
  const currentUserInfo = ReceiveUserByName(currentUser);

  return (
    <figure className="user">
      <img src={currentUserInfo.user.userImage} alt="Person Image" />
      <div className="user-name">
        <figcaption>{currentUserInfo.user.username}</figcaption>
        <figcaption>Typing...</figcaption>
      </div>
      <div className="online-dot"></div>
    </figure>
  );
}

export default User;
