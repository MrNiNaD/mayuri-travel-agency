import React from "react";
import style from "./style.module.css";

const Button = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button className={style.buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
