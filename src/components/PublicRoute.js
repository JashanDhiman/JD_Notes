import React from "react";
import { Navigate, Route } from "react-router";

const PublicRoute = ({ ...routeProps }) => {
  const profile = false;
  if (profile) {
    return <Navigate to="/" />;
  }
  return <Route {...routeProps}></Route>;
};

export default PublicRoute;
