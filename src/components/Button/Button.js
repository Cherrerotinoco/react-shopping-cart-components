import React from "react";

function Button({ submitButton, children, disabled = false, ...props }) {
  return (
    <button disabled={disabled} className="btn btn-primary" type={submitButton ? "submit" : "button"} {...props}>
      {children}
    </button>
  );
}

export default Button;
