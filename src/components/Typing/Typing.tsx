import personImage from "@app/assets/person-image.png";

import "./Typing.scss";

export function Typing({ userImage }: { userImage: string }) {
  return (
    <div className="typing-container">
      <img className="user-typing" src={personImage} alt="User Image" />
      <div className="typing">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Typing;
