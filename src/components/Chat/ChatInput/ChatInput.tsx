import importEmoji from "@app/assets/emoji-icon.png";
import importFile from "@app/assets/import-file-icon.svg";
import importImages from "@app/assets/import-image-icon.png";
import takePhoto from "@app/assets/take-image-icon.png";
import recordVoice from "@app/assets/record-voice-icon.png";

import "./ChatInput.scss";

export function ChatInput() {
  return (
    <div className="chat-input-wrapper">
      <form className="chat-input">
        <img src={importEmoji} alt="Import Emoji" />
        <input placeholder="Message..." type="text" />
        <img className="import-file" src={importFile} alt="Import File" />
        <img className="import-image" src={importImages} alt="Import Images" />
        <img className="take-photo" src={takePhoto} alt="Take Photo" />
      </form>

      <img className="record-voice" src={recordVoice} alt="Record Voice" />
    </div>
  );
}

export default ChatInput;
