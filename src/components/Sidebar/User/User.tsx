import { GlobalContext } from "@app/Providers/GlobalProvider";
import { useContext } from "react";
import { UserType } from "@app/Types/Types";

import "./User.scss";

export function User({ username }: { username: UserType }) {
  const { typingUser } = useContext(GlobalContext);

  const filterTypingUsers = typingUser.filter(
    (users) => users.username === username.username
  );

  return (
    <figure className="user">
      <img src={username.userImage} alt="Person Image" />
      <div className="user-name">
        <figcaption>{username.username}</figcaption>
        {filterTypingUsers.length > 0 ? (
          filterTypingUsers.map((user: any) => (
            <figcaption key={user.username}>
              {user.username === username.username ? "Typing..." : "Online"}
            </figcaption>
          ))
        ) : (
          <figcaption>Online</figcaption>
        )}
      </div>
      <div className="online-dot"></div>
    </figure>
  );
}

export default User;
