import { Register } from "./Register";
import { SignIn } from "./SignIn";

import "./SignOrRegister.scss";

export function SignOrRegister() {
  return (
    <>
      <div>
        <Register />
        {/* <SignIn /> */}
      </div>
    </>
  );
}

export default SignOrRegister;
