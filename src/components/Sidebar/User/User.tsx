import { GlobalContext } from "@app/Providers/GlobalProvider";
import { useContext } from "react";
import { UserType } from "@app/Types/Types";

import "./User.scss";

export function User({ username }: { username: UserType }) {
  const { currentUser, typingUser } = useContext(GlobalContext);

  return (
    <figure className="user">
      <img src={username.userImage} alt="Person Image" />
      <div className="user-name">
        <figcaption>{username.username}</figcaption>
        {typingUser.map((user) => {
          return (
            <figcaption>
              {user.username !== username ? "Typing..." : "Online"}
            </figcaption>
          );
        })}
      </div>
      <div className="online-dot"></div>
    </figure>
  );
}

export default User;
