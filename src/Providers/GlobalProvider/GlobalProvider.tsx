import { PropsWithChildren, useState } from "react";
import { GlobalContext } from "./GlobalContext";

export function GlobalProvider({ children }: PropsWithChildren) {
  const [showEmojis, setShowEmojis] = useState<boolean>(false);
  const [emoji, setEmoji] = useState<string>("");
  const [emojiClicked, setEmojiClicked] = useState<number>(0);
  const [joinClicked, setJoinClicked] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<string>("");
  const [chatMessage, setChatMessage] = useState<string>("");
  const [typingUser, setTypingUser] = useState([
    {
      image: "",
      username: "",
    },
  ]);

  return (
    <GlobalContext.Provider
      value={{
        showEmojis,
        setShowEmojis,
        emoji,
        setEmoji,
        emojiClicked,
        setEmojiClicked,
        joinClicked,
        setJoinClicked,
        currentUser,
        setCurrentUser,
        chatMessage,
        setChatMessage,
        typingUser,
        setTypingUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
