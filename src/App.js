import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import { ProfileProvider } from "./context/profile.context";
//import PublicRouste from "./components/PublicRoute";
import Home from "./home";
import SignIn from "./signin";

function App() {
  return (
    <ProfileProvider>
      <Routes>
        <Route
          path="/signin"
          element={
            //<PublicRoute>
            <SignIn />
            //</PublicRoute>
          }
        />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
      </Routes>
    </ProfileProvider>
  );
}

export default App;
