import { GlobalContext } from "@app/Providers/GlobalProvider";
import { ReceiveAllUsers } from "@app/Hooks/ReceiveAllUsers";
import { useContext, useState } from "react";

import "./SignIn.scss";

export function SignIn() {
  const [username, setUsername] = useState<string>("");
  const [nameValidation, setNameValidation] = useState<boolean>(false);

  const { setJoinClicked } = useContext(GlobalContext);

  const { allUsernames } = ReceiveAllUsers();

  const checkUserExistence = allUsernames.map((existingUser) => {
    return existingUser.username === username;
  });

  console.log(checkUserExistence);

  const handleSignIn = () => {
    if (!checkUserExistence && username !== "") {
      setJoinClicked(false);
      setNameValidation(true);
    }
  };

  const handleUsernameField = (e: any) => {
    setUsername(e.target.value);
  };

  const handleForm = (e: any) => {
    e.prevenDefault();
  };

  return (
    <div className="sign-in-container">
      <form action="/submit" onSubmit={handleForm} className="sign-in">
        <h2>Sign in</h2>
        {nameValidation && (
          <p className="validate-existence">
            Name you entered isn't registered
          </p>
        )}
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
