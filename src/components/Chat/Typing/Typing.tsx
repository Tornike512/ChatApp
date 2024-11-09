import { useEffect, useContext } from "react";
import { GlobalContext } from "@app/Providers/GlobalProvider";
import useSocket from "@app/Hooks/useSocket";

import "./Typing.scss";

export function Typing({ userImage }: { userImage: string }) {
  const { typingUser, setTypingUser } = useContext(GlobalContext);
  const socket: any = useSocket();

  useEffect(() => {
    if (socket) {
      socket.on("typing", ({ isTyping, userImage }) => {
        console.log(isTyping, userImage);
      });

      return () => {
        socket.off("typing");
      };
    }
  }, [socket]);

  console.log(typingUser);

  return (
    <div className="typing-container">
      <img className="user-typing" src={userImage} alt="User Image" />
      <div className="typing">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Typing;
