import { Emoji } from "../Emoji";
import { useContext, useState, useEffect } from "react";
import { ReceiveAllUsers } from "@app/Hooks/ReceiveAllUsers";
import { GlobalContext } from "@app/Providers/GlobalProvider";
import { useWindowSize } from "@uidotdev/usehooks";
import useSocket from "@app/Hooks/useSocket";
import OtherIcons from "./OtherIcons";

import importEmoji from "@app/assets/emoji-icon.png";
import recordVoice from "@app/assets/record-voice-icon.png";

import "./ChatInput.scss";

export function ChatInput() {
  const [chatInput, setChatInput] = useState<string>("");
  const {
    showEmojis,
    setShowEmojis,
    emoji,
    emojiClicked,
    currentUser,
    setTypingUser,
    typingUser,
  } = useContext(GlobalContext);
  const [showIcons, setShowIcons] = useState<boolean>(true);
  const [showSendIcon, setShowSendIcon] = useState<boolean>(false);
  const [checkUserTyping, setCheckUserTyping] = useState<boolean>(false);

  const { allUsernames } = ReceiveAllUsers();

  const socket: any = useSocket();

  const usersImages = allUsernames.filter((user) => {
    if (currentUser === user.username) {
      return user.userImage;
    }
  });

  const currentUserImage = usersImages.map((current) => {
    return current.userImage;
  });

  const { width } = useWindowSize();

  useEffect(() => {
    if (!socket) {
      return;
    }

    if (checkUserTyping) {
      socket.emit("typing", {
        userImage: currentUserImage,
        currentUsername: currentUser,
      });
    } else {
      setTypingUser((prev) =>
        prev.filter((user) => user.username !== currentUser)
      );
    }
  }, [checkUserTyping]);

  const handleChatInput = (e: any) => {
    const inputValue = e.target.value;
    setChatInput(inputValue);
    if (inputValue === "") {
      setCheckUserTyping(false);
    } else {
      setCheckUserTyping(true);
    }
  };

  console.log(typingUser, "typinguser");

  const handleShowEmojis = () => {
    if (showEmojis) {
      setShowEmojis(false);
    } else {
      setShowEmojis(true);
    }
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

  const clearChatInput = () => {
    setChatInput("");
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
              userImage={usersImages}
              currentUser={currentUser}
              sendMessage={chatInput}
              showSendIcon={showSendIcon}
              clearInput={clearChatInput}
            />
          )}
        </form>
        <img className="record-voice" src={recordVoice} alt="Record Voice" />
      </div>
    </>
  );
}

export default ChatInput;
