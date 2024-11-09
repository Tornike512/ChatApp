import "./Typing.scss";

export function Typing({ userImage }: { userImage: string }) {
  return (
    <div className="typing-container">
      <img className="user-typing" src={userImage} alt="User Image" />
      <div className="typing">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Typing;
