import "./SignIn.scss";

export function SignIn() {
  return (
    <div className="sign-in-container">
      <form className="sign-in">
        <input type="file" accept="image/*" />
      </form>
    </div>
  );
}

export default SignIn;
