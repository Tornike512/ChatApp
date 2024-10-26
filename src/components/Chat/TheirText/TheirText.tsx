import { ReceiveUserByName } from "@app/Hooks/ReceiveUserByName";
import { GlobalContext } from "@app/Providers/GlobalProvider";
import { useContext, useEffect } from "react";
import { ReceiveAllUsers } from "@app/Hooks/ReceiveAllUsers";
import { io } from "socket.io-client";

import "./TheirText.scss";

export function TheirText({ id, message }: { id: string; message: string }) {
  const { currentUser } = useContext(GlobalContext);
  const currentUserInfo = ReceiveUserByName(currentUser);
  const { allUsernames } = ReceiveAllUsers();
  const usersImages = allUsernames.map((user) => {
    if (currentUser === user.username) {
      return user.userImage;
    }
  });

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
    <figure key={id} className="their-text">
      <img alt="Other User" />
      <figcaption>{message}</figcaption>
    </figure>
  );
}

export default TheirText;
