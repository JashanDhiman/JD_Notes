import React from "react";
import { Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "./components/ErrorBoundary";
import PrivateRoute from "./components/PrivateRoute";
import { ProfileProvider } from "./context/profile.context";
import Home from "./pages/home";

function App() {
  return (
    <ErrorBoundary>
      <ProfileProvider>
        <Routes>
          <Route path="/" element={<PrivateRoute />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </ProfileProvider>
    </ErrorBoundary>
  );
}

export default App;
