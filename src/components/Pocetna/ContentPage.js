import React from "react";

import classes from "./ContentPage.module.css";

import sl1 from "../../assets/slik.png";
import sl2 from "../../assets/mobile.png";
import sl3 from "../../assets/tvs.png";
import sl4 from "../../assets/device.png";

const ContentPage = () => {
  return (
    <section className={classes.afterHero}>
      <div className={classes.features}>
        <div className={classes.features__feature}>
          <h1>Enjoy on your TV.</h1>
          <p>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more
          </p>
        </div>
        <img src={sl4} />

        <img src={sl2} />

        <div className={classes.features__feature}>
          <h1>Download your shows to watch offline.</h1>
          <p>Save your favorites easily and always have something to watch.</p>
        </div>

        <div className={classes.features__feature}>
          <h1>Watch everywhere.</h1>
          <p>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV without paying more.
          </p>
        </div>
        <img src={sl3} />

        <img src={sl1} />
        <div className={classes.features__feature}>
          <h1>Create profiles for kids.</h1>
          <p>
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContentPage;
