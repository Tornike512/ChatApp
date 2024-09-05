import importEmoji from "@app/assets/emoji-icon.png";
import importFile from "@app/assets/import-file-icon.svg";
import importImages from "@app/assets/import-image-icon.png";
import takePhoto from "@app/assets/take-image-icon.png";
import recordVoice from "@app/assets/record-voice-icon.png";
import sendIcon from "@app/assets/send-icon.png";

export function OtherIcons() {
  return (
    <>
      <img className="send-message" src={sendIcon} alt="Send Message" />
      <img className="import-file" src={importFile} alt="Import File" />
      <img className="import-image" src={importImages} alt="Import Images" />
      <img className="take-photo" src={takePhoto} alt="Take Photo" />
    </>
  );
}

export default OtherIcons;
