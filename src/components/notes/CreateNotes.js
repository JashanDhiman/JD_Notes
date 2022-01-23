import React, { useState } from "react";
import firebase from "firebase/compat/app";
import { database } from "../../misc/firebase";

const CreateNotes = () => {
  const [show, setShow] = useState(false);

  const onSubmit = async () => {
    const Title = document.getElementById("topic").value;
    const Content = document.getElementById("note-text").value;
    const newNotesdata = {
      createdAt: firebase.database.ServerValue.TIMESTAMP,
      Title,
      Content,
    };

    try {
      await database.ref("profiles/notes").push(newNotesdata);

      alert(`${Title} has been created`, 400);
    } catch (err) {
      alert(err.message, 4000);
    }
  };
  function create() {
    setShow(true);
    console.log(show);
  }
  function close() {
    setShow(false);
  }

  return (
    <>
      {show && (
        <div id="showCreate">
          <header>
            <p>New Note</p>
          </header>
          <div>
            <input id="title" placeholder="Title...." />
          </div>
          <div>
            <textarea id="content" placeholder="Description..." />
          </div>
          <footer>
            <button onClick={onSubmit}>Create new chat room</button>
          </footer>
        </div>

        //<div id="container3">
        //  <div className="open-note" id="open-note">
        //    <div className="header">
        //      <button id="save" onClick={onSubmit}>
        //        Save
        //      </button>
        //      {"   "}
        //      <button id="remove" onClick={close}>
        //        Close
        //      </button>
        //    </div>
        //    <input id="topic" placeholder="Title" />
        //    <textarea
        //      id="note-text"
        //      placeholder="Write something here..."
        //    ></textarea>
        //  </div>
        //</div>
      )}
      <div id="create" onClick={create}>
        +
      </div>
    </>
  );
};

export default CreateNotes;
