import React, { useRef, useState, Fragment, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";

import classes from "./Auth.module.css";
import logo from "../../assets/logo.png";
import AuthContext from "../store/auth-context";

const isEmpty = (value) => value.trim() === "";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [formIsValid, setFormIsValid] = useState({
    email: true,
    password: true,
  });

  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const SubmitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const enteredEmailIsValid = !isEmpty(enteredEmail);
    const enteredPasswordIsValid = !isEmpty(enteredPassword);

    setFormIsValid({
      email: enteredEmailIsValid,
      password: enteredPasswordIsValid,
    });

    if (!formIsValid) {
      return;
    }

    setIsLoading(true);
    let url;

    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBP-DcNYHdvQwJBhWLUXTgv7rANjdtWT00";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key= AIzaSyBP-DcNYHdvQwJBhWLUXTgv7rANjdtWT00";
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Email or Password invalid!";

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);
        navigate("/Pocetna");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const emailInputClasses = `${classes.control} ${
    formIsValid.email ? "" : classes.invalid
  }`;

  const passwordInputClasses = `${classes.control} ${
    formIsValid.password ? "" : classes.invalid
  }`;

  return (
    <Fragment>
      <div className={classes.nav}>
        <img src={logo} />
        <Link to="/">Logout</Link>
      </div>
      <hr></hr>
      <div className={classes.center}>
        <h2>
          Welcome back!<br></br>Joining Netflix is easy.
        </h2>
        <p>Enter your password and you'll be watching in no time </p>
        <form onSubmit={SubmitHandler}>
          <div className={emailInputClasses}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              ref={emailInputRef}
              placeholder="example@gmail.com"
            ></input>
          </div>
          <div className={passwordInputClasses}>
            <label htmlFor="email">Password</label>
            <input
              type="password"
              id="password"
              minLength="7"
              placeholder="*******"
              ref={passwordInputRef}
            ></input>
            {!formIsValid.password && (
              <p className="alt">Please fill inputs!</p>
            )}
          </div>
          <div className={classes.actions}>
            {!isLoading && <button>{isLogin ? "Login" : "Register"}</button>}
            {isLoading && <p>...</p>}
            <button
              type="button"
              className={classes.toggle}
              onClick={switchAuthModeHandler}
            >
              {isLogin ? "Create Account" : "Login with existing account"}
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Auth;
