import { useRef, useEffect, useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "@app/Providers/GlobalProvider";
import { SendMessagesToChat } from "@app/Hooks/SendMessagesToChat";
import { TheirText } from "./TheirText";
import { UserText } from "./UserText";
import { ChatInput } from "./ChatInput";
import { ChatMessageType } from "@app/Types/Types";
import { Typing } from "./Typing";
import useSocket from "@app/Hooks/useSocket";

import "./Chat.scss";

export function Chat() {
  const [chatHistory, setChatHistory] = useState<ChatMessageType[]>([]);
  const { messages } = SendMessagesToChat();
  const { currentUser, typingUser, setTypingUser } = useContext(GlobalContext);

  const socket: any = useSocket();

  useEffect(() => {
    if (socket) {
      socket.on("message", ({ message, userImage, username }: any) => {
        setChatHistory((prev) => [...prev, { message, userImage, username }]);
      });

      socket.on("typing", (data: any) => {
        setTypingUser((prev) => {
          if (prev.some((user) => user.username === data.username)) {
            return prev;
          }
          return [...prev, { username: data.username, image: data.image }];
        });
      });

      socket.on("stop typing", (data: any) => {
        setTypingUser((prev) =>
          prev.filter((user) => user.username !== data.username)
        );
      });

      return () => {
        socket.off("typing");
        socket.off("stop typing");
      };
    }
  }, [socket]);

  const uniqueId = uuidv4();

  const endOfPageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    endOfPageRef.current?.scrollIntoView({ behavior: "auto" });
  }, [chatHistory, messages, typingUser]);

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
        {typingUser
          .filter((user) => currentUser !== user.username)
          .map((user) => (
            <Typing key={user.username} userImage={user.image} />
          ))}
        <ChatInput />
        <div ref={endOfPageRef} />
      </div>
    </>
  );
}

export default Chat;
