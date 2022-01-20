import React from "react";
import { Navigate, Route } from "react-router";

const PrivateRoute = ({ children, ...routeProps }) => {
  const profile = false;
  if (!profile) {
    return <Navigate to="/home" />;
  }
  return <Route {...routeProps}>{children}</Route>;
};

export default PrivateRoute;
