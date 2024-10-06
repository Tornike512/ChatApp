import { Chat } from "../Chat";
import { useContext } from "react";
import { GlobalContext } from "@app/Providers/GlobalProvider";

import chatLogo from "@app/assets/cope.png";
import phoneCallImage from "@app/assets/phone-call-icon.svg";
import videoCallImage from "@app/assets/video-call-icon.svg";

import "./Header.scss";

export function Header() {
  const { showEmojis, setShowEmojis } = useContext(GlobalContext);

  const handleShowModal = () => {
    setShowEmojis(false);
  };

  return (
    <>
      {showEmojis && (
        <div onClick={handleShowModal} className="close-emojis"></div>
      )}
      <div className="header-chat-wrapper">
        <header className="header">
          <figure className="group">
            <img src={chatLogo} alt="Group Logo" />
            <div className="group-name">
              <figcaption>Kopers</figcaption>
              <figcaption>Online</figcaption>
            </div>
          </figure>
          <figure className="calls">
            <img src={videoCallImage} alt="Video Call Icon" />
            <img src={phoneCallImage} alt="Phone Call Icon" />
          </figure>
        </header>
        <Chat />
      </div>
    </>
  );
}

export default <header></header>;
