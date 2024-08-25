import { useRef, useEffect } from "react";

import { TheirText } from "./TheirText";
import { UserText } from "./UserText";
import { ChatInput } from "./ChatInput";

import "./Chat.scss";

export function Chat() {
  const endOfPageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    endOfPageRef.current?.scrollIntoView({ behavior: "auto" });
  }, []);

  return (
    <>
      <div className="chat">
        <TheirText />
        <UserText />
        <UserText />
        <UserText />
        <UserText />
        <UserText />
        <UserText />
        <UserText />
        <UserText />
        <ChatInput />
        <div ref={endOfPageRef} />
      </div>
    </>
  );
}

export default Chat;
