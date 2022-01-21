import React from "react";
import { Navigate, Route } from "react-router";
import { useProfile } from "../context/profile.context";

const PrivateRoute = ({ children, ...routeProps }) => {
  const profile = useProfile();
  if (!profile) {
    return <Navigate to="/signin" />;
  }
  if (profile) {
    return <Navigate to="/" />;
  }
  return <Route {...routeProps}>{children}</Route>;
};

export default PrivateRoute;
