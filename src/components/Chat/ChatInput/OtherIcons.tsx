import { useContext, useEffect } from "react";
import { GlobalContext } from "@app/Providers/GlobalProvider";
import { io } from "socket.io-client";

import importFile from "@app/assets/import-file-icon.svg";
import importImages from "@app/assets/import-image-icon.png";
import takePhoto from "@app/assets/take-image-icon.png";
import sendIcon from "@app/assets/send-icon.png";

interface TSendIcon {
  showSendIcon: boolean;
  sendMessage: string;
}

export function OtherIcons({ showSendIcon, sendMessage }: TSendIcon) {
  const { setChatMessage, chatMessage } = useContext(GlobalContext);

  const socket = io("http://localhost:5173");

  useEffect(() => {
    return () => {
      socket.disconnect();
    };
  }, [socket]);

  const handleSendIcon = () => {
    setChatMessage(sendMessage);
    socket.emit("message", { message: chatMessage });
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
