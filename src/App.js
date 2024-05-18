import logo from "./logo.svg";
import "./App.css";

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
        <iframe
          title="soundcloud-widget"
          width="700"
          height="300"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1742137020&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ></iframe>
        <div
          style={{
            fontSize: "10px",
            color: "#cccccc",
            lineBreak: "anywhere",
            wordBreak: "normal",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            fontFamily:
              "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
            fontWeight: 100,
          }}
        >
          <a
            href="https://soundcloud.com/undsclsd"
            title="Undisclosed"
            target="_blank"
            style={{ color: "#cccccc", textDecoration: "none" }}
          >
            Undisclosed
          </a>{" "}
          ·{" "}
          <a
            href="https://soundcloud.com/undsclsd/vanic-undisclosed-vol-3"
            title="VANIC | UNDISCLOSED VOL. 3"
            target="_blank"
            style={{ color: "#cccccc", textDecoration: "none" }}
          >
            VANIC | UNDISCLOSED VOL. 3
          </a>
        </div>
      </header>
    </div>
  );
}
export default App;
