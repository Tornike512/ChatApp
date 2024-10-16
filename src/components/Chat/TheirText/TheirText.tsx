import { ReceiveUserByName } from "@app/Hooks/ReceiveUserByName";
import { GlobalContext } from "@app/Providers/GlobalProvider";
import { useContext, useEffect } from "react";
import { io } from "socket.io-client";

import "./TheirText.scss";

export function TheirText() {
  const { currentUser } = useContext(GlobalContext);
  const currentUserInfo = ReceiveUserByName(currentUser);

  useEffect(() => {
    const socket = io("ws://localhost:5173");

    socket.on("connect", () => {
      console.log("Socket connected!");
    });

    socket.on("someEvent", (data) => {
      console.log("Received data:", data);
    });
    return () => {
      socket.disconnect();
      console.log("Socket disconnected!");
    };
  }, []);

  return (
    <figure className="their-text">
      <img src={currentUserInfo.user.userImage} alt="Other User" />
      <figcaption>Hello I am looking for</figcaption>
    </figure>
  );
}

export default TheirText;
