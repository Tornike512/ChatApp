import { Emoji } from "../Emoji";
import { useContext, useState, useEffect } from "react";
import { GlobalContext } from "@app/Providers/GlobalProvider";

import importEmoji from "@app/assets/emoji-icon.png";
import importFile from "@app/assets/import-file-icon.svg";
import importImages from "@app/assets/import-image-icon.png";
import takePhoto from "@app/assets/take-image-icon.png";
import recordVoice from "@app/assets/record-voice-icon.png";
import sendIcon from "@app/assets/send-icon.png";

import "./ChatInput.scss";

export function ChatInput() {
  const [chatInput, setChatInput] = useState<string>("");
  const { showEmojis, setShowEmojis, emoji, emojiClicked } =
    useContext(GlobalContext);
  const [showIcons, setShowIcons] = useState<boolean>(true);

  const handleShowEmojis = () => {
    if (showEmojis) {
      setShowEmojis(false);
    } else {
      setShowEmojis(true);
    }
  };

  const handleChatInput = (e: any) => {
    setChatInput(e.target.value);
  };

  const handleChatForm = (e: any) => {
    e.preventDefault();
  };

  const handleShowIcons = () => {
    setShowIcons(false);
  };

  const handleChatModal = () => {
    setShowIcons(true);
  };

  useEffect(() => {
    setChatInput((prevInput) => prevInput + emoji);
  }, [emojiClicked]);

  return (
    <>
      {!showIcons && (
        <div onClick={handleChatModal} className="chat-modal"></div>
      )}
      <div className="chat-input-wrapper">
        <Emoji showEmojis={showEmojis} />
        <form onSubmit={handleChatForm} className="chat-input">
          {showIcons && (
            <img
              className="open-emoji"
              onClick={handleShowEmojis}
              src={importEmoji}
              alt="Import Emoji"
            />
          )}
          <input
            value={chatInput}
            onClick={handleShowIcons}
            onChange={handleChatInput}
            placeholder="Message..."
            type="text"
          />
          {showIcons && (
            <>
              <img className="send-message" src={sendIcon} alt="Send Message" />
              <img className="import-file" src={importFile} alt="Import File" />
              <img
                className="import-image"
                src={importImages}
                alt="Import Images"
              />
              <img className="take-photo" src={takePhoto} alt="Take Photo" />
            </>
          )}
        </form>
        <img className="record-voice" src={recordVoice} alt="Record Voice" />
      </div>
    </>
  );
}

export default ChatInput;
