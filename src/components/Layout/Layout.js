import React from "react";
import AccentGradient from "./AccentGradient";
import MainGradient from "./MainGradient";
import styles from "./layout.module.css";

// Default implementation, that you can customize
export default function Layout({ children }) {
  return (
    <div>
      <div className={styles.layoutBackgroundParent}>
        <div className={styles.layoutBackground} />
        <AccentGradient />
        <MainGradient />
      </div>
      {children}
    </div>
  );
}
