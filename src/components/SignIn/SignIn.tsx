import uploadImage from "@app/assets/upload-image.jpg";

import "./SignIn.scss";

export function SignIn() {
  return (
    <div className="sign-in-container">
      <form className="sign-in">
        <img src={uploadImage} alt="Upload Image" />
        <input className="upload-input" type="file" accept="image/*" />
        <input
          className="name-input"
          type="text"
          placeholder="Enter Your Name"
        />
        <button className="join">Join</button>
      </form>
    </div>
  );
}

export default SignIn;
