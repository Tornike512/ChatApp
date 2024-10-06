import { useContext, useState } from "react";
import { GlobalContext } from "@app/Providers/GlobalProvider";
import { CreateNewUser } from "@app/Hooks/CreateNewUser";
import { Validation } from "../Validation";
import uploadImage from "@app/assets/upload-image.jpg";

import "./Register.scss";

export function Register() {
  const [registerImage, setRegisterImage] = useState<string>("");
  const [showUploadedImage, setShowUploadedImage] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [showValidation, setShowValidation] = useState<boolean>(false);

  const { setJoinClicked } = useContext(GlobalContext);

  const handleJoinClick = () => {
    if (registerImage !== "" && username !== "") {
      setJoinClicked(true);
      CreateNewUser(username, registerImage as string);
      localStorage.setItem("user", username);
    } else {
      setShowValidation(true);
    }
  };

  const handleForm = (e: any) => {
    e.preventDefault();
  };

  const handleImageUpload = (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageUrl = reader.result?.toString() || "";
        setRegisterImage(imageUrl);
      };

      reader.readAsDataURL(file);
    }

    setShowUploadedImage(true);
  };

  const handleUsername = (e: any) => {
    setUsername(e.target.value);
  };

  return (
    <form action="/submit" onSubmit={handleForm} className="register">
      <img src={uploadImage} alt="Upload Image" />
      {showValidation && (
        <Validation
          validationMessage={
            "Please enter username and upload image to register"
          }
        />
      )}
      <input
        onChange={handleImageUpload}
        className="upload-input"
        type="file"
        accept="image/*"
      />
      <input
        onChange={handleUsername}
        className="name-input"
        type="text"
        placeholder="Enter Your Name"
      />
      {showUploadedImage && <img src={registerImage} alt="Uploaded Image" />}
      <button onClick={handleJoinClick} className="join">
        Join
      </button>
    </form>
  );
}

export default Register;
