import { createContext } from "react";

interface TGlobalContext {
  showEmojis: boolean;
  setShowEmojis: React.Dispatch<React.SetStateAction<boolean>>;
  emoji: string;
  setEmoji: React.Dispatch<React.SetStateAction<string>>;
}

export const GlobalContext = createContext<TGlobalContext>({
  showEmojis: false,
  setShowEmojis: () => {},
  emoji: "",
  setEmoji: () => {},
});
