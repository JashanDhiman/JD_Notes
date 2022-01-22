import React from "react";
import Navbar from "../components/Navbar";
import Notes from "../components/Notes";
import Searchbar from "../components/Searchbar";
import "../styles/notes.css";

function Home() {
  return (
    <>
      <Navbar />
      <Searchbar />
      <Notes />
    </>
  );
}

export default Home;
