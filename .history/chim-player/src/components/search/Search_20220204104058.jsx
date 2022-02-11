import React, { useRef } from "react";

function Search({ search }) {
  const searchRef = useRef();

  const setSearch = (event) => {
    event.preventDefault();
    console.log(searchRef.current);
    search(searchRef.current);
  };

  return (
    <form onSubmit={setSearch}>
      <input type="text" ref={searchRef} />
    </form>
  );
}

export default Search;
