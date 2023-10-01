import React from "react";
import style from "./style.module.css";

const Input = ({
  className,
  icon,
  placeholder,
  id,
  type,
}: {
  className?: string;
  icon?: React.ReactNode;
  placeholder?: string;
  id?: string;
  type?: string;
}) => {
  const isIcon = !!icon;

  return (
    <div className={`${style.inputContainer} ${className ?? ""}`}>
      <input
        id={id}
        className={`${style.inputStyle} ${
          isIcon ? "" : style.inputStyleNoIcon
        }`}
        placeholder={placeholder}
        type={type}
      />
      {isIcon && (
        <label htmlFor={id} className={style.inputIconContainer}>
          {icon}
        </label>
      )}
    </div>
  );
};

export default Input;
