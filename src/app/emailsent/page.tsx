import AuthLayout from "@/component/AuthLayout";
import React from "react";
import loginStyle from ".././login/page.module.css";

const Page = () => {
  return (
    <AuthLayout>
      <h3>Thank You</h3>
      <span className={loginStyle.forPasswordLink}>
        Please check your E-mail. We have sent a link on e-mail, which will help
        you change your password.
      </span>
    </AuthLayout>
  );
};

export default Page;
