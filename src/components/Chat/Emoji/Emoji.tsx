import { uuid } from "uuidv4";
import "./Emoji.scss";

export function Emoji() {
  return (
    <div className="emoji-container">
      <i className="em em-accept"></i>
      <i className={`em em-accept`}></i>
    </div>
  );
}

export default Emoji;
