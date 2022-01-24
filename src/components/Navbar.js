import React from "react";
import { MdLogout } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="nav-bar" id="nav-bar">
      <span className="left heading">My Notes</span>
      <button
        className="right"
        onClick={() => window.confirm("Want to Log-Out ?")}
      >
        <MdLogout />
      </button>
    </div>
  );
};

export default Navbar;
