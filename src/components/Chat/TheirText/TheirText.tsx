import { GlobalContext } from "@app/Providers/GlobalProvider";
import { useEffect, useContext } from "react";
import { io } from "socket.io-client";

import "./TheirText.scss";

export function TheirText({
  id,
  message,
  userImage,
}: {
  id: string;
  message: string;
  userImage: any;
}) {
  useEffect(() => {
    const socket = io("https://new-peuc.onrender.com");

    socket.on("connect", () => {
      console.log("Socket connected!");
    });

    return () => {
      socket.disconnect();
      console.log("Socket disconnected!");
    };
  }, []);

  return (
    <figure key={id} className="their-text">
      <img src={userImage} alt="Other User" />
      <figcaption>{message}</figcaption>
    </figure>
  );
}

export default TheirText;
