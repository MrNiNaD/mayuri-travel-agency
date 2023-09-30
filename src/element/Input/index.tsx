import React from "react";
import style from "./style.module.css";

const Input = ({
  className,
  icon,
  placeholder,
  id,
}: {
  className?: string;
  icon?: React.ReactNode;
  placeholder?: string;
  id?: string;
}) => {
  return (
    <div className={`${style.inputContainer} ${className ?? ""}`}>
      <input id={id} className={style.inputStyle} placeholder={placeholder} />
      <label htmlFor={id} className={style.inputIconContainer}>
        {icon}
      </label>
    </div>
  );
};

export default Input;
