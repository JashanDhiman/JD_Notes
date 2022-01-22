import React from "react";

const Navbar = () => {
  //let className = "menu";
  function openNav() {
    //className += " full";
  }
  function closeNav() {
    //className += " zero";
  }
  return (
    <div className="nav-bar" id="nav-bar">
      <span className="left heading">My Notes</span>
      <button className="right" onClick={openNav()}>
        <i className="bi bi-list"></i>
      </button>
      <div className="menu" id="menu">
        <button className="closebtn" onClick={closeNav()}>
          <i className="bi bi-x-square-fill"></i>
        </button>
        <div className="menu-content">
          <button>New Folder</button>
          <button>
            Sort By<i className="bi bi-filter-right"></i>
          </button>
          <button>Settings</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
