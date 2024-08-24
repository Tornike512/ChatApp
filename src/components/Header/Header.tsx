import { Chat } from "../Chat";

import personImage from "@app/assets/person-image.png";
import phoneCallImage from "@app/assets/phone-call-icon.svg";
import videoCallImage from "@app/assets/video-call-icon.svg";

import "./Header.scss";

export function Header() {
  return (
    <div className="header-chat-wrapper">
      <header className="header">
        <figure className="group">
          <img src={personImage} alt="Group Logo" />
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
  );
}

export default <header></header>;
