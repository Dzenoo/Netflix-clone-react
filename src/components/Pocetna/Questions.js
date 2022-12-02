import React from "react";

import classes from "./Questions.module.css";

const Questions = () => {
  return (
    <section className={classes.section__3}>
      <div className={classes.title}>
        <h1>Frequently Asked Questions</h1>
      </div>
      <div className={classes.questionList}>
        <details>
          <hr></hr>
          <summary>What is Netflix?</summary>
          <p>
            Netflix is a streaming service that offers a wide variety of
            award-winning TV shows, movies, anime, documentaries, and more on
            thousands of internet-connected devices. You can watch as much as
            you want, whenever you want without a single commercial all for one
            low monthly price. There's always something new to discover and new
            TV shows and movies are added every week!
          </p>
        </details>
        <details>
          <hr></hr>
          <summary>What can I watch on Netflix??</summary>
          <p>
            Netflix has an extensive library of feature films, documentaries, TV
            shows, anime, award-winning Netflix originals, and more. Watch as
            much as you want, anytime you want.
          </p>
        </details>
        <details>
          <hr></hr>
          <summary>Where can I watch?</summary>
          <p>
            Watch anywhere, anytime. Sign in with your Netflix account to watch
            instantly on the web at netflix.com from your personal computer or
            on any internet-connected device that offers the Netflix app,
            including smart TVs, smartphones, tablets, streaming media players
            and game consoles. You can also download your favorite shows with
            the iOS, Android, or Windows 10 app. Use downloads to watch while
            you're on the go and without an internet connection. Take Netflix
            with you anywhere.
          </p>
        </details>
      </div>
      <div className={classes.actions}>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <input placeholder="Email address" />
        <button>Get Started</button>
      </div>
    </section>
  );
};

export default Questions;
