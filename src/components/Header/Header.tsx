import personImage from "@app/assets/person-image.png";
import phoneCallImage from "@app/assets/phone-call-icon.svg";
import videoCallImage from "@app/assets/video-call-icon.svg";

import "./Header.scss";

export function Header() {
  return (
    <header>
      <figure>
        <img src={personImage} alt="Group Logo" />
        <div>
          <figcaption>Kopers</figcaption>
          <figcaption>Online</figcaption>
        </div>
      </figure>

      <figure>
        <img src={videoCallImage} alt="Video Call Icon" />
        <img src={phoneCallImage} alt="Phone Call Icon" />
      </figure>
    </header>
  );
}

export default <header></header>;
