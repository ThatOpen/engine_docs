import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";

const AuthProvider = ({ children }) => {
  return <>{children}</>;
};

const WithAuthProvider = withAuthenticationRequired(AuthProvider);

export default WithAuthProvider;
