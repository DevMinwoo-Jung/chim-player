import SearchHistory from "components/searchHistory/SearchHistory";
import React, { useEffect, useRef, useState } from "react";

function Search({ search }) {
  const [showHistory, setShowHistory] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);
  const searchRef = useRef();

  function saveSearchHistory(searchHistory) {
    const ex = { searchHistory };
    let getSearchHistoryhh = localStorage.getItem("searchHistory");
    if (getSearchHistoryhh === null) {
      getSearchHistoryhh = [];
    } else {
      getSearchHistoryhh = JSON.parse(searchHistory);
      console.log(getSearchHistoryhh);
    }
    // getSearchHistoryhh.push(ex);
    getSearchHistoryhh = [...getSearchHistoryhh, ex];
    localStorage.setItem("searchHistory", JSON.stringify(getSearchHistoryhh));
    setSearchHistory(getSearchHistoryhh);
  }

  const setSearch = (event) => {
    event.preventDefault();
    search(searchRef.current.value);
  };

  const setSearchHistoryFnc = (event) => {
    event.preventDefault();
    saveSearchHistory(searchRef.current.value);
  };

  const setEvents = (event) => {
    event.preventDefault();
    setSearch(event);
    setSearchHistoryFnc(event);
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
      {/* {showHistory && <SearchHistory searchHistory={searchHistory} />} */}
    </div>
  );
}

export default Search;
