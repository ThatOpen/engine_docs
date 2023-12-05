import React from "react";
import AccentGradient from "./AccentGradient";
import MainGradient from "./MainGradient";
import styles from "./layout.module.css";
import { Header } from "./Header/Header";

// Default implementation, that you can customize
export default function Layout({ children }) {
  return (
    <div>
      <div className={styles.layoutBackgroundParent}>
        <div className={styles.layoutBackground} />
        <AccentGradient />
        <MainGradient />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <Header />
        {children}
      </div>
    </div>
  );
}
