import { useRef, useEffect, useState } from "react";
import { SendMessagesToChat } from "@app/Hooks/SendMessagesToChat";
import { io } from "socket.io-client";
import { TheirText } from "./TheirText";
import { UserText } from "./UserText";
import { ChatInput } from "./ChatInput";

import "./Chat.scss";

export function Chat() {
  const [sendMessage, setSendMessage] = useState<string>("");

  const socket = io("http://localhost:4500");

  const { messages } = SendMessagesToChat();

  const endOfPageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    endOfPageRef.current?.scrollIntoView({ behavior: "auto" });
  }, []);

  const handleSendMessage = () => {};

  return (
    <>
      <div className="chat">
        {messages.map((message) => {
          return message;
        })}
        <ChatInput />
        <div ref={endOfPageRef} />
      </div>
    </>
  );
}

export default Chat;
