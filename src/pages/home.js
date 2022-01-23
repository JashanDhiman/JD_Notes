import React from "react";
import Navbar from "../components/Navbar";
import CreateNotes from "../components/notes/CreateNotes";
import Notes from "../components/notes/Notes";
//import Searchbar from "../components/Searchbar";
import "../styles/notes.css";

function Home() {
  return (
    <>
      <Navbar />
      {/*<Searchbar />*/}
      <Notes />
      <hr />
      <CreateNotes />
    </>
  );
}

export default Home;
