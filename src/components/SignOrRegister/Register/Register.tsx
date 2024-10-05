import { useContext, useState } from "react";
import { GlobalContext } from "@app/Providers/GlobalProvider";
import uploadImage from "@app/assets/upload-image.jpg";

import "./Register.scss";

export function Register() {
  const [registerImage, setRegisterImage] = useState<string>();
  const [showUploadedImage, setShowUploadedImage] = useState<boolean>(false);

  const { setJoinClicked } = useContext(GlobalContext);

  const handleJoinClick = () => {
    setJoinClicked(true);
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

  console.log(registerImage);

  return (
    <form onSubmit={handleForm} className="register">
      <img src={uploadImage} alt="Upload Image" />
      <input
        onChange={handleImageUpload}
        className="upload-input"
        type="file"
        accept="image/*"
      />
      <input className="name-input" type="text" placeholder="Enter Your Name" />
      {showUploadedImage && <img src={registerImage} alt="Uploaded Image" />}
      <button onClick={handleJoinClick} className="join">
        Join
      </button>
    </form>
  );
}

export default Register;
