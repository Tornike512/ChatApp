import { useState, useEffect } from "react";
import { Register } from "./Register";
import { SignIn } from "./SignIn";

import "./SignOrRegister.scss";

export function SignOrRegister() {
  const [showRegister, setShowRegister] = useState<boolean>(false);
  const [showSignIn, setShowSignIn] = useState<boolean>(false);
  const [signOrRegister, setsignOrRegister] = useState<boolean>(false);

  const handleRegister = () => {
    setShowRegister(true);
    setsignOrRegister(false);
  };

  const handleSignIn = () => {
    setShowSignIn(true);
    setsignOrRegister(false);
  };

  useEffect(() => {
    setsignOrRegister(true);
  }, []);

  return (
    <>
      <div className="sign-or-register">
        {showRegister && <Register />}
        {showSignIn && <SignIn />}
        {signOrRegister && (
          <div className="sign-or-register-container">
            <button onClick={handleSignIn} className="sign-in-button">
              Sign in
            </button>
            <button onClick={handleRegister} className="register-button">
              Quick register
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default SignOrRegister;
