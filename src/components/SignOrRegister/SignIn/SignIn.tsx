import { GlobalContext } from "@app/Providers/GlobalProvider";
import { ReceiveAllUsers } from "@app/Hooks/ReceiveAllUsers";
import { useContext, useState } from "react";

import "./SignIn.scss";

export function SignIn() {
  const [username, setUsername] = useState<string>("");
  const [nameValidation, setNameValidation] = useState<boolean>(false);

  const { setJoinClicked } = useContext(GlobalContext);

  const { allUsernames } = ReceiveAllUsers();

  const checkUserExistence = allUsernames.filter((existingUser) => {
    return existingUser.username === username;
  });

  const handleSignIn = () => {
    if (checkUserExistence.length !== 0 && username !== "") {
      setJoinClicked(true);
      setNameValidation(false);
    } else if (checkUserExistence.length === 0 && username !== "") {
      setNameValidation(true);
      setJoinClicked(false);
    }
  };

  const handleForm = (e: any) => {
    e.preventDefault();
  };

  const handleUsernameField = (e: any) => {
    setUsername(e.target.value);
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
        <button type="submit" onClick={handleSignIn}>
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignIn;
