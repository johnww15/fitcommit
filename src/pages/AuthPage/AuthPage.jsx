import { useState } from "react";
import NavBar from "../../components/NavBar";
import LoginForm from "../../components/LoginForm";
import SignUpForm from "../../components/SignUpForm";
import TopNavBar from "../../components/TopNavBar";

export default function AuthPage(setUser) {
  const [isNewAccount, setIsNewAccount] = useState(false);

  return (
    <>
      <TopNavBar />
      {isNewAccount ? (
        <SignUpForm setIsNewAccount={setIsNewAccount} />
      ) : (
        <LoginForm setIsNewAccount={setIsNewAccount} />
      )}
    </>
  );
}
