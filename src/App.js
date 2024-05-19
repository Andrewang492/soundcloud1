import logo from "./logo.svg";
import "./App.css";
import EmbeddedPlayer from "./components/EmbeddedPlayer";
import Widget from "./components/Widget";
function App() {
  //# sourceMappingURL=http://ent/web-sourcemaps/api.js-27d0ec1de3c5.map
  // var iframeElement   = document.querySelector('iframe');
  // var iframeElementID = iframeElement.id;
  // var widget1         = SC.Widget(iframeElement);
  // var widget2         = SC.Widget(iframeElementID);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        <Widget />
        <EmbeddedPlayer />
      </header>
    </div>
  );
}
export default App;
