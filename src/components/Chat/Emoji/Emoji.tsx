import { useContext } from "react";
import { GlobalContext } from "@app/Providers/GlobalProvider";
import EmojiPicker from "emoji-picker-react";

import "./Emoji.scss";

export function Emoji({ showEmojis }: { showEmojis: boolean }) {
  const { setEmoji, setEmojiClicked, emojiClicked } = useContext(GlobalContext);

  const handleEmojiClick = (emojiObject: any) => {
    setEmoji(emojiObject.emoji);
    setEmojiClicked(emojiClicked + 1);
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
