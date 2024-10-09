import { GlobalContext } from "@app/Providers/GlobalProvider";
import { ReceiveAllUsers } from "@app/Hooks/ReceiveAllUsers";
import { useContext, useState } from "react";

import "./SignIn.scss";

export function SignIn() {
  const [username, setUsername] = useState<string>("");
  const [nameValidation, setNameValidation] = useState<boolean>(false);

  const { setJoinClicked } = useContext(GlobalContext);

  const { allUsernames } = ReceiveAllUsers();

  const handleSignIn = () => {
    setJoinClicked(true);
  };

  const handleUsernameField = (e: any) => {
    setUsername(e.target.value);
  };

  return (
    <div className="sign-in-container">
      <form className="sign-in">
        <h2>Sign in</h2>
        <p className="validate-existence">Name you entered isn't registered</p>
        <input
          onChange={handleUsernameField}
          type="text"
          placeholder="Enter your name"
        />
        <button onClick={handleSignIn}>Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
