import React from "react";
import "../css/Button.scss";
const Button = (props) => {
  return (
    <input
      className={props.className}
      type="button"
      value={props.lable}
      onClick={props.handleClick}
    ></input>
  );
};

export default Button;
