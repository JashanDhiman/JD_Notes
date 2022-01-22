import React from "react";
import { Navigate } from "react-router";
import { useProfile } from "../context/profile.context";
import SignIn from "../pages/signin";

const PrivateRoute = () => {
  const profile = useProfile();
  console.log(profile);
  return profile ? <Navigate to="/home" /> : <SignIn />;
};

export default PrivateRoute;
