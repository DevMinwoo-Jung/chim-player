function SearchHistory({ searchHistory }) {
  return <div>{searchHistory && searchHistory.map((element) => element)}</div>;
}
export default SearchHistory;
