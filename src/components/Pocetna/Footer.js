import React from "react";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <section className={classes.footer}>
      <div className={classes.list1}>
        <ul>
          <li>FAQ</li>
          <li>Investor Relations</li>
          <li>Privacy</li>
          <li>Speed Test</li>
          <select data-placeholder="Choose a Language...">
            <option value="English">English</option>
            <option value="Bosnian">Bosnian</option>
          </select>
        </ul>
      </div>
      <div className={classes.list2}>
        <ul>
          <li>Help Center</li>
          <li>Jobs</li>
          <li>Cookie Preferences</li>
          <li>Legal Notices</li>
        </ul>
      </div>
      <div className={classes.list3}>
        <ul>
          <li>Account</li>
          <li>Ways to Watch</li>
          <li>Corporate Information</li>
          <li>Only on Netflix</li>
        </ul>
      </div>
      <div className={classes.list4}>
        <ul>
          <li>Media Center</li>
          <li>Terms of Use</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
