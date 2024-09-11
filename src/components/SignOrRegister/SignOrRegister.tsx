import { Register } from "./Register";
import { SignIn } from "./SignIn";

import "./SignOrRegister.scss";

export function SignOrRegister() {
  return (
    <>
      <div className="sign-or-register">
        {/* <Register /> */}
        {/* <SignIn /> */}
        <div className="sign-or-register-container">
          <button className="sign-in-button">Sign in</button>
          <button className="register-button">Quick register</button>
        </div>
      </div>
    </>
  );
}

export default SignOrRegister;
