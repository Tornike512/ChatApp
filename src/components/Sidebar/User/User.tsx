import { GlobalContext } from "@app/Providers/GlobalProvider";
import { useContext } from "react";
import { UserType } from "@app/Types/Types";

import "./User.scss";

export function User({ user }: { user: UserType }) {
  const { currentUser } = useContext(GlobalContext);

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
