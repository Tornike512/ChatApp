import { createContext } from "react";

interface TypingUserType {
  isTyping: boolean;
  image: string;
  username: string;
}

interface TGlobalContext {
  showEmojis: boolean;
  setShowEmojis: React.Dispatch<React.SetStateAction<boolean>>;
  emoji: string;
  setEmoji: React.Dispatch<React.SetStateAction<string>>;
  emojiClicked: number;
  setEmojiClicked: React.Dispatch<React.SetStateAction<number>>;
  joinClicked: boolean;
  setJoinClicked: React.Dispatch<React.SetStateAction<boolean>>;
  currentUser: string;
  setCurrentUser: React.Dispatch<React.SetStateAction<string>>;
  chatMessage: string;
  setChatMessage: React.Dispatch<React.SetStateAction<string>>;
  typingUser: TypingUserType;
  setTypingUser: React.Dispatch<React.SetStateAction<TypingUserType>>;
}

export const GlobalContext = createContext<TGlobalContext>({
  showEmojis: false,
  setShowEmojis: () => {},
  emoji: "",
  setEmoji: () => {},
  emojiClicked: 0,
  setEmojiClicked: () => {},
  joinClicked: false,
  setJoinClicked: () => {},
  currentUser: "",
  setCurrentUser: () => {},
  chatMessage: "",
  setChatMessage: () => {},
  typingUser: {
    isTyping: false,
    image: "",
    username: "",
  },
  setTypingUser: () => {},
});
