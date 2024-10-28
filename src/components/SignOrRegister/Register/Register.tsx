import { useContext, useState } from "react";
import { GlobalContext } from "@app/Providers/GlobalProvider";
import { CreateNewUser } from "@app/Hooks/CreateNewUser";
import { Validation } from "../Validation";
import { ReceiveAllUsers } from "@app/Hooks/ReceiveAllUsers";
import uploadImage from "@app/assets/upload-image.jpg";

import axios from "axios";

import "./Register.scss";

export function Register() {
  const [registerImage, setRegisterImage] = useState<string>("");
  const [showUploadedImage, setShowUploadedImage] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [showValidation, setShowValidation] = useState<boolean>(false);
  const [userExists, setUserExists] = useState<boolean>(false);

  const { allUsernames } = ReceiveAllUsers();

  const { setJoinClicked } = useContext(GlobalContext);

  const checkUserExistence = allUsernames.map((existingUser) => {
    return existingUser.username === username;
  });

  const handleJoinClick = () => {
    if (registerImage !== "" && username !== "") {
      setJoinClicked(true);
      CreateNewUser(username, registerImage as string);
    } else {
      setShowValidation(true);
      setUserExists(false);
    }

    if (username !== "" && checkUserExistence) {
      setUserExists(true);
      setShowValidation(false);
    }
  };

  const handleForm = (e: any) => {
    e.preventDefault();
  };

  const handleImageUpload = async (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "s2tpq2wh"); // Replace with your actual preset name

      try {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dq3jbbr1e/image/upload",
          formData
        );

        // Save the Cloudinary URL in state
        setRegisterImage(response.data.secure_url);
        setShowUploadedImage(true);
      } catch (error) {
        console.log("Error uploading image:", error);
      }
    }
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
      {userExists && <Validation validationMessage="The user already exists" />}
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
