import "./SignIn.scss";

export function SignIn() {
  return (
    <div className="sign-in-container">
      <form className="sign-in">
        <input type="text" className="Enter your name" />
        <button>Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
