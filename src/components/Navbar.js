import React from "react";
import firebase from "firebase/compat/app";
import { MdLogout } from "react-icons/md";

const Navbar = () => {
  const logOut = () => {
    firebase.auth().signOut();
  };
  return (
    <div className="nav-bar" id="nav-bar">
      <span className="left heading">My Notes</span>
      <button
        className="right"
        onClick={() => (window.confirm("Want to Log-Out ?") ? logOut() : null)}
      >
        <MdLogout />
      </button>
    </div>
  );
};

export default Navbar;
