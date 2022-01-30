import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import firebase from "firebase/compat/app";
import { database } from "../misc/firebase";
import { AiFillSave } from "react-icons/ai";
import { IoIosCloseCircle } from "react-icons/io";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

let dataStorage = 0;
const Searchbar = (notes) => {
  const [query, setQuery] = useState("");
  const [edit, setEdit] = useState(false);
  const userNow = firebase.auth().currentUser;
  var random_margin = [
    "1px",
    "2px",
    "-1px",
    "3px",
    "4px",
    "-2px",
    "5px",
    "5px",
    "-3px",
  ];
  var random_colors = [
    "#c2ff3d",
    "#ff3de8",
    "#3dc2ff",
    "#04e022",
    "#bc83e6",
    "#ebb328",
    "#C0C0C0",
    "#808080",
    "#808000",
    "#00FF00",
    "#00FFFF",
    "#008080",
    "#FF00FF",
    "#800080",
    "#CD5C5C",
    "#F08080",
    "#FA8072",
    "#E9967A",
    "#CD5C5C",
    "#40E0D0",
    "#6495ED",
  ];
  var random_degree = [
    "rotate(5deg)",
    "rotate(4deg)",
    "rotate(3deg)",
    "rotate(2deg)",
    "rotate(1deg)",
    "rotate(0deg)",
    "rotate(-1deg)",
    "rotate(-2deg)",
    "rotate(-3deg)",
    "rotate(-4deg)",
    "rotate(-5deg)",
    "rotate(-6deg)",
    "rotate(-7deg)",
  ];
  const handleEditNote = (noteData) => {
    dataStorage = noteData;
    setEdit(true);
  };
  const trashItem = (id) => {
    database.ref(`profiles/${userNow.uid}/notes/${id}`).remove();
    console.log(id);
  };
  const onSubmit = async () => {
    const newTitle = document.getElementById("topic").value;
    const newContent = document.getElementById("note-text").value;
    if (newTitle && newContent) {
      try {
        const updateNoteRef = database.ref(
          `profiles/${userNow.uid}/notes/${dataStorage.id}`
        );
        updateNoteRef.child("Title").set(newTitle);
        updateNoteRef.child("Content").set(newContent);
        setEdit(false);
        toast.success(`${newTitle} has been Updated.`);
      } catch (err) {
        toast.error(err.message, 4000);
      }
    } else toast.error("Fill the provided fields.");
  };
  return (
    <>
      <div className="search_box">
        <div className="search_btn icon">
          <FaSearch />
        </div>
        <input
          className="input_search"
          placeholder="Search by topic.."
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
      <div className="notes">
        {notes.notes
          .filter((post) => {
            if (query === "") {
              return post;
            } else if (post.Title.toLowerCase().includes(query.toLowerCase())) {
              return post;
            }
            return null;
          })
          .map((post) => (
            <div
              className="note"
              key={post.id}
              style={{
                backgroundColor:
                  random_colors[
                    Math.floor(Math.random() * random_colors.length)
                  ],
                margin:
                  random_margin[
                    Math.floor(Math.random() * random_margin.length)
                  ],
                transform:
                  random_degree[
                    Math.floor(Math.random() * random_degree.length)
                  ],
              }}
            >
              <div className="title">{post.Title}</div>
              <div className="trash" onClick={() => trashItem(post.id)}>
                <FaTrashAlt />
              </div>
              <div className="edit" onClick={() => handleEditNote(post)}>
                <FaEdit />
              </div>
              <div className="content">{post.Content}</div>
            </div>
          ))}
      </div>
      {edit && (
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
                    ? setEdit(false)
                    : null
                }
              >
                <IoIosCloseCircle />
              </button>
            </div>
            <input id="topic" defaultValue={dataStorage.Title} />
            <textarea
              id="note-text"
              defaultValue={dataStorage.Content}
            ></textarea>
          </div>
        </div>
      )}
    </>
  );
};

export default Searchbar;
