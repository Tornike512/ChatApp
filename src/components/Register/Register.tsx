import { useContext } from "react";
import { GlobalContext } from "@app/Providers/GlobalProvider";
import uploadImage from "@app/assets/upload-image.jpg";

import "./SignIn.scss";

export function Register() {
  const { setJoinClicked } = useContext(GlobalContext);

  const handleJoinClick = () => {
    setJoinClicked(true);
  };

  const handleForm = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="sign-in-container">
      <form onSubmit={handleForm} className="sign-in">
        <img src={uploadImage} alt="Upload Image" />
        <input className="upload-input" type="file" accept="image/*" />
        <input
          className="name-input"
          type="text"
          placeholder="Enter Your Name"
        />
        <button onClick={handleJoinClick} className="join">
          Join
        </button>
      </form>
    </div>
  );
}

export default Register;
