import React, { useState } from "react";
import { search } from "../scripts/keyfetch";

function parseInlineStyle(style) {
  const template = document.createElement("template");
  template.setAttribute("style", style);
  return Object.entries(template.style)
    .filter(([key]) => !/^[0-9]+$/.test(key))
    .filter(([, value]) => Boolean(value))
    .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
}

let playerStyle = parseInlineStyle(
  "font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"
);
let tag1Style = parseInlineStyle("color: #cccccc; text-decoration: none;");
let tag2Style = parseInlineStyle("color: #cccccc; text-decoration: none;");

function EmbeddedPlayer({ query }) {
  const [uri, setUri] = useState("https://api.soundcloud.com/tracks/202111840");

  // search(query).then((object) => {
  //   console.log(object);
  //   setUri(object.collection[0].uri);
  // });

  return (
    <div>
      <iframe
        width="100%"
        height="166"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src={`https://w.soundcloud.com/player/?url=${uri}`}
      ></iframe>
      <div style={playerStyle}>
        <a
          href="https://soundcloud.com/the-bugle"
          title="The Bugle"
          target="_blank"
          style={tag1Style}
        >
          The Bugle
        </a>{" "}
        ·{" "}
        <a
          href="https://soundcloud.com/the-bugle/bugle-179-playas-gon-play"
          title="Bugle 179 - Playas gon play"
          target="_blank"
          style={tag2Style}
        >
          Bugle 179 - Playas gon play
        </a>
      </div>
      <p>{query}</p>
    </div>
  );
}

export default EmbeddedPlayer;
