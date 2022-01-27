import React, { useState } from "react";
import firebase from "firebase/compat/app";
import { database } from "../../misc/firebase";
import { AiFillSave } from "react-icons/ai";
import { IoIosCloseCircle, IoIosAddCircle } from "react-icons/io";
import { toast } from "react-toastify";
//import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";

const CreateNotes = () => {
  const [show, setShow] = useState(false);
  //const [fav, setFav] = useState(false);
  //const myFav =()=>

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
        toast.info(`${Title} has been created.`, 4000);
      } catch (err) {
        toast.error(err.message, 4000);
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
              {/*<button id="fav" className="icon" onClick={myFav}>
                {fav ? <MdOutlineFavoriteBorder /> : <MdOutlineFavorite />}
              </button>*/}
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
