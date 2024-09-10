import "./SignIn.scss";

export function SignIn() {
  return (
    <div className="sign-in-container">
      <form className="sign-in">
        <h2>Sign in</h2>
        <input type="text" placeholder="Enter your name" />
        <button>Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
