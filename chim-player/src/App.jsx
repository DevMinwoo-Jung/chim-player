import Main from "components/main/main";
import "./App.css";

function App({ chimPlayer }) {
  return (
    <div className="App">
      <Main chimPlayer={chimPlayer} />
    </div>
  );
}

export default App;
