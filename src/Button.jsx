import "mfe-common-resources/scss/main.scss";
import React from "react";

const Button = ({ children, variant, size, fullWidth, className = "", ...props }) => {
  // Build CSS classes based on props
  let buttonClasses = ["btn"];

  if (variant) {
    buttonClasses.push(`btn--${variant}`);
  }

  if (size) {
    buttonClasses.push(`btn--${size}`);
  }

  if (fullWidth) {
    buttonClasses.push("btn--full-width");
  }

  if (className) {
    buttonClasses.push(className);
  }

  return (
    <button className={buttonClasses.join(" ")} {...props}>
      {children}
    </button>
  );
};

export default Button;
