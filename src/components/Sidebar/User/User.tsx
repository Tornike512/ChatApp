import personImage from "@app/assets/person-image.png";

import "./User.scss";

export function User() {
  return (
    <figure className="user">
      <img src={personImage} alt="Person Image" />
      <div className="user-name">
        <figcaption>Figma Teams</figcaption>
        <figcaption>Typing...</figcaption>
      </div>
      <div className="online-dot"></div>
    </figure>
  );
}

export default User;
