import LoginForm from "../../components/LoginForm";
import SignUpForm from "../../components/SignUpForm";

export default function AuthPage(setUser) {
  return (
    <>
      <LoginForm />
      <SignUpForm />
    </>
  );
}
