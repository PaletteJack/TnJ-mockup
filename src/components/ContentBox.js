import React from "react";

export default function ContentBox(props) {
  return (
    <>
      <div
        className={props.state ? "content-contain" : "content-contain-small"}
      >
        <div className="content">
          <h2 id="info-header" style={{ margin: 0 }}>
            {props.title}
          </h2>
          <pre style={{ padding: 0.5 + "rem" }}>{props.content}</pre>
        </div>
      </div>
    </>
  );
}

// https://codepen.io/marijoha/pen/PKjJEO for inspiration.
// Okay to use, just understand how it works if it breaks.
