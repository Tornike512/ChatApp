import personImage from "@app/assets/person-image.png";

import "./TheirText.scss";

export function TheirText() {
  return (
    <figure className="their-text">
      <img src={personImage} alt="Other User" />
      <figcaption>Hello I am looking for</figcaption>
    </figure>
  );
}

export default TheirText;
