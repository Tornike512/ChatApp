import { v4 as uuidv4 } from "uuid";
import Emojis from "./Emojis.json";
import rightArrow from "@app/assets/right-arrow.png";
import leftArrow from "@app/assets/left-arrow.png";

import "./Emoji.scss";

export function Emoji() {
  return (
    <div className="emoji-section">
      <form className="switcher">
        <input type="text" placeholder="Search..." />
        <figure>
          <img src={leftArrow} alt="Left Arrow" />
          <img src={rightArrow} alt="Right Arrow" />
        </figure>
      </form>
      <div className="emoji-container">
        {Emojis.map((emoji) => {
          return (
            <div className="emoji" key={uuidv4()}>
              <p className={`em em-${emoji}`}></p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Emoji;
