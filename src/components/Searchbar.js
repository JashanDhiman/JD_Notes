import React, { useState } from "react";

const Searchbar = (notes) => {
  const [query, setQuery] = useState("");

  return (
    <>
      <div className="search_box">
        {/*<div className="search_btn">
        <i className="bi bi-search"></i>
      </div>*/}
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
            <div className="note" key={post.id}>
              <div>{post.Title}</div>
              <div>{post.Content}</div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Searchbar;
