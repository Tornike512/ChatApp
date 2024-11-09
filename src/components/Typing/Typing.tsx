import { useEffect, useContext } from "react";
import { GlobalContext } from "@app/Providers/GlobalProvider";
import useSocket from "@app/Hooks/useSocket";

import "./Typing.scss";

export function Typing() {
  const { typingUser, setTypingUser } = useContext(GlobalContext);
  const socket: any = useSocket();

  useEffect(() => {
    if (socket) {
      socket.on(
        "typing",
        ({ isTyping, userImage }: { isTyping: any; userImage: any }) => {
          console.log({ isTyping, userImage });

          //   setTypingUser((prev) => ({
          //     ...prev,
          //     isTyping: isTyping,
          //     image: userImage,
          //   }));
        }
      );
    }
  }, [socket]);

  console.log(typingUser);

  return (
    <div className="typing-container">
      <img className="user-typing" src={typingUser.image[0]} alt="User Image" />
      <div className="typing">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Typing;
