import "./App.css";
import EmbeddedPlayer from "./components/EmbeddedPlayer";
import Widget from "./components/Widget";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";

function App() {
  //# sourceMappingURL=http://ent/web-sourcemaps/api.js-27d0ec1de3c5.map
  // var iframeElement   = document.querySelector('iframe');
  // var iframeElementID = iframeElement.id;
  // var widget1         = SC.Widget(iframeElement);
  // var widget2         = SC.Widget(iframeElementID);
  const [query, setQuery] = useState("enter song name"); //what is visible on screen
  const [queryDelayed, setDelayedQuery] = useState(""); // what query is used on my functions. Does not update as frequently.

  useEffect(() => {
    const handler = setTimeout(() => {
      console.log(`query is ${query}`);
      setDelayedQuery(query);
    }, 500);

    // Cleanup function that cancels the timeout if the effect is re-run before it completes
    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <Widget />
        <EmbeddedPlayer query={queryDelayed} />
      </header>
    </div>
  );
}
export default App;
