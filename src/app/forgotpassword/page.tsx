"use client";
import { UserIcon } from "@/assets/svg/login.svg";
import AuthLayout from "@/component/AuthLayout";
import Button from "@/element/Button";
import Input from "@/element/Input";
import React from "react";
import loginStyle from ".././login/page.module.css";
import { useRouter } from "next/navigation";

const Page = () => {
  const { push } = useRouter();

  const onProceedClick = () => {
    console.log("clikec");

    push("/forgotpassword/boom");
  };

  return (
    <AuthLayout>
      <h3>Forgot Password?</h3>
      <Input
        className={loginStyle.authInputStyle}
        id="login-email-input"
        placeholder="Enter your Email"
        icon={<UserIcon />}
        type="email"
      />
      <Button onClick={onProceedClick}>Proceed</Button>
    </AuthLayout>
  );
};

export default Page;
