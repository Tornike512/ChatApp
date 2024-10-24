import { useRef, useEffect, useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "@app/Providers/GlobalProvider";
import { SendMessagesToChat } from "@app/Hooks/SendMessagesToChat";
import { io } from "socket.io-client";
import { TheirText } from "./TheirText";
import { UserText } from "./UserText";
import { ChatInput } from "./ChatInput";

import "./Chat.scss";

export function Chat() {
  const [chatHistory, setChatHistory] = useState<string[]>([]);
  const { messages } = SendMessagesToChat();

  const socket = io("http://localhost:5000");

  const uniqueId = uuidv4();

  const endOfPageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    endOfPageRef.current?.scrollIntoView({ behavior: "auto" });
    socket.on("message", (message) => {
      setChatHistory((prev) => [...prev, message]);
    });
  }, []);

  return (
    <>
      <div className="chat">
        <div>
          {messages.map((message: any, index: number) => {
            return <div key={index}>{message.message}</div>;
          })}
        </div>
        {chatHistory.map((chat: any) => {
          return <div key={uniqueId}>{chat.message}</div>;
        })}
        <ChatInput />
        <div ref={endOfPageRef} />
      </div>
    </>
  );
}

export default Chat;
