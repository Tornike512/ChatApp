import { createContext } from "react";

interface TGlobalContext {
  showEmojis: boolean;
  setShowEmojis: React.Dispatch<React.SetStateAction<boolean>>;
  emoji: string;
  setEmoji: React.Dispatch<React.SetStateAction<string>>;
  emojiClicked: number;
  setEmojiClicked: React.Dispatch<React.SetStateAction<number>>;
}

export const GlobalContext = createContext<TGlobalContext>({
  showEmojis: false,
  setShowEmojis: () => {},
  emoji: "",
  setEmoji: () => {},
  emojiClicked: 0,
  setEmojiClicked: () => {},
});
