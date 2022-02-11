import React, { useRef } from "react";

function Search({ search }) {
  const searchRef = useRef();

  const searchHistory = (searchHistory) => {
    console.log(searchHistory);
  };

  const setSearch = (event) => {
    event.preventDefault();
    console.log(searchRef.current.value);
    search(searchRef.current.value);
    searchHistory(searchRef.current.value);
  };

  return (
    <form onSubmit={setSearch}>
      <input type="text" ref={searchRef} />
    </form>
  );
}

export default Search;
