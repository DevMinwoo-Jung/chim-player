import React, { useRef } from "react";

function Search({ search }) {
  const searchRef = useRef();

  const setSearch = () => {
    search(searchRef);
  };

  return (
    <form onSubmit={setSearch}>
      <input type="text" ref={searchRef} />
    </form>
  );
}

export default Search;
