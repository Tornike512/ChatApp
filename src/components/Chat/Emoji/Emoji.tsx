import EmojiPicker from "emoji-picker-react";

import "./Emoji.scss";

export function Emoji() {
  return (
    <div className="emoji-section">
      <EmojiPicker theme={"dark" as any} width={460} height={320} />
    </div>
  );
}

export default Emoji;
