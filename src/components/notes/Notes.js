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
    </>
  );
};

export default Notes;
