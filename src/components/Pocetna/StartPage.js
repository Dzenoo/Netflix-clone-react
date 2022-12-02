import React, { useRef, useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";

import classes from "./StartPage.module.css";

import logo from "../../assets/logo.png";
import AuthContext from "../store/auth-context";

const StartPage = () => {
  const [alertMsg, setAlertMsg] = useState(false);
  const authCtx = useContext(AuthContext);

  const inputRef = useRef();
  const navigate = useNavigate();

  const clickHandler = (event) => {
    event.preventDefault();

    let inputValue = inputRef.current.value;

    if (inputValue === "") {
      setAlertMsg(true);
    } else {
      navigate("/auth");
    }
  };

  return (
    <section className={classes.hero}>
      <div className={classes.nav}>
        <img src={logo} />
        <div className={classes.actions}>
          <select data-placeholder="Choose a Language...">
            <option value="English">English</option>
            <option value="Bosnian">Bosnian</option>
          </select>
          <a
            href="/auth"
            onClick={!authCtx.isLoggedIn ? authCtx.login : authCtx.logout}
          >
            {authCtx.isLoggedIn ? "Logout" : "Login"}
          </a>
        </div>
      </div>
      <div className={classes.center}>
        <h1>Unlimited movies,TV shows, and more.</h1>
        <p className="ac">Watch anywhere. Cancel anytime.</p>
        {!authCtx.isLoggedIn && (
          <h4>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h4>
        )}

        <div className={classes.centerAct}>
          {!authCtx.isLoggedIn && (
            <input placeholder="Email address" ref={inputRef} />
          )}
          {!authCtx.isLoggedIn && (
            <button onClick={clickHandler}>Get Started</button>
          )}

          {alertMsg && <p className={classes.alert}>Email is required!</p>}
        </div>
      </div>
    </section>
  );
};

export default StartPage;
