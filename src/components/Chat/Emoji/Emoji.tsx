import EmojiPicker from "emoji-picker-react";

import "./Emoji.scss";
import { useContext, useState } from "react";
import { GlobalContext } from "@app/Providers/GlobalProvider";

export function Emoji({ showEmojis }: { showEmojis: boolean }) {
  const { setEmoji } = useContext(GlobalContext);
  const handleEmojiClick = (emojiObject: any) => {
    setEmoji(emojiObject.emoji);
  };

  return (
    <>
      <div
        style={{ display: showEmojis ? "block" : "none" }}
        className="emoji-container"
      >
        <EmojiPicker
          className="emoji"
          onEmojiClick={handleEmojiClick}
          theme={"dark" as any}
          width={460}
          height={320}
        />
      </div>
    </>
  );
}

export default Emoji;
