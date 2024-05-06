import React from "react";

import styles from "./styles.module.css";

export default function Layout({ children }) {
  return (
    <>
      <GradientBackground />
      {children}
    </>
  );
}

function GradientBackground() {
  return (
    <div className={styles.gradientBackground}>
      <AccentGradient />
      <MainGradient />
    </div>
  );
}

function AccentGradient() {
  return <div className={styles.accentGradient} />;
}

function MainGradient() {
  return <div className={styles.mainGradient} />;
}
