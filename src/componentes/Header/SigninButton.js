import React from "react";
import { Link } from "react-router-dom";
import "./HeaderStyles.css";

function SigninButton({ children, ...restProps }) {
  return (
    <div>
      <Link to="/profile">
        <a className="signin-button" {...restProps}>
          {children}
        </a>
      </Link>
    </div>
  );
}

export default SigninButton;
