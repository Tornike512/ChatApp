import { useState } from "react";

import EmojiPicker from "emoji-picker-react";

import "./Emoji.scss";

export function Emoji() {
  const [showEmojis, setShowEmojis] = useState<boolean>(false);

  return (
    <div className="emoji-container">
      <EmojiPicker
        className="emoji"
        theme={"dark" as any}
        width={460}
        height={320}
      />
    </div>
  );
}

export default Emoji;
