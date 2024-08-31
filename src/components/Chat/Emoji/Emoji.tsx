import EmojiPicker from "emoji-picker-react";

import "./Emoji.scss";

export function Emoji({ showEmojis }: { showEmojis: boolean }) {
  return (
    <>
      <div
        style={{ display: showEmojis ? "block" : "none" }}
        className="emoji-container"
      >
        <EmojiPicker
          className="emoji"
          theme={"dark" as any}
          width={460}
          height={320}
        />
      </div>
    </>
  );
}

export default Emoji;
