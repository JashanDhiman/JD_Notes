import React from "react";
import Navbar from "../components/Navbar";
import CreateNotes from "../components/notes/CreateNotes";
import Notes from "../components/notes/Notes";
import { useProfile } from "../context/profile.context";
import "react-toastify/dist/ReactToastify.css";
import { Navigate } from "react-router";

function Home() {
  const profile = useProfile();
  return (
    <>
      {profile ? (
        <div>
          <Navbar />
          <Notes />
          <CreateNotes />
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
}

export default Home;
