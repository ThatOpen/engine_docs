import React from "react";
import Layout from "../components/Layout/Layout";
import AuthProvider from "../components/AuthProvider/AuthProvider";
import { Auth0Provider } from "@auth0/auth0-react";

// Default implementation, that you can customize
export default function Root({ children }) {
  return (
    <Auth0Provider
      domain="thatopencompany.eu.auth0.com"
      clientId="nk7B3hJDEoHxwLZr2ilZZxuwJu9UWjOS"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <AuthProvider>
        <Layout>{children}</Layout>
      </AuthProvider>
    </Auth0Provider>
  );
}
