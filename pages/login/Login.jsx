import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

import logoB from "../../Media/Img/logoB.png";
import "./login.scss";
import { CV } from "../../cv/cv";
import Profiles from "../Profiles/Profiles";
import { Link, useNavigate, NavLink } from "react-router-dom";

const USER_REGEX = /^[A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z0-9]){8,15}[^'\s]/;
const apiToken = "iKBHPqlolcxiVgZrAcvK";

const Login = ({ onSubmit }) => {
  const userRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();

  /* Variables de accion para nombre */
  const [username, setUsername] = useState("");
  const [validName, setValidName] = useState(false);
  const [validUser, setValidUser] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  /* Variable de accion para contraseña */
  const [password, setPassword] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const sessionId = "sessionId";

  /* Mensaje de Error o Exito */
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  /* Validacion de usuario */
  useEffect(() => {
    const result = USER_REGEX.test(username);
    setValidName(result);
  }, [username]);

  /* Validacion de contraseña */
  useEffect(() => {
    const result = PWD_REGEX.test(password);
    setValidPwd(result);
  }, [password]);

    useEffect(() => {
    const result = localStorage.getItem(sessionId)
    setValidUser(result);
  }, [validUser]);



  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = USER_REGEX.test(username);
    const v2 = PWD_REGEX.test(password);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    CV.call(
      "clientLogin",
      {
        apiToken: apiToken,
        clientId: username,
        pwd: password,
        udid: username,
      },
      (result) => {
        if (result["success"]) {
          const udid = result["answer"];
          localStorage.setItem(sessionId, udid);
          if (localStorage.getItem(sessionId) === "") {
            alert("failed to fetch result" + result["errorMessage"]);
           
          }
        }
       
      }
    );
    if(!validUser){
console.log("hola")
    }
    }

  return (
    <>
      <div className="general">
        <section>
          <div className="top">
            <img className="logoB" alt="logo bromteck" src={logoB} />
            <h1> Sign In </h1>
          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">
              Username:
              <FontAwesomeIcon
                icon={faCheck}
                className={validName ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validName || !username ? "hide" : "invalid"}
              />
            </label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            />
            <p
              id="uidnote"
              className={userFocus && !validName ? "instructions" : "offscreen"}
            >
              <FontAwesomeIcon icon={faCheck} />
              4 to 24 characters.
              <br />
              Must begin with a letter.
              <br />
              Letters, numbers, underscores, hyphens allowed.
            </p>
            <label htmlFor="password">
              Password:
              <FontAwesomeIcon
                icon={faCheck}
                className={validPwd ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validPwd || !password ? "hide" : "invalid"}
              />
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />
            <p
              id="pwdnote"
              className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
            >
              <FontAwesomeIcon icon={faCheck} />
              8 a 25 carasteres
              <br />
              Must include uppercase and lowercase letters, a number and a
              special character.
              <br />
            </p>
            <button type="submit"  >
              Sign In
            </button>
          </form>
          {/*
          <div className="singup">
              <span> You do not have an account? </span>
              <button className="bsing"> Sign Up </button>
            </div>*/}
        </section>
      </div>
    </>
  );
};
export default Login;
