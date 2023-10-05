import { PasswordIcon, UserIcon } from "@/assets/svg/login.svg";
import AuthLayout from "@/component/AuthLayout";
import Button from "@/element/Button";
import Input from "@/element/Input";
import Link from "next/link";
import React from "react";
import loginStyle from ".././login/page.module.css";

const Page = () => {
  return (
    <AuthLayout>
      <h3>Sign Up</h3>
      <Input
        className={loginStyle.authInputStyle}
        id="signup-first-name-input"
        placeholder="Enter Your First Name"
      />
      <Input
        className={loginStyle.authInputStyle}
        id="signup-last-name-input"
        placeholder="Enter Your Last Name"
      />
      <Input
        className={loginStyle.authInputStyle}
        id="signup-email-input"
        placeholder="Enter your Email"
        type="email"
      />
      <Input
        className={loginStyle.authInputStyle}
        id="signup-password-input"
        placeholder="Enter Password you want to keep"
      />
      <Input
        className={loginStyle.authInputStyle}
        id="signup-re-password-input"
        placeholder="Re-Enter Password"
      />
      <Button>Register</Button>
      <div className={loginStyle.signUpContainer}>
        <span className={loginStyle.forPasswordLink}>
          Already have an account?{" "}
          <Link className={loginStyle.signUpLink} href={"/login"}>
            Click here to Login
          </Link>
        </span>
      </div>
    </AuthLayout>
  );
};

export default Page;
