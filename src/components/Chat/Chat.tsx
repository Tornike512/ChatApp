import { useRef, useEffect, useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "@app/Providers/GlobalProvider";
import { SendMessagesToChat } from "@app/Hooks/SendMessagesToChat";
import { io } from "socket.io-client";
import { TheirText } from "./TheirText";
import { UserText } from "./UserText";
import { ChatInput } from "./ChatInput";
import { ChatMessageType } from "@app/Types/Types";
import { Typing } from "../Typing";

import "./Chat.scss";

export function Chat() {
  const [chatHistory, setChatHistory] = useState<ChatMessageType[]>([]);
  const { messages } = SendMessagesToChat();
  const { currentUser, typingUser } = useContext(GlobalContext);

  useEffect(() => {
    const socket = io("https://new-peuc.onrender.com");

    socket.on("message", ({ message, userImage, username }) => {
      setChatHistory((prev) => [...prev, { message, userImage, username }]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const uniqueId = uuidv4();

  const endOfPageRef = useRef<HTMLDivElement | null>(null);

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
              <TheirText
                userImage={message.userImage}
                id={uniqueId}
                message={message.message}
              />
            );
          })}
        </div>
        {chatHistory.map((chat: any) =>
          currentUser === chat.username ? (
            <UserText id={uniqueId} message={chat.message} />
          ) : (
            <TheirText
              userImage={chat.userImage}
              id={uniqueId}
              message={chat.message}
            />
          )
        )}
        {typingUser.isTyping && <Typing />}
        <ChatInput />
        <div ref={endOfPageRef} />
      </div>
    </>
  );
}

export default Chat;
