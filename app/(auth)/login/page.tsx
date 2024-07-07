import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faPerson, faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import CardWrapper from "@/components/auth/card-wrapper";
import { LoginForm } from "@/components/auth/login-form";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const LoginPage = () => {
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <CardWrapper
        label="Welcome back🚀"
        subText="Login to your account"
        backButtonLabel="Don't have an account yet?"
        backButtonLink="Register here."
        backButtonHref="/register"
      >
        <LoginForm />
      </CardWrapper>
    </main>
  );
};

export default LoginPage;
