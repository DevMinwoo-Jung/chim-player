import SearchHistory from "components/searchHistory/SearchHistory";
import React, { useRef, useState } from "react";

function Search({ search }) {
  const [showHistory, setShowHistory] = useState(false);
  const [searchHistory, setSearchHistory] = useState();

  const searchRef = useRef();

  const saveSearchHistory = (searchHistory) => {
    let getSearchHistory = localStorage.getItem("searchHistory");
    if (getSearchHistory === null) {
      getSearchHistory = [];
    } else {
      getSearchHistory = JSON.parse(searchHistory);
    }
    getSearchHistory.push(searchHistory);
    getSearchHistory = [...getSearchHistory];
    localStorage.setItem("searchHistory", JSON.stringify(getSearchHistory));
    setSearchHistory(getSearchHistory);
  };

  const setSearch = (event) => {
    event.preventDefault();
    console.log(searchRef.current.value);
    search(searchRef.current.value);
    saveSearchHistory(searchRef.current.value);
  };

  const onShowHistory = () => {
    setShowHistory(true);
  };

  return (
    <div>
      <form onSubmit={setSearch}>
        <input type="text" ref={searchRef} onClick={onShowHistory} />
      </form>
      {showHistory && <SearchHistory searchHistory={searchHistory} />}
    </div>
  );
}

export default Search;
