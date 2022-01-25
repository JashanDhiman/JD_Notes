import React, { useState } from "react";
import firebase from "firebase/compat/app";
import { MdLogout } from "react-icons/md";
import { Navigate } from "react-router";

const Navbar = () => {
  const [out, setOut] = useState(false);
  const logOut = () => {
    firebase.auth().signOut();
    setOut(true);
  };
  return (
    <div className="nav-bar" id="nav-bar">
      <span className="left heading">My Notes</span>
      <button
        className="right"
        onClick={() => (window.confirm("Want to Log-Out ?") ? logOut() : null)}
      >
        {out ? <Navigate to={"/"} /> : null}
        <MdLogout />
      </button>
    </div>
  );
};

export default Navbar;
