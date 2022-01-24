import React, { useState } from "react";
import firebase from "firebase/compat/app";
import { database } from "../../misc/firebase";
import { AiFillSave } from "react-icons/ai";
import { IoIosCloseCircle } from "react-icons/io";

const EditNote = (props) => {
  //console.log(props);
  const [show, setShow] = useState(true);
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
        await database.ref("profiles/notes").push(newNotesdata);
        setShow(false);
        alert(`${Title} has been created.`, 4000);
      } catch (err) {
        alert(err.message, 4000);
      }
    } else alert("Fill the provided fields.");
  };
  return (
    <>
      {show && (
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
              {/*<button id="fav" className="icon" onClick={myFav}>
                {fav ? <MdOutlineFavoriteBorder /> : <MdOutlineFavorite />}
              </button>*/}
            </div>
            <input
              id="topic"
              placeholder="Title"
              defaultValue={props.props.Title}
            />
            <textarea
              id="note-text"
              placeholder="Write something here..."
              defaultValue={props.props.Content}
            ></textarea>
          </div>
        </div>
      )}
    </>
  );
};

export default EditNote;
