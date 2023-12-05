import React from "react";
import styles from "./header.module.css";
import { Logo } from "./Logo";

export const Header = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <a href="https://thatopen.com/">
          <Logo />
        </a>
        <nav className={styles.nav}>
          <a href="https://platform.thatopen.com/" target="blank">
            Platform
          </a>
          <a href="https://people.thatopen.com/" target="blank">
            People
          </a>
        </nav>
        <div className={styles.nav_end}>
          <Logo />
        </div>
      </div>
    </div>
  );
};
