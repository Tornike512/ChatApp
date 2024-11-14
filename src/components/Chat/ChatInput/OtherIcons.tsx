import { useContext, useEffect, useRef } from "react";
import { GlobalContext } from "@app/Providers/GlobalProvider";
import { io } from "socket.io-client";

import importFile from "@app/assets/import-file-icon.svg";
import importImages from "@app/assets/import-image-icon.png";
import takePhoto from "@app/assets/take-image-icon.png";
import sendIcon from "@app/assets/send-icon.png";

interface TSendIcon {
  showSendIcon: boolean;
  sendMessage: string;
  currentUser: string;
  userImage: any;
  clearInput: () => void;
}

export function OtherIcons({
  showSendIcon,
  sendMessage,
  currentUser,
  userImage,
  clearInput,
}: TSendIcon) {
  const socketRef = useRef<any>(null);
  const { setTypingUser } = useContext(GlobalContext);

  useEffect(() => {
    socketRef.current = io("https://new-peuc.onrender.com");
    setTypingUser([]);

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  const userImageOnly = userImage.map((image: any) => {
    return image.userImage;
  });

  const handleSendIcon = () => {
    if (sendMessage !== "") {
      socketRef.current.emit("message", {
        message: sendMessage,
        username: currentUser,
        userImage: userImageOnly.toString(),
      });
      setTypingUser([]);
    }
    clearInput();
  };

  return (
    <>
      <img
        onClick={handleSendIcon}
        style={showSendIcon ? { display: "flex" } : {}}
        className="send-message"
        src={sendIcon}
        alt="Send Message"
      />
      <img className="import-file" src={importFile} alt="Import File" />
      <img className="import-image" src={importImages} alt="Import Images" />
      <img className="take-photo" src={takePhoto} alt="Take Photo" />
    </>
  );
}

export default OtherIcons;
