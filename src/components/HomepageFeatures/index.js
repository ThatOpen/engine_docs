import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Native speed",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        The IFC.js parsing engine is based on WebAssembly and C++, and is
        specifically designed to read data from large files as fast as a desktop
        application.
      </>
    ),
  },
  {
    title: "Multiplatform",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        IFC.js is compatible with any platform: web application (frontend and
        backend), desktop applications (Windows, Mac and Linux) and mobile
        applications (Android and iOS).
      </>
    ),
  },
  {
    title: "Lightweight",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        An open BIM application created with IFC.js can weigh less than 1 MB.
        This library allows the creation of web and native applications with
        almost no impact on the final weight of the application.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className={styles.feature}>
        <div className={styles.placeholder}></div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
