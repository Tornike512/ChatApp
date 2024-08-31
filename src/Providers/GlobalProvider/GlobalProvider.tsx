import { PropsWithChildren, useState } from "react";
import { GlobalContext } from "./GlobalContext";

export function GlobalProvider({ children }: PropsWithChildren) {
  const [showEmojis, setShowEmojis] = useState<boolean>(false);

  return (
    <GlobalContext.Provider value={{ showEmojis, setShowEmojis }}>
      {children}
    </GlobalContext.Provider>
  );
}
