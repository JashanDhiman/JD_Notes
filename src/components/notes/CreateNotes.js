import React, { useState } from "react";
import firebase from "firebase/compat/app";
import { database } from "../../misc/firebase";
import { AiFillSave } from "react-icons/ai";
import { IoIosCloseCircle, IoIosAddCircle } from "react-icons/io";
import { toast } from "react-toastify";

const CreateNotes = () => {
  const userNow = firebase.auth().currentUser;
  const [show, setShow] = useState(false);
  const onSubmit = async () => {
    const Title = document.getElementById("topic").value;
    const Content = document.getElementById("note-text").value;
    if (Title && Content) {
      const newNotesdata = {
        createdAt: firebase.database.ServerValue.TIMESTAMP,
        Title,
        Content,
      };
      try {
        await database.ref(`profiles/${userNow.uid}/notes`).push(newNotesdata);
        setShow(false);
        toast.success(`${Title} has been created.`);
      } catch (err) {
        toast.error(err.message);
      }
    } else toast.error("Fill the provided fields.");
  };
  return (
    <>
      {show ? (
        <div id="container3">
          <div className="open-note" id="open-note">
            <div className="header">
              <button id="save" className="icon" onClick={onSubmit}>
                <AiFillSave />
              </button>
              {"   "}
              <button
                id="remove"
                className="icon"
                onClick={() =>
                  window.confirm(
                    "Really want to close ?\nIt leads to loss of data of this note."
                  )
                    ? setShow(false)
                    : null
                }
              >
                <IoIosCloseCircle />
              </button>
            </div>
            <input id="topic" placeholder="Title" />
            <textarea
              id="note-text"
              placeholder="Write something here..."
            ></textarea>
          </div>
        </div>
      ) : (
        <div id="create" onClick={() => setShow(true)}>
          <span>
            <IoIosAddCircle />
          </span>
        </div>
      )}
    </>
  );
};

export default CreateNotes;
