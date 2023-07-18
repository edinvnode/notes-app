import React from "react";
import { MdSearch } from "react-icons/md";

function Search({ handleSearchNot }) {
  return (
    <div className="search">
      <MdSearch className="Search-icons" size="1.3em" />
      <input
        type="text"
        placeholder="type to search"
        onChange={(event) => handleSearchNot(event.target.value)}
      />
    </div>
  );
}

export default Search;
