import { PasswordIcon, UserIcon } from "@/assets/svg/login.svg";
import AuthLayout from "@/component/AuthLayout";
import Button from "@/element/Button";
import Input from "@/element/Input";
import Link from "next/link";
import React from "react";
import style from "./page.module.css";

const Page = () => {
  return (
    <AuthLayout>
      <h3>Login Form</h3>
      <Input
        className={style.authInputStyle}
        id="login-email-input"
        placeholder="Email"
        icon={<UserIcon />}
        type="email"
      />
      <Input
        className={style.authInputStyle}
        id="login-password-input"
        placeholder="Password"
        icon={<PasswordIcon />}
        type="password"
      />
      <Link className={style.forPasswordLink} href={"/forgotpassword"}>
        Forgot Password?
      </Link>
      <Button>LOGIN</Button>
      <div className={style.signUpContainer}>
        <span className={style.forPasswordLink}>
          Don't have account?{" "}
          <Link className={style.signUpLink} href={"/signup"}>
            Signup Now
          </Link>
        </span>
      </div>
    </AuthLayout>
  );
};

export default Page;
