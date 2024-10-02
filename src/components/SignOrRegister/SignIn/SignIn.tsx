import { GlobalContext } from "@app/Providers/GlobalProvider";
import { useContext } from "react";

import "./SignIn.scss";

export function SignIn() {
  const { setJoinClicked } = useContext(GlobalContext);

  const handleSignIn = () => {
    setJoinClicked(true);
  };

  return (
    <div className="sign-in-container">
      <form className="sign-in">
        <h2>Sign in</h2>
        <input type="text" placeholder="Enter your name" />
        <button onClick={handleSignIn}>Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
