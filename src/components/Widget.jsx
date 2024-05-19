import React from "react";

function Widget() {
  return (
    <div>
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
    </div>
  );
}

export default Widget;
