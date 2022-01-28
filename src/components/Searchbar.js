import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import EditNote from "./notes/EditNote";

const Searchbar = (notes) => {
  const [query, setQuery] = useState("");
  const [edit, setEdit] = useState(null);
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
    "rotate(7deg)",
    "rotate(6deg)",
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
              onClick={() => setEdit(post)}
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
              <div>{post.Content}</div>
            </div>
          ))}
      </div>
      {edit && <EditNote props={edit} />}
    </>
  );
};

export default Searchbar;
