import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:sapanadashoni@gmail.com">sapanadashoni@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")} 
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/sapana-dashoni-29a28724b/">linkedin.com/SapanaDashoni</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/SapanaDashoni15">github.com/SapanaDashoni15</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/leetcodeIcon.png")} alt="leetcode  icon" />
          <a href="https://leetcode.com/learnersapana100/">leetcode.com/learnerSapana100</a>
        </li>
      </ul>
    </footer>
  );
};
