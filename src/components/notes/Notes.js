import React, { useEffect, useState } from "react";
import { database } from "../../misc/firebase";
import Searchbar from "../Searchbar";

export function transformToArrWithId(snapVal) {
  return snapVal
    ? Object.keys(snapVal).map((noteId) => {
        return { ...snapVal[noteId], id: noteId };
      })
    : [];
}
const Notes = () => {
  const [notes, setNotes] = useState(null);
  const isNotesEmpty = notes && notes.length === 0;
  const canShowNotes = notes && notes.length > 0;

  useEffect(() => {
    const notesRef = database.ref("/profiles/notes");
    notesRef.on("value", (snap) => {
      const data = transformToArrWithId(snap.val());
      setNotes(data);
    });

    return () => {
      notesRef.off("value");
    };
  }, []);
  return (
    <>
      {canShowNotes ? (
        <Searchbar notes={notes} />
      ) : (
        isNotesEmpty && <h2>No Notes yet</h2>
      )}
      {/*<div className="notes">
        {canShowNotes &&
          notes.map((msg) => (
            <div className="note" key={msg.id}>
              <div>{msg.Title}</div>
              <div>{msg.Content}</div>
            </div>
          ))}
      </div>*/}

      <div className="container3">
        <div className="open-note" id="open-note">
          <div className="header">
            <button value="jas" id="save">
              Save
            </button>
            {"   "}
            <button id="remove">Close</button>
          </div>
          <input type="text" id="topic" placeholder="Topic" />
          <textarea
            id="note-text"
            placeholder="Write something here..."
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default Notes;
