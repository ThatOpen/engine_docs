import React from "react";
import Layout from "../components/Layout/Layout";

// Default implementation, that you can customize
export default function Root({ children }) {
  return <Layout>{children}</Layout>;
}
