import { ReceiveUserByName } from "@app/Hooks/ReceiveUserByName";
import { GlobalContext } from "@app/Providers/GlobalProvider";
import { useContext } from "react";

import "./TheirText.scss";

export function TheirText() {
  const { currentUser } = useContext(GlobalContext);
  const currentUserInfo = ReceiveUserByName(currentUser);

  return (
    <figure className="their-text">
      <img src={currentUserInfo.user.userImage} alt="Other User" />
      <figcaption>Hello I am looking for</figcaption>
    </figure>
  );
}

export default TheirText;
