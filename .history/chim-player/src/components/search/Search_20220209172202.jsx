import SearchHistory from "components/searchHistory/SearchHistory";
import React, { useEffect, useRef, useState } from "react";

function Search({ search }) {
  const [showHistory, setShowHistory] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);
  const searchRef = useRef();

  function saveSearchHistory(searchHistory) {
    console.log(searchHistory);
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
  }

  const setSearch = (event) => {
    event.preventDefault();
    search(searchRef.current.value);
  };

  const setSearchHistoryFnc = () => {
    saveSearchHistory(searchRef.current.value);
  };

  const setEvents = () => {
    setSearch();
    setSearchHistoryFnc();
  };

  const onShowHistory = () => {
    setShowHistory(true);
  };

  useEffect(() => {
    let showSearchHistory = localStorage.getItem("searchHistory");
    if (searchHistory === null) {
      showSearchHistory = [];
      setSearchHistory(showSearchHistory);
    } else {
      showSearchHistory = JSON.parse(showSearchHistory);
    }
    setSearchHistory(showSearchHistory);
  }, []);

  return (
    <div>
      <form onSubmit={setEvents}>
        <input type="text" ref={searchRef} onClick={onShowHistory} />
      </form>
      {showHistory && <SearchHistory searchHistory={searchHistory} />}
    </div>
  );
}

export default Search;
