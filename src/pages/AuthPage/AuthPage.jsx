import { useState } from "react";
import NavBar from "../../components/NavBar";
import LoginForm from "../../components/LoginForm";
import SignUpForm from "../../components/SignUpForm";

export default function AuthPage(setUser) {
  const [isNewAccount, setIsNewAccount] = useState(false);

  return (
    <>
      <NavBar />
      {isNewAccount ? (
        <SignUpForm setIsNewAccount={setIsNewAccount} />
      ) : (
        <LoginForm setIsNewAccount={setIsNewAccount} />
      )}
    </>
  );
}
