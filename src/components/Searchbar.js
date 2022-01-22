import React, { useState } from "react";

const data = [
  "jashan",
  "kamal",
  "suman",
  "mudita",
  "rajan",
  "raman",
  "happy",
  "guarav",
  "saurav",
  "ajay",
];
const Searchbar = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="search_box">
      {/*<div className="search_btn">
        <i className="bi bi-search"></i>
      </div>*/}
      <input
        className="input_search"
        placeholder="Search by topic.."
        onChange={(event) => setQuery(event.target.value)}
      />
      {data
        .filter((post) => {
          if (query === "") {
            return post;
          } else if (post.toLowerCase().includes(query.toLowerCase())) {
            return post;
          }
          return null;
        })
        .map((post, index) => (
          <div className="box" key={index}>
            {/* title */}
            <p>{post}</p>
            {/* content */}
            <p>{post}</p>
          </div>
        ))}
    </div>
  );
};

export default Searchbar;
