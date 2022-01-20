import React from "react";
import { Routes, Route } from "react-router-dom";
//import PrivateRoute from "./components/PrivateRoute";
//import PublicRoute from "./components/PublicRoute";
//import Home from "./home";
import SignIn from "./signin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      {/*<Route
        path="/home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />*/}
    </Routes>
  );
}

export default App;
