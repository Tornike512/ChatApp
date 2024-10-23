import { Emoji } from "../Emoji";
import { useContext, useState, useEffect } from "react";
import { GlobalContext } from "@app/Providers/GlobalProvider";
import { useWindowSize } from "@uidotdev/usehooks";
import OtherIcons from "./OtherIcons";

import importEmoji from "@app/assets/emoji-icon.png";
import recordVoice from "@app/assets/record-voice-icon.png";

import "./ChatInput.scss";

export function ChatInput() {
  const [chatInput, setChatInput] = useState<string>("");
  const { showEmojis, setShowEmojis, emoji, emojiClicked, currentUser } =
    useContext(GlobalContext);
  const [showIcons, setShowIcons] = useState<boolean>(true);
  const [showSendIcon, setShowSendIcon] = useState<boolean>(false);

  const { width } = useWindowSize();

  const handleShowEmojis = () => {
    if (showEmojis) {
      setShowEmojis(false);
    } else {
      setShowEmojis(true);
    }
  };

  const handleChatInput = (e: any) => {
    const newValue = e.target.value;
    setChatInput(newValue);
  };

  const handleChatForm = (e: any) => {
    e.preventDefault();
  };

  const handleShowIcons = () => {
    if (width !== null && width <= 1080) {
      setShowIcons(false);
    }
    setShowSendIcon(true);
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
            <OtherIcons
              currentUser={currentUser}
              sendMessage={chatInput}
              showSendIcon={showSendIcon}
            />
          )}
        </form>
        <img className="record-voice" src={recordVoice} alt="Record Voice" />
      </div>
    </>
  );
}

export default ChatInput;
