import { TheirText } from "./TheirText";
import { UserText } from "./UserText";

import "./Chat.scss";

export function Chat() {
  return (
    <>
      <div className="chat">
        <TheirText />
        <UserText />
      </div>
    </>
  );
}

export default Chat;
