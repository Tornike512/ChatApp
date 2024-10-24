import "./UserText.scss";

export function UserText({ message, id }: { message: string; id: any }) {
  return (
    <div key={id} className="user-text">
      <p>{message}</p>
    </div>
  );
}

export default UserText;
