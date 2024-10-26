import { useRef, useEffect, useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "@app/Providers/GlobalProvider";
import { SendMessagesToChat } from "@app/Hooks/SendMessagesToChat";
import { io } from "socket.io-client";
import { TheirText } from "./TheirText";
import { UserText } from "./UserText";
import { ChatInput } from "./ChatInput";
import { ReceiveAllUsers } from "@app/Hooks/ReceiveAllUsers";

import "./Chat.scss";

export function Chat() {
  const [chatHistory, setChatHistory] = useState<string[]>([]);
  const { messages } = SendMessagesToChat();
  const { currentUser } = useContext(GlobalContext);

  const socket = io("http://localhost:5000");

  const uniqueId = uuidv4();

  const { allUsernames } = ReceiveAllUsers();
  const usersImages = allUsernames.map((user) => {
    if (currentUser === user.username) {
      return user.userImage;
    }
  });

  const endOfPageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    socket.on("message", (message) => {
      setChatHistory((prev) => [...prev, message]);
    });
  }, []);

  useEffect(() => {
    endOfPageRef.current?.scrollIntoView({ behavior: "auto" });
  }, [chatHistory, messages]);

  return (
    <>
      <div className="chat">
        <div>
          {messages.map((message: any, index: number) => {
            return currentUser === message.username ? (
              <UserText id={index} message={message.message} />
            ) : (
              <TheirText id={uniqueId} message={message.message} />
            );
          })}
        </div>
        {chatHistory.map(
          (chat: any) =>
            currentUser === chat.username && (
              <UserText id={uniqueId} message={chat.message} />
            )
        )}
        <ChatInput />
        <div ref={endOfPageRef} />
      </div>
    </>
  );
}

export default Chat;
